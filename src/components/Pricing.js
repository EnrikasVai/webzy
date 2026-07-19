"use client";

import { HiCheck, HiBadgeCheck } from "react-icons/hi";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { useT } from "./LocaleProvider";

const plans = [
  {
    key: "vienoPuslapio",
    price: "299",
    popular: false,
  },
  {
    key: "reprezentacine",
    price: "399",
    popular: true,
  },
  {
    key: "individualus",
    price: "549+",
    popular: false,
  },
];

export default function Pricing() {
  const t = useT();
  return (
    <section id="kainos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedOnScroll animation="fade-in-up">
          <h2 className="section-title">
            <span>{t("pricing.pavadinimas1")} </span>
            <span className="text-primary-600">{t("pricing.pavadinimas2")}</span>
          </h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
            {t("pricing.aprasymas")}
          </p>
        </AnimatedOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedOnScroll key={index} animation={index === 1 ? "fade-in-up" : index === 0 ? "fade-in-left" : "fade-in-right"} delay={index * 0.2}>
              <div
                className={`relative card flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-primary-500 scale-105 md:scale-105 shadow-xl hover:shadow-2xl"
                    : "border border-gray-200 hover:shadow-xl"
                }`}
              >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                  <HiBadgeCheck className="w-4 h-4" />
                  {t("pricing.populariausias")}
                </div>
              )}

              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(`pricing.${plan.key}`)}
                </h3>
                <div className="text-4xl font-extrabold text-primary-600">
                  €{plan.price}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t("pricing.vienkartinis")}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {t(`pricing.${plan.key}Features`).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <HiCheck className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium text-center px-3 py-2 rounded-lg mb-6">
                {t(`pricing.${plan.key}Tinka`)}
              </div>

              <a
                href="#kontaktai"
                className={`text-center font-semibold py-3 px-8 rounded-lg transition-all duration-300 block ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-outline"
                }`}
              >
                {t("pricing.pasirinkti")}
              </a>
            </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
