export async function POST(request) {
  try {
    const { name, email, message, turnstileToken } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !turnstileToken) {
      return Response.json(
        { error: "Visi laukai ir apsaugos kodas yra privalomi" },
        { status: 400 }
      );
    }

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

    console.log("Contact form submission:", { name, email, message });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Įvyko klaida. Bandykite dar kartą." },
      { status: 500 }
    );
  }
}
