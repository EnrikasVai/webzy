import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Victoria papuošalai",
    description: "Elektroninė parduotuvė",
    image: "/projects/victoriapapuosalai.webp",
    tags: ["El. parduotuvė", "WooCommerce", "Mokėjimai", "WordPress"],
    url: "https://victoriapapuosalai.lt",
  },
  {
    title: "Hordcore GYM",
    description: "Reprezentacinė svetainė",
    image: "/projects/hardcore.webp",
    tags: ["Reprezentacinė", "WordPress", "SEO"],
    url: "http://hardcoregym.lt",
  },
  {
    title: "Formation",
    description: "Vieno puslapio svetainė",
    image: "/projects/formation.webp",
    tags: ["Vieno puslapio", "WordPress", "Kontaktų forma"],
    url: "https://formationstone.com",
  },
  {
    title: "Salsa Rosa",
    description: "Reprezentacinė svetainė",
    image: "/projects/salasarosa.webp",
    tags: ["WordPress", "SEO", "Verslo svetainė"],
    url: "https://salsarosa.lt",
  },
];

export default function Portfolio() {
  return (
    <section id="darbai" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Mūsų <span className="text-primary-600">Darbai</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
          Kiekvienas projektas – unikalus sprendimas, pritaikytas konkretiems
          kliento poreikiams
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card !p-0 overflow-hidden"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {project.description}
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
                  Peržiūrėti
                  <HiExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
