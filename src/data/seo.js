/**
 * Centralizuota SEO konfigūracija.
 * Visi meta title, description, openGraph, twitter ir kt. duomenys vienoje vietoje.
 *
 * Naudojimas puslapiuose:
 *   import { getPageMeta } from "@/data/seo";
 *   export const metadata = getPageMeta("home", "lt");
 *
 * Naudojimas layout'uose (su title template):
 *   import { getLayoutMeta } from "@/data/seo";
 *   export const metadata = getLayoutMeta("lt");
 */

const SITE = {
  name: "WEBZY",
  url: "https://webzy.lt",
  ogImage: "/og-image.webp",
  ogImageAlt: "WEBZY - Profesionalios interneto svetainės",
  icon: "/favicon.ico",
  appleIcon: "/icon.webp",
};

// Puslapio specifiniai meta duomenys
const PAGES = {
  home: {
    lt: {
      title: "Internetinių svetainių kūrimas nuo 299€ | WEBZY",
      description:
        "Kuriame greitas, modernias ir SEO optimizuotas interneto svetaines nuo 299€. E-komercija, reprezentacinės svetainės, dizainas ir web sprendimai. Nemokama konsultacija!",
      canonical: "/",
    },
    en: {
      title: "Website Development from €299 | WEBZY",
      description:
        "We build fast, modern and SEO-optimized websites from €299. E-commerce, business websites, design and web solutions. Free consultation!",
      canonical: "/en",
    },
  },
  about: {
    lt: {
      title: "Apie mus | WEBZY",
      description:
        "Susipažinkite su WEBZY komanda. Kuriame profesionalias interneto svetaines, e-komercijos sprendimus ir web dizainą nuo 299€. Patirtis, kokybė ir inovatyvūs sprendimai.",
      canonical: "/apie-mus",
    },
    en: {
      title: "About Us | WEBZY",
      description:
        "Meet the WEBZY team. We create professional websites, e-commerce solutions and web design from €299.",
      canonical: "/en/about-us",
    },
  },
  blog: {
    lt: {
      title: "Blogas | WEBZY",
      description:
        "WEBZY tinklaraštis apie interneto svetainių kūrimą, e-komerciją, SEO, web dizainą ir skaitmeninę rinkodarą. Patarimai ir įžvalgos verslui.",
      canonical: "/blogas",
    },
    en: {
      title: "Blog | WEBZY",
      description:
        "WEBZY blog about website development, e-commerce, SEO, web design and digital marketing. Tips and insights for your business.",
      canonical: "/en/blog",
    },
  },
  contact: {
    lt: {
      title: "Kontaktai | WEBZY",
      description:
        "Susisiekite su WEBZY ir gaukite nemokamą konsultaciją. Interneto svetainių kūrimas, e-komercija, SEO paslaugos. Rašykite: info@webzy.lt",
      canonical: "/kontaktai",
    },
    en: {
      title: "Contact | WEBZY",
      description:
        "Contact WEBZY for a free consultation. Website development, e-commerce, SEO services.",
      canonical: "/en/contact",
    },
  },
  privacy: {
    lt: {
      title: "Privatumo politika | WEBZY",
      description:
        "WEBZY privatumo politika. Sužinokite, kaip mes renkame, naudojame ir saugome jūsų asmens duomenis.",
      canonical: "/privatumo-politika",
      noIndex: true,
    },
    en: {
      title: "Privacy Policy | WEBZY",
      description:
        "WEBZY privacy policy. Learn how we collect, use and protect your personal data.",
      canonical: "/en/privacy-policy",
      noIndex: true,
    },
  },
  wordpress: {
    lt: {
      title: "WordPress svetainių kūrimas nuo 299€ | WEBZY",
      description:
        "Profesionalus WordPress svetainių kūrimas, WooCommerce el. parduotuvės, SEO optimizacija ir techninė priežiūra. Individualūs sprendimai verslui. Nemokama konsultacija!",
      canonical: "/wordpress-svetainiu-kurimas",
    },
    en: {
      title: "WordPress Website Development from €299 | WEBZY",
      description:
        "Professional WordPress website development, WooCommerce online stores, SEO optimization and maintenance. Custom solutions for businesses. Free consultation!",
      canonical: "/en/wordpress-website-development",
    },
  },
  maintenance: {
    lt: {
      title: "Svetainių priežiūra ir palaikymas nuo 29€/mėn | WEBZY",
      description:
        "Profesionali interneto svetainių priežiūra: WordPress atnaujinimai, atsarginės kopijos, saugumo užtikrinimas, greičio optimizavimas ir techninis palaikymas. Planai nuo 29€/mėn.",
      canonical: "/svetainiu-prieziura",
    },
    en: {
      title: "Website Maintenance & Support from €29/mo | WEBZY",
      description:
        "Professional website maintenance: WordPress updates, backups, security monitoring, speed optimization and technical support. Plans from €29/month.",
      canonical: "/en/website-maintenance",
    },
  },
};

// Alternatyvūs kalbų URL (hreflang)
const ALT_SLUGS = {
  home: { lt: "/", en: "/en" },
  about: { lt: "/apie-mus", en: "/en/about-us" },
  blog: { lt: "/blogas", en: "/en/blog" },
  contact: { lt: "/kontaktai", en: "/en/contact" },
  privacy: { lt: "/privatumo-politika", en: "/en/privacy-policy" },
  wordpress: { lt: "/wordpress-svetainiu-kurimas", en: "/en/wordpress-website-development" },
  maintenance: { lt: "/svetainiu-prieziura", en: "/en/website-maintenance" },
};

const LOCALES = { lt: "lt_LT", en: "en_US" };

/**
 * Sukuria standartinį meta objektą puslapiui.
 * @param {string} pageKey - Raktas iš PAGES objekto
 * @param {string} locale - "lt" arba "en"
 * @returns {object} Next.js metadata objektas
 */
export function getPageMeta(pageKey, locale = "lt") {
  const page = PAGES[pageKey]?.[locale];
  if (!page) return {};

  const alts = ALT_SLUGS[pageKey];
  const ogLocale = LOCALES[locale];
  const url = locale === "en" ? `${SITE.url}/en` : SITE.url;
  const pageUrl = `${SITE.url}${page.canonical}`;

  const meta = {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: page.canonical,
      languages: alts,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: pageUrl,
      siteName: SITE.name,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} - ${page.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [SITE.ogImage],
    },
  };

  if (page.noIndex) {
    meta.robots = { index: false, follow: true };
  }

  return meta;
}

/**
 * Sukuria meta objektą layout'ui (su title template).
 * @param {string} locale - "lt" arba "en"
 * @returns {object} Next.js metadata objektas
 */
export function getLayoutMeta(locale = "lt") {
  const ogLocale = LOCALES[locale];
  const isEn = locale === "en";
  const canonical = isEn ? "/en" : "/";
  const siteUrl = isEn ? `${SITE.url}/en` : SITE.url;

  return {
    title: {
      default: isEn
        ? `${SITE.name} - Professional Websites & Web Solutions`
        : `${SITE.name} - Profesionalios interneto svetainės ir web sprendimai`,
    },
    description: isEn
      ? "Professional website development from €299. E-commerce, business websites, SEO, design. Free consultation."
      : "Profesionalios interneto svetainių kūrimas nuo 299€. E-komercija, dizainas, SEO. Nemokama konsultacija.",
    keywords: isEn
      ? ["website development", "web design", "e-commerce", "SEO services", "web development Lithuania"]
      : ["interneto svetainių kūrimas", "web dizainas", "e-komercija", "SEO paslaugos", "svetainių kūrimas Lietuvoje"],
    authors: [{ name: SITE.name, url: SITE.url }],
    icons: { icon: SITE.icon, apple: SITE.appleIcon },
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
      languages: { lt: "/", en: "/en" },
    },
    openGraph: {
      title: isEn
        ? `${SITE.name} - Professional Websites & Web Solutions`
        : `${SITE.name} - Profesionalios interneto svetainės`,
      description: isEn
        ? "Professional website development from €299. E-commerce, design, SEO. Free consultation."
        : "Profesionalios interneto svetainių kūrimas nuo 299€. E-komercija, dizainas, SEO. Nemokama konsultacija.",
      type: "website",
      locale: ogLocale,
      siteName: SITE.name,
      url: siteUrl,
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} - Professional Websites`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEn
        ? `${SITE.name} - Professional Websites & Web Solutions`
        : `${SITE.name} - Profesionalios interneto svetainės`,
      description: isEn
        ? "Professional website development from €299. E-commerce, design, SEO. Free consultation."
        : "Profesionalios interneto svetainių kūrimas nuo 299€. E-komercija, dizainas, SEO. Nemokama konsultacija.",
      images: [SITE.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

/**
 * Sukuria meta objektą blogo įrašui (dinaminis).
 * @param {object} post - Blog post objektas iš blog-posts.js
 * @param {string} locale - "lt" arba "en"
 * @returns {object} Next.js metadata objektas
 */
export function getBlogPostMeta(post, locale = "lt") {
  const lang = post[locale];
  const ogLocale = LOCALES[locale];
  const slug = locale === "en" ? post.enSlug : post.slug;
  const prefix = locale === "en" ? "/en" : "";
  const pageUrl = `${SITE.url}${prefix}/${slug}`;

  return {
    title: { absolute: lang.title },
    description: lang.description,
    alternates: {
      canonical: `${prefix}/${slug}`,
      languages: { lt: `/${post.slug}`, en: `/en/${post.enSlug}` },
    },
    openGraph: {
      title: `${lang.title} | ${SITE.name}`,
      description: lang.description,
      type: "article",
      publishedTime: post.date,
      url: pageUrl,
      siteName: SITE.name,
      locale: ogLocale,
      images: lang.image
        ? [{ url: lang.image, width: 1200, height: 630, alt: lang.title }]
        : [{ url: SITE.ogImage, width: 1200, height: 630, alt: lang.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${lang.title} | ${SITE.name}`,
      description: lang.description,
      images: lang.image ? [lang.image] : [SITE.ogImage],
    },
  };
}

export { SITE, PAGES, ALT_SLUGS };
