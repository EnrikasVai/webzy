"use client";

import { useState } from "react";
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="kontaktai" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Pirma konsultacija –{" "}
          <span className="text-primary-600">nemokamai!</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
          Sužinokite, kaip galime padėti jūsų verslui. Užpildykite formą ir mes
          susisieksime per 24 val.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiPaperAirplane className="w-8 h-8 text-accent-600 rotate-45" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ačiū! Jūsų užklausa gauta.
                </h3>
                <p className="text-gray-600">
                  Susisieksime su jumis artimiausiu metu.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary-600 font-semibold hover:underline"
                >
                  Siųsti dar vieną užklausą
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vardas
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jūsų vardas"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    El. paštas
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jūsų@pastas.lt"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Žinutė
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Papasakokite apie savo projektą..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  />
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
                      Siųsti užklausą
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
                <h4 className="font-semibold text-gray-900 dark:text-white">Telefonas</h4>
                <p className="text-gray-600 dark:text-gray-400">+37062202273</p>
              </div>
            </a>
            <a href="mailto:info@webzy.lt" className="card flex items-start gap-4 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300 no-underline">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <HiMail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">El. paštas</h4>
                <p className="text-gray-600 dark:text-gray-400">info@webzy.lt</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
