"use client";

import { useState, useEffect, useRef } from "react";
import { HiGlobe } from "react-icons/hi";
import { useLocale } from "./LocaleProvider";
import blogPosts from "@/data/blog-posts";

export default function LanguageSwitcher() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [hrefs, setHrefs] = useState({ lt: "/", en: "/en" });
  const ref = useRef(null);

  useEffect(() => {
    const path = window.location.pathname;

    // Check if current path is a blog post
    const cleanPath = path.replace(/^\/en/, "") || "/";
    const ltPost = blogPosts.find((p) => p.published && p.slug === cleanPath.replace(/^\//, ""));
    const enPost = blogPosts.find((p) => p.published && p.enSlug === cleanPath.replace(/^\//, ""));

    if (ltPost) {
      // On an LT blog post
      setHrefs({ lt: `/${ltPost.slug}`, en: `/en/${ltPost.enSlug}` });
    } else if (enPost) {
      // On an EN blog post
      setHrefs({ lt: `/${enPost.slug}`, en: `/en/${enPost.enSlug}` });
    } else if (cleanPath === "/blogas") {
      // Blog listing
      setHrefs({ lt: "/blogas", en: "/en/blog" });
    } else if (cleanPath === "/blog") {
      setHrefs({ lt: "/blogas", en: "/en/blog" });
    } else {
      // Map other paths
      const enSlugs = {"/apie-mus": "/about-us", "/kontaktai": "/contact", "/privatumo-politika": "/privacy-policy", "/blogas": "/blog", "/wordpress-svetainiu-kurimas": "/wordpress-website-development"};
      const ltSlugs = {"/about-us": "/apie-mus", "/contact": "/kontaktai", "/privacy-policy": "/privatumo-politika", "/blog": "/blogas", "/wordpress-website-development": "/wordpress-svetainiu-kurimas"};
      const pathWithoutEn = path.replace(/^\/en/, "") || "/";
      const isEn = path.startsWith("/en");

      if (isEn) {
        setHrefs({
          lt: ltSlugs[pathWithoutEn] || pathWithoutEn,
          en: path,
        });
      } else {
        setHrefs({
          lt: path,
          en: `/en${enSlugs[path] || path}`,
        });
      }
    }
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = locale === "lt" ? "LT" : "EN";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        aria-label="Kalba / Language"
      >
        <HiGlobe className="w-5 h-5" />
        <span className="text-xs font-semibold uppercase">{current}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
          <a
            href={hrefs.lt}
            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
              locale === "lt"
                ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => setOpen(false)}
          >
            <span className="text-base">🇱🇹</span>
            <span>Lietuvių</span>
            {locale === "lt" && <span className="ml-auto text-xs text-primary-600">●</span>}
          </a>
          <a
            href={hrefs.en}
            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
              locale === "en"
                ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => setOpen(false)}
          >
            <span className="text-base">🇬🇧</span>
            <span>English</span>
            {locale === "en" && <span className="ml-auto text-xs text-primary-600">●</span>}
          </a>
        </div>
      )}
    </div>
  );
}
