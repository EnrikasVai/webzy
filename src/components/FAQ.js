"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useT } from "./LocaleProvider";

const faqKeys = [
  "kl1", "kl2", "kl3", "kl4", "kl5", "kl6", "kl7",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useT();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duk" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          {t("faq.pavadinimas")}
        </h2>

        <div className="space-y-4">
          {faqKeys.map((key, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => toggle(index)}
              >
                <span>{t(`faq.${key}`)}</span>
                <HiChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(`faq.${key}ats`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
