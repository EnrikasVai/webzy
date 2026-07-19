// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 3; // max 3 submissions per window

function getClientIP(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { windowStart: now, count: 1 });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

export async function POST(request) {
  try {
    // Rate limiting
    const ip = getClientIP(request);
    const rateCheck = checkRateLimit(ip);

    if (!rateCheck.allowed) {
      return Response.json(
        { error: "Per daug užklausų. Bandykite vėliau." },
        { status: 429 }
      );
    }

    const { name, email, message, turnstileToken } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !turnstileToken) {
      return Response.json(
        { error: "Visi laukai ir apsaugos kodas yra privalomi" },
        { status: 400 }
      );
    }

    // Server-side email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Neteisingas el. pašto formatas" },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic XSS protection)
    const sanitize = (str) => str.replace(/<[^>]*>/g, "").trim();
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanMessage = sanitize(message);

    // Verify Turnstile token with Cloudflare
    const formData = new URLSearchParams();
    formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
    formData.append("response", turnstileToken);

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: formData }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return Response.json(
        { error: "Apsaugos patikrinimas nepavyko. Bandykite dar kartą." },
        { status: 403 }
      );
    }

    // TODO: send email via Resend / nodemailer / etc.
    // Example with Resend:
    // await resend.emails.send({ ... });

    console.log("Contact form submission:", { name: cleanName, email: cleanEmail, message: cleanMessage });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Įvyko klaida. Bandykite dar kartą." },
      { status: 500 }
    );
  }
}
