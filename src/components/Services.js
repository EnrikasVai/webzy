"use client";

import {
  HiShoppingCart,
  HiCode,
  HiColorSwatch,
  HiTrendingUp,
  HiCog,
  HiLightningBolt,
} from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { useT, useLocale } from "./LocaleProvider";

const services = [
  {
    icon: HiShoppingCart,
    key: "elParduotuves",
  },
  {
    icon: HiCode,
    key: "svetainiuKurimas",
    href: { lt: "/wordpress-svetainiu-kurimas", en: "/en/wordpress-website-development" },
  },
  {
    icon: HiColorSwatch,
    key: "dizainas",
  },
  {
    icon: HiTrendingUp,
    key: "seo",
  },
  {
    icon: HiCog,
    key: "prieziura",
    href: { lt: "/svetainiu-prieziura", en: "/en/website-maintenance" },
  },
  {
    icon: HiLightningBolt,
    key: "optimizavimas",
  },
];

export default function Services() {
  const t = useT();
  const { locale } = useLocale();
  return (
    <section id="paslaugos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedOnScroll animation="fade-in-up">
          <h2 className="section-title">
            <span>{t("services.pavadinimas1")} </span>
            <span className="text-primary-600">{t("services.pavadinimas2")}</span>
          </h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
            {t("services.aprasymas")}
          </p>
        </AnimatedOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedOnScroll key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={index * 0.15}>
              {service.href ? (
              <Link href={service.href[locale] || service.href.lt} className="card group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl block">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(`services.${service.key}`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(`services.${service.key}Desc`)}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  {locale === "en" ? "Learn more" : "Sužinokite daugiau"} <FiArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              ) : (
              <div className="card group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(`services.${service.key}`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(`services.${service.key}Desc`)}
                </p>
              </div>
              )}
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
