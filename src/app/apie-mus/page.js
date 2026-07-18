import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiTarget, FiEye, FiUsers, FiAward, FiSearch, FiZap, FiSun } from "react-icons/fi";

export const metadata = {
  title: "Apie mus",
  description:
    "Susipažinkite su WEBZY komanda. Kuriame profesionalias interneto svetaines, e-komercijos sprendimus ir web dizainą nuo 299€. Patirtis, kokybė ir inovatyvūs sprendimai.",
  openGraph: {
    title: "Apie mus | WEBZY",
    description:
      "Susipažinkite su WEBZY komanda. Kuriame profesionalias interneto svetaines nuo 299€.",
  },
};

const teamMembers = [
  {
    name: "Enrikas",
    role: "Įkurėjas – Programuotojas",
    initials: "EN",
  },
  {
    name: "Gytis",
    role: "Įkurėjas – SEO specialistas",
    initials: "GY",
  },
  {
    name: "Augustė",
    role: "Grafikos dizainerė – Marketingo specialistė",
    initials: "AU",
  },
];

export default function ApieMusPage() {
  return (
    <main>
      <Navbar locale="lt" />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-600/10 dark:from-primary-600/10 dark:to-primary-600/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Mūsų istorija
              </h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-primary-600 dark:text-primary-400">Kuriame išmanius sprendimus,</span> padedančius verslams augti
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Nuo pat pradžių mūsų tikslas buvo vienas – padėti verslams skaitmenizuotis 
                ne komplikuotai, o efektyviai. Remdamiesi patirtimi ir technologiniu pagrindu, 
                kuriame svetaines, kurios ne tik gražiai atrodo, bet ir dirba jūsų naudai.
              </p>
            </div>
            <div className="hidden lg:flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-3xl absolute -top-10 -right-10" />
                <div className="relative w-72 h-72 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-2xl">
                  <Image
                    src="/icon.webp"
                    alt="WEBZY logo"
                    width={280}
                    height={90}
                    className="opacity-90 brightness-0 invert"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <FiTarget className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest">
                  Mūsų misija
                </h5>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Tapti patikimu IT partneriu, kuris ne tik kuria svetaines, bet ir supranta jūsų verslo tikslus bei padeda juos pasiekti.
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Tikime, kad kiekvienas verslas nusipelno profesionalios interneto svetainės,
                kuri ne tik atrodo puikiai, bet ir atneša realių rezultatų.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <FiEye className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest">
                  Mūsų vizija
                </h5>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Padėti įmonėms augti per efektyvius, greitus ir lankstus interneto sprendimus.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Nuo paprastų vizitinių kortelių iki sudėtingų el. komercijos sprendimų – 
                kuriame svetaines, kurios veikia ir duoda rezultatų.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Mūsų vertybės
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Kuo vadovaujamės kiekvieną dieną
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Kokybė",
                desc: "Kiekviena detalė yra svarbi – nuo dizaino iki kodo kokybės.",
                icon: FiAward,
              },
              {
                title: "Skaidrumas",
                desc: "Jokių paslėptų kaštų. Aiškūs terminai ir atvira komunikacija.",
                icon: FiSearch,
              },
              {
                title: "Efektyvumas",
                desc: "Greiti ir kokybiški sprendimai, atitinkantys jūsų lūkesčius.",
                icon: FiZap,
              },
              {
                title: "Inovatyvumas",
                desc: "Naudojame naujausias technologijas, kad jūsų svetainė būtų konkurencinga.",
                icon: FiSun,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="card group hover:-translate-y-1 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Mūsų komanda
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Susipažinkite su mūsų komanda
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pristatome pagrindinius mūsų komandos narius, kurie kasdien dirba,
              kad jūsų projektas būtų sėkmingas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card group hover:-translate-y-1 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Rezultatai
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Rezultatai, kuriais didžiuojamės
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "2",
                suffix: "",
                label: "Metai srityje",
                desc: "Per šį laiką sukūrėme ne tik funkcionalias svetaines, bet ir tvirtus ryšius su klientais.",
              },
              {
                number: "30+",
                suffix: "",
                label: "Patenkintų klientų",
                desc: "Dirbame su įvairiais verslais – nuo smulkaus verslo iki augančių įmonių.",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="card group hover:-translate-y-1 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-3">
                  {stat.number}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {stat.label}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h5 className="text-primary-200 font-semibold text-sm uppercase tracking-widest mb-4">
            Dirbikime kartu
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Gaukite individualų pasiūlymą savo poreikiams!
          </h2>
          <Link
            href="/kontaktai#susisiekti"
            className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/20 text-lg group"
          >
            SUSISIEKITE
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer locale="lt" />
    </main>
  );
}
