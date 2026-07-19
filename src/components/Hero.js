"use client";

import Image from "next/image";
import { HiStar } from "react-icons/hi";
import { motion } from "framer-motion";
import { useT } from "./LocaleProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const t = useT();

  const techItems = [
    { src: "/react.svg", label: "React" },
    { src: "/laravel.svg", label: "Laravel" },
    { src: "/shopify.svg", label: "Shopify" },
    { src: "/wordpress-icon.svg", label: "WordPress" },
    { src: "/tailwindcss-icon.svg", label: "Tailwind" },
    { src: "/nodejs-icon.svg", label: "Node.js" },
    { src: "/vue.svg", label: "Vue.js" },
    { src: "/javascript.svg", label: "JavaScript" },
    { src: "/html-5.svg", label: "HTML5" },
    { src: "/php.svg", label: "PHP" },
    { src: "/figma.svg", label: "Figma" },
    { src: "/adobe-icon.svg", label: "Adobe" },
    { src: "/codeigniter-icon.svg", label: "CodeIgniter" },
    { src: "/symfony.svg", label: "Symfony" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      {/* Floating animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300/20 dark:bg-accent-600/10 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary-400/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-accent-400/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Rating badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-8 shadow-sm"
          variants={fadeDown}
          initial="hidden"
          animate="visible"
        >
          <HiStar className="w-5 h-5 text-yellow-400 animate-pulse-soft" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t("hero.reitingas")}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {t("hero.pavadinimas1")}
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer relative overflow-hidden inline-block pb-1">
            {t("hero.pavadinimas2")}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          animate="visible"
        >
          {t("hero.aprasymas")}
        </motion.p>

        {/* CTA button */}
        <motion.a
          href="#kontaktai"
          className="btn-primary text-lg inline-block hover:scale-105 transition-transform duration-300"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          {t("hero.nemokamaKonsultacija")}
        </motion.a>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          variants={fadeUp}
          custom={0.45}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">
              30+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t("hero.patenkintuKlientu")}</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t("hero.sukurtuProjektu")}</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1 group">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">
              4.9
            </div>
            <div className="text-sm text-gray-500 mt-1">{t("hero.ivertinimas")}</div>
          </div>
        </motion.div>

        {/* Technology logos */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
          variants={fadeUp}
          custom={0.6}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
            {t("hero.dirbameSu")}
          </p>
          {/* Mobile: one flex-wrap row, Desktop: 2 rows of 7 via grid */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 md:grid md:grid-cols-7 md:justify-items-center">
            {techItems.map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-1 group hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={tech.src}
                  alt={tech.label}
                  width={36}
                  height={36}
                  className="md:w-12 md:h-12 opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-[10px] md:text-xs text-gray-400">{tech.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
