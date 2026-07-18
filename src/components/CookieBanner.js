"use client";

import { useState, useEffect } from "react";
import { useT, useLocale } from "./LocaleProvider";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const t = useT();
  const { locale } = useLocale();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 text-center md:text-left">
          {t("cookie.tekstas")}
          <a
            href={locale === "en" ? "/en/privacy-policy" : "/privatumo-politika"}
            className="text-primary-600 hover:text-primary-700 underline ml-1 whitespace-nowrap"
          >
            {t("cookie.suZinoti")}
          </a>
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={reject}
            className="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium py-2 px-5 rounded-lg text-sm transition-all whitespace-nowrap"
          >
            {t("cookie.atmesti")}
          </button>
          <button
            onClick={accept}
            className="btn-primary text-sm !py-2 !px-6 whitespace-nowrap"
          >
            {t("cookie.sutinku")}
          </button>
        </div>
      </div>
    </div>
  );
}
