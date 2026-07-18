"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "Nuo ko pradėti?",
    answer:
      "Viskas prasideda nuo nemokamos konsultacijos. Susisiekite su mumis, papasakokite apie savo idėją, o mes pasiūlysime geriausią sprendimą.",
  },
  {
    question: "Kokių tipų svetaines kuriate?",
    answer:
      "Kuriame visų tipų svetaines – nuo reprezentacinių iki el. parduotuvių, tinklaraščių, landing puslapių ir specializuotų web platformų.",
  },
  {
    question: "Kiek laiko užtrunka sukurti tinklalapį?",
    answer:
      "Priklausomai nuo sudėtingumo, svetainės sukūrimas užtrunka nuo 1 iki 4 savaičių. Paprastą vieno puslapio svetainę galime sukurti per 1-2 savaites.",
  },
  {
    question: "Kiek kainuoja sukurti svetainę?",
    answer:
      "Kainos prasideda nuo 299€ už vieno puslapio svetainę. Kiekvienam projektui pateikiame individualų pasiūlymą pagal jūsų poreikius.",
  },
  {
    question: "Ar galite atnaujinti seną mano svetainę?",
    answer:
      "Taip, dažnai atnaujiname ir perkuriame senas svetaines. Suteikiame joms šiuolaikišką dizainą, geresnį veikimą ir naujas funkcijas.",
  },
  {
    question: "Ar talpinimas (hostingas) įskaičiuotas?",
    answer:
      "Talpinimas nėra įskaičiuotas į kainą, tačiau rekomenduojame patikimus hostingo tiekėjus ir galime padėti susiorientuoti.",
  },
  {
    question: "Ar kuriate unikalius dizainus, ar naudojate šablonus?",
    answer:
      "Siūlome abu variantus. Galime sukurti unikalų dizainą nuo nulio arba pasinaudoti šablonais – viskas priklauso nuo jūsų biudžeto ir poreikių.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duk" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Dažniausiai užduodami{" "}
          <span className="text-primary-600">klausimai</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
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
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
