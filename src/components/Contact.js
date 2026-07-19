"use client";

import { useState, useRef } from "react";
import {
  HiPhone,
  HiMail,
  HiPaperAirplane,
  HiExclamationCircle,
} from "react-icons/hi";
import { Turnstile } from "@marsidev/react-turnstile";

import { useT, useLocale } from "./LocaleProvider";

export default function Contact() {
  const t = useT();
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const turnstileRef = useRef(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.klaidaVardasPrivalomas");
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("contact.klaidaVardasTrumpas");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.klaidaPastasPrivalomas");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t("contact.klaidaPastasFormatas");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.klaidaZinutePrivaloma");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.klaidaZinuteTrumpa");
    }

    if (!turnstileToken) {
      newErrors.turnstile = t("contact.klaidaTurnstile");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Klaida siunčiant žinutę");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch (err) {
      setErrors({ form: err.message });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
      errors[field]
        ? "border-red-500 focus:ring-red-500 bg-red-50 dark:bg-red-900/10"
        : "border-gray-300 focus:ring-primary-500"
    }`;

  return (
    <section id="kontaktai" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          {t("contact.pavadinimas")}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
          {t("contact.aprasymas")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiPaperAirplane className="w-8 h-8 text-primary-600 rotate-45" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("contact.aciu")}
                </h3>
                <p className="text-gray-600">
                  {t("contact.susisieksime")}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary-600 font-semibold hover:underline"
                >
                  {t("contact.siustiDar")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.vardas")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.vardasPlaceholder")}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <HiExclamationCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.pastas")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.pastasPlaceholder")}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <HiExclamationCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.zinute")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t("contact.zinutePlaceholder")}
                    className={inputClass("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <HiExclamationCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>
                {/* Form error */}
                {errors.form && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                    <HiExclamationCircle className="w-5 h-5 flex-shrink-0" />
                    {errors.form}
                  </div>
                )}

                {/* Turnstile */}
                <div className="flex flex-col items-center">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    language={locale === "en" ? "en" : "lt"}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => setTurnstileToken(null)}
                  />
                  {errors.turnstile && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <HiExclamationCircle className="w-4 h-4" />
                      {errors.turnstile}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t("contact.siusti")}
                      <HiPaperAirplane className="w-4 h-4 rotate-45" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <a href="tel:+37062202273" className="card flex items-start gap-4 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300 no-underline">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <HiPhone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{t("contact.telefonas")}</h4>
                <p className="text-gray-600 dark:text-gray-400">+37062202273</p>
              </div>
            </a>
            <a href="mailto:info@webzy.lt" className="card flex items-start gap-4 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300 no-underline">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <HiMail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{t("contact.pastas")}</h4>
                <p className="text-gray-600 dark:text-gray-400">info@webzy.lt</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
