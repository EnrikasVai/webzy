"use client";

import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useT } from "./LocaleProvider";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
];

export default function Footer({ locale = "lt" }) {
  const t = useT();
  const prefix = locale === "lt" ? "" : `/${locale}`;

  const slug = {
    apieMus: locale === "en" ? "about-us" : "apie-mus",
    kontaktai: locale === "en" ? "contact" : "kontaktai",
    privatumoPolitika: locale === "en" ? "privacy-policy" : "privatumo-politika",
    blog: locale === "en" ? "blog" : "blogas",
  };

  const footerLinks = [
    { name: t("nav.paslaugos"), href: `${prefix}/#paslaugos` },
    { name: t("nav.musuDarbai"), href: `${prefix}/#darbai` },
    { name: t("nav.apieMus"), href: `${prefix}/${slug.apieMus}` },
    { name: t("nav.kainos"), href: `${prefix}/#kainos` },
    { name: t("nav.blog"), href: `${prefix}/${slug.blog}` },
    { name: t("nav.duk"), href: `${prefix}/#duk` },
    { name: t("nav.kontaktai"), href: `${prefix}/${slug.kontaktai}` },
    { name: t("footer.privatumoPolitika"), href: `${prefix}/${slug.privatumoPolitika}` },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Logo & description */}
          <div>
            <a href="#" className="inline-block">
              <Image
                src="/icon.webp"
                alt="WEBZY"
                width={280}
                height={90}
                className="h-16 md:h-20 w-auto"
              />
            </a>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              {t("footer.aprasymas")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.nuorodos")}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.sekiteMus")}</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:info@webzy.lt"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
            >
              <HiMail className="w-4 h-4" />
              info@webzy.lt
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          &copy; 2026 WEBZY. {t("footer.visosTeises")}
        </div>
      </div>
    </footer>
  );
}
