"use client";

import { useState, useEffect, useCallback } from "react";
import { HiStar, HiChatAlt2, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useT } from "./LocaleProvider";

const testimonialKeys = [
  { name: "t1Name", role: "t1Role", quote: "t1Quote", rating: 5 },
  { name: "t2Name", role: "t2Role", quote: "t2Quote", rating: 5 },
  { name: "t3Name", role: "t3Role", quote: "t3Quote", rating: 5 },
  { name: "t4Name", role: "t4Role", quote: "t4Quote", rating: 5 },
  { name: "t5Name", role: "t5Role", quote: "t5Quote", rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const t = useT();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonialKeys.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white">
          {t("testimonials.pavadinimas")}
        </h2>

        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Grid stacking: all testimonials rendered in the same cell, only active one visible.
              The grid auto-sizes to the tallest testimonial, preventing layout shift. */}
          <div className="grid [grid-template-areas:'stack']">
            {testimonialKeys.map((item, i) => (
              <div
                key={item.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 relative text-center transition-opacity duration-500 [grid-area:stack]"
                style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
              >
                <HiChatAlt2 className="absolute top-4 right-4 w-10 h-10 text-white/10" />

                {/* Stars */}
                <div className="flex justify-center text-yellow-300 mb-6">
                  {[...Array(item.rating)].map((_, j) => (
                    <HiStar key={j} className="w-6 h-6" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                  &ldquo;{t(`testimonials.${item.quote}`)}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="font-bold text-white text-lg">{t(`testimonials.${item.name}`)}</div>
                  <div className="text-primary-200 text-sm">{t(`testimonials.${item.role}`)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              aria-label="Ankstesnis"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialKeys.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-white w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Atsiliepimas ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              aria-label="Kitas"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
