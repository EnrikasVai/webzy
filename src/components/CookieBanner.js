"use client";

import { useState, useEffect } from "react";
import { useT, useLocale } from "./LocaleProvider";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [consent, setConsent] = useState(null);
  const t = useT();
  const { locale } = useLocale();

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    setConsent(stored);
    if (!stored) setShowBanner(true);
  }, []);

  const updateConsent = (value) => {
    localStorage.setItem("cookie-consent", value);
    setConsent(value);
    window.dispatchEvent(new Event("cookie-consent-changed"));
    setShowBanner(false);
    setShowPopup(false);
  };

  const accept = () => updateConsent("accepted");
  const reject = () => updateConsent("rejected");

  // Banner for first-time visitors
  if (!consent && showBanner) {
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

  // Small floating icon at bottom-left when consent is saved
  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-4 left-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer"
        aria-label="Cookie preferences"
        title={t("cookie.consentStatus")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-amber-500"
        >
          <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.586A1.69 1.69 0 0 1 19.25 9.13a.998.998 0 0 0-.544-1.13 1.69 1.69 0 0 1-.375-2.443.995.995 0 0 0-.354-1.482 1.686 1.686 0 0 1-1.636-1.772.994.994 0 0 0-.845-.905 5.726 5.726 0 0 0-2.912.105C8.326 3.26 5.028 7.418 5.514 12.077c.46 4.433 4.166 7.884 8.599 7.884a8.484 8.484 0 0 0 2.833-.49c2.078-.777 3.6-2.475 4.268-4.601a5.471 5.471 0 0 0 .384-3.806zM11.25 15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-4.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm2.5 2.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" />
        </svg>
      </button>

      {/* Popup overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

          {/* Popup card */}
          <div
            className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-5 w-full max-w-sm animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-amber-500"
              >
                <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.586A1.69 1.69 0 0 1 19.25 9.13a.998.998 0 0 0-.544-1.13 1.69 1.69 0 0 1-.375-2.443.995.995 0 0 0-.354-1.482 1.686 1.686 0 0 1-1.636-1.772.994.994 0 0 0-.845-.905 5.726 5.726 0 0 0-2.912.105C8.326 3.26 5.028 7.418 5.514 12.077c.46 4.433 4.166 7.884 8.599 7.884a8.484 8.484 0 0 0 2.833-.49c2.078-.777 3.6-2.475 4.268-4.601a5.471 5.471 0 0 0 .384-3.806zM11.25 15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-4.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm2.5 2.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("cookie.consentStatus")}
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label={t("cookie.close")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Status badge */}
            <div className="mb-5">
              {consent === "accepted" ? (
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t("cookie.statusAccepted")}</span>
                </div>
              ) : consent === "rejected" ? (
                <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{t("cookie.statusRejected")}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>{t("cookie.statusNone")}</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={accept}
                className="btn-primary text-sm !py-2 !px-6 w-full text-center"
              >
                {t("cookie.sutinku")}
              </button>
              <button
                onClick={reject}
                className="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium py-2 px-5 rounded-lg text-sm transition-all w-full text-center"
              >
                {t("cookie.atmesti")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
