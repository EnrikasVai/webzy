"use client";

import {
  HiShoppingCart,
  HiCode,
  HiColorSwatch,
  HiTrendingUp,
  HiCog,
  HiLightningBolt,
} from "react-icons/hi";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { useT } from "./LocaleProvider";

const services = [
  {
    icon: HiShoppingCart,
    key: "elParduotuves",
  },
  {
    icon: HiCode,
    key: "svetainiuKurimas",
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
  },
  {
    icon: HiLightningBolt,
    key: "optimizavimas",
  },
];

export default function Services() {
  const t = useT();
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
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
