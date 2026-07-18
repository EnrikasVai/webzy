import Image from "next/image";
import { HiStar } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300/20 dark:bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-8 shadow-sm">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="w-4 h-4" />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            4.9 | Daugiau nei 30 patenkintų klientų!
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Profesionalios interneto svetainės,
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            e-komercijos ir kiti web sprendimai
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Kuriama modernias, greitas ir efektyvias svetaines, kurios padeda jūsų
          verslui augti. Nuo idėjos iki pilno įgyvendinimo.
        </p>

        {/* CTA button */}
        <a
          href="#kontaktai"
          className="btn-primary text-lg inline-block animate-fade-in"
        >
          Nemokama konsultacija
        </a>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">
              30+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Patenkintų klientų</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">
              50+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sukurtų projektų</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">
              4.9
            </div>
            <div className="text-sm text-gray-500 mt-1">Įvertinimas</div>
          </div>
        </div>

        {/* Technology logos */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
            Dirbame su šiuolaikinėmis technologijomis
          </p>
          {/* Desktop: 2 rows of 7, Mobile: auto wrap */}
          <div className="flex flex-col gap-6 md:gap-4 items-center">
            {/* Row 1 */}
            <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/react.svg"
                  alt="React"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">React</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/laravel.svg"
                  alt="Laravel"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Laravel</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/shopify.svg"
                  alt="Shopify"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Shopify</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/wordpress-icon.svg"
                  alt="WordPress"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">WordPress</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/tailwindcss-icon.svg"
                  alt="Tailwind CSS"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/nodejs-icon.svg"
                  alt="Node.js"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/vue.svg"
                  alt="Vue.js"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Vue.js</span>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/javascript.svg"
                  alt="JavaScript"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/html-5.svg"
                  alt="HTML5"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">HTML5</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/php.svg"
                  alt="PHP"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">PHP</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/figma.svg"
                  alt="Figma"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Figma</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/adobe-icon.svg"
                  alt="Adobe"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Adobe</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/codeigniter-icon.svg"
                  alt="CodeIgniter"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">CodeIgniter</span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <Image
                  src="/symfony.svg"
                  alt="Symfony"
                  width={32}
                  height={32}
                  className="opacity-40 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-gray-400">Symfony</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
