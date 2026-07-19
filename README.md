# WEBZY 

**WEBZY** is a professional web development agency based in Lithuania, offering modern, fast, and SEO-optimized websites starting from **299€**. Services include e-commerce solutions, corporate websites, UI/UX design, and custom web applications.

🌐 **Live site:** [webzy.lt](https://webzy.lt)

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **Fonts** | Inter (via `next/font`) |
| **Email** | [Resend](https://resend.com/) + [React Email](https://react.email/) |
| **Spam Protection** | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## Features

- 🌍 **Bilingual** — Lithuanian (`/`) and English (`/en`) with full locale routing
- 📝 **Blog** — Markdown-like content with slugs, SEO metadata, and canonical alternates
- 📬 **Contact form** — Server-side API route with Turnstile CAPTCHA and Resend email delivery
- 🎨 **Dark/light theme** — Custom `ThemeProvider` with system preference detection
- 📱 **Fully responsive** — Mobile-first design with Tailwind CSS
- 🔍 **SEO optimized** — JSON-LD structured data, Open Graph, Twitter Cards, canonical URLs, sitemap
- 🍪 **Cookie consent banner** — GDPR-compliant cookie notice
- ⚡ **Edge-rendered** — Deployed globally via Cloudflare Pages

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & API routes
│   ├── [slug]/           # Dynamic blog post pages (LT)
│   ├── api/contact/      # Contact form API endpoint
│   ├── en/               # English locale routes
│   └── ...
├── components/           # Reusable React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Services.js
│   ├── Portfolio.js
│   ├── Pricing.js
│   ├── FAQ.js
│   ├── Contact.js
│   ├── Footer.js
│   └── ...
├── data/                 # Static data (blog posts, etc.)
│   └── blog-posts.js
└── ...
messages/                 # i18n translation files (en.json, lt.json)
public/                   # Static assets (images, robots.txt, sitemap.xml)
```

---


## License

© WEBZY. All rights reserved.
