"use client";

import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import AnimatedOnScroll from "./AnimatedOnScroll";
import { useT } from "./LocaleProvider";

const projects = [
  {
    titleKey: "proj1",
    descKey: "proj1Desc",
    image: "/projects/hardcore.webp",
    tags: ["WordPress", "Informacinė svetainė", "Responsive dizainas", "SEO"],
    url: "http://hardcoregym.lt",
  },
  {
    titleKey: "proj2",
    descKey: "proj2Desc",
    image: "/projects/formation.webp",
    tags: ["WordPress", "Vieno puslapio", "Animacijos", "Kontaktų forma"],
    url: "https://formationstone.com",
  },
  {
    titleKey: "proj3",
    descKey: "proj3Desc",
    image: "/projects/salasarosa.webp",
    tags: ["WordPress", "Verslo svetainė", "Meniu katalogas", "SEO"],
    url: "https://salsarosa.lt",
  },
];

export default function Portfolio() {
  const t = useT();
  return (
    <section id="darbai" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedOnScroll animation="fade-in-up">
          <h2 className="section-title">
            <span>{t("portfolio.pavadinimas1")} </span>
            <span className="text-primary-600">{t("portfolio.pavadinimas2")}</span>
          </h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
            {t("portfolio.aprasymas")}
          </p>
        </AnimatedOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedOnScroll key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={index * 0.18}>
              <div className="group card !p-0 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(`portfolio.${project.titleKey}`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {t(`portfolio.${project.titleKey}`)}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {t(`portfolio.${project.descKey}`)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/btn"
                >
                  {t("portfolio.perziureti")}
                  <HiExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
