import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import CookieBanner from "@/components/CookieBanner";
import Link from "next/link";
import { FiCheckCircle, FiZap, FiShield, FiRefreshCw, FiHardDrive, FiHeadphones, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { getPageMeta } from "@/data/seo";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = getPageMeta("maintenance", "lt");

const benefits = [
  {
    icon: FiShield,
    title: "Apsauga nuo įsilaužimų",
    desc: "Reguliariai atnaujiname WordPress branduolį, temas ir pluginus. Stebime saugumo spragas ir operatyviai reaguojame į grėsmes.",
  },
  {
    icon: FiHardDrive,
    title: "Atsarginės kopijos",
    desc: "Kasdien darome automatines atsargines kopijas į debesį. Jūsų duomenys visada saugūs – galime atkurti svetainę per kelias minutes.",
  },
  {
    icon: FiZap,
    title: "Greičio optimizavimas",
    desc: "Nuolat stebime ir geriname svetainės greitį: optimizuojame vaizdus, talpyklą, duomenų bazę ir serverio nustatymus.",
  },
  {
    icon: FiRefreshCw,
    title: "Nuolatiniai atnaujinimai",
    desc: "Rūpinamės, kad jūsų svetainė visada veiktų su naujausia WordPress versija, saugumo pataisomis ir pluginų atnaujinimais.",
  },
  {
    icon: FiHeadphones,
    title: "Techninis palaikymas",
    desc: "Operatyvus atsakymas į jūsų užklausas el. paštu. Smulkūs pakeitimai ir konsultacijos įskaičiuotos į planą.",
  },
  {
    icon: FiTrendingUp,
    title: "SEO stebėsena",
    desc: "Sekame jūsų pozicijas Google paieškoje, stebime srautą ir teikiame rekomendacijas SEO gerinimui.",
  },
];

const maintenanceServices = [
  {
    title: "Bazinis priežiūros planas",
    desc: "Idealus sprendimas mažoms įmonėms, kurioms reikia užtikrinti, kad svetainė veiktų sklandžiai ir būtų saugi.",
    features: ["WordPress, temų ir pluginų atnaujinimai", "Kartą per savaitę atsarginės kopijos į debesį", "Saugumo monitoringas 24/7", "Greito veikimo optimizavimas", "SSL sertifikato priežiūra"],
    snippet: { file: "planas-bazinis.yml", lines: [{ text: 'planas: bazinis', pink: true }, { text: 'kaina: nuo 29€/mėn', green: true }, { text: '' }, { text: 'atnaujinimai:', pink: true }, { text: '  wp: automatiniai', green: true }, { text: '  plugin: automatiniai', green: true }, { text: '' }, { text: 'backup:', pink: true }, { text: '  daznumas: kasdien', green: true }, { text: '  saugykla: debesis', green: true }, { text: '' }, { text: 'palaikymas:', pink: true }, { text: '  atsakymas: iki 24val', green: true }, { text: '  smulkus pakeitimai: 1val/mėn', green: true }, { text: '' }, { text: '# viskas veikia ✓', comment: true }] },
  },
  {
    title: "Verslo priežiūros planas",
    desc: "Pilnas priežiūros paketas aktyviai veikiančioms įmonėms, kurioms svarbus greitis, saugumas ir nuolatinis tobulinimas.",
    features: ["Viskas iš Bazinio plano", "Išplėstinis saugumo auditas", "Nuolatinis SEO monitoringas", "Pirmenybinis palaikymas (iki 4 val.)"],
    snippet: { file: "planas-verslo.yml", lines: [{ text: 'planas: verslo', pink: true }, { text: 'kaina: nuo 59€/mėn', green: true }, { text: '' }, { text: 'apima:', pink: true }, { text: '  - viskas iš bazinio', comment: true }, { text: '  + backup testavimas', green: true }, { text: '  + saugumo auditas', green: true }, { text: '  + SEO stebėsena', green: true }, { text: '  + pirmenybinis supportas', green: true }, { text: '' }, { text: 'performance:', pink: true }, { text: '  gtmetrix: A (95+)', green: true }, { text: '  uptime: 99.9%', green: true }, { text: '' }, { text: '# premium priežiūra ✓', comment: true }] },
  },
  {
    title: "Vienkartiniai darbai",
    desc: "Nereikia nuolatinės priežiūros? Siūlome vienkartines paslaugas – nuo svetainės atnaujinimo iki migracijos į naują serverį.",
    features: ["Svetainės auditas ir rekomendacijos", "WordPress versijos atnaujinimas", "Svetainės migracija į kitą hostingą", "Užkrėstos svetainės valymas", "Greičio optimizavimas (vienkartinis)"],
    snippet: { file: "darbai.yml", lines: [{ text: 'vienkartiniai darbai:', pink: true }, { text: '' }, { text: '  auditas: nuo 99€', green: true }, { text: '  migracija: nuo 149€', green: true }, { text: '  valymas: nuo 199€', green: true }, { text: '  optimizavimas: nuo 149€', green: true }, { text: '' }, { text: 'greitis-po:', pink: true }, { text: '  pries: 45/100', comment: true }, { text: '  po: 95/100', green: true }, { text: '' }, { text: '# per 24-48 val. ✓', comment: true }] },
  },
];

const process = [
  { step: "01", title: "Auditas", desc: "Įvertiname jūsų svetainės būklę: saugumą, greitį, SEO ir techninius aspektus." },
  { step: "02", title: "Pasiūlymas", desc: "Pateikiame individualų priežiūros planą pagal jūsų poreikius ir biudžetą." },
  { step: "03", title: "Įjungimas", desc: "Sukonfigūruojame visus įrankius: monitoringą, backup'us, saugumo sistemas." },
  { step: "04", title: "Priežiūra", desc: "Nuolat prižiūrime, atnaujiname ir optimizuojame jūsų svetainę." },
  { step: "05", title: "Ataskaitos", desc: "Kas mėnesį gaunate ataskaitą apie atliktus darbus ir svetainės būklę." },
];

const faq = [
  {
    q: "Kodėl verta rinktis svetainės priežiūros planą?",
    a: "Neprižiūrima svetainė yra pažeidžiama – pasenę pluginai gali būti nulaužti, lėtas veikimas atbaido klientus, o prarasti duomenys gali kainuoti tūkstančius. Mūsų priežiūros planas užtikrina, kad svetainė visada veiktų greitai, saugiai ir be trikdžių.",
  },
  {
    q: "Kas įeina į priežiūros plano kainą?",
    a: "Priklausomai nuo plano: WordPress atnaujinimai, temų ir pluginų atnaujinimai, atsarginės kopijos, saugumo monitoringas, greičio optimizavimas, SSL priežiūra, techninis palaikymas ir smulkūs turinio pakeitimai.",
  },
  {
    q: "Ar galiu bet kada nutraukti sutartį?",
    a: "Taip, sutartis yra mėnesinė – galite nutraukti bet kada be papildomų mokesčių. Jūsų svetainė ir visi duomenys lieka jums.",
  },
  {
    q: "Ką darysite, jei svetainė nulaužiama?",
    a: "Pirmiausia – atstatome iš paskutinės atsarginės kopijos. Tada nustatome pažeidžiamumą, pašaliname kenkėjišką kodą ir sustipriname apsaugą. Daugeliu atvejų svetainė vėl veikia per kelias valandas.",
  },
  {
    q: "Ar tvarkote ne WordPress svetaines?",
    a: "Specializuojamės WordPress, bet galime prižiūrėti ir kitas sistemas (Laravel, custom PHP, HTML). Kiekvieną atvejį vertiname individualiai – susisiekite ir aptarsime.",
  },
  {
    q: "Kaip dažnai darote atsargines kopijas?",
    a: "Standartiškai – kas savaitę. Aktyviai veikiančioms el. parduotuvėms galime daryti kopijas kas dieną. Visos kopijos saugomos debesyje ir gali būti atkurtos per kelias minutes.",
  },
];

export default function SvetainiuPrieziuraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Svetainių priežiūra",
    provider: { "@type": "ProfessionalService", name: "WEBZY", url: "https://webzy.lt" },
    url: "https://webzy.lt/svetainiu-prieziura",
    description: "Profesionali interneto svetainių priežiūra: saugumo užtikrinimas, atnaujinimai, atsarginės kopijos ir techninis palaikymas. Planai nuo 29€/mėn.",
    areaServed: { "@type": "Country", name: "Lietuva" },
    offers: { "@type": "Offer", price: "29", priceCurrency: "EUR", description: "Svetainės priežiūra nuo 29€/mėn" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar locale="lt" />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-600/10 dark:from-primary-600/10 dark:to-primary-600/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll animation="fade-in-up">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
                <FiShield className="w-4 h-4" />
                Jūsų svetainė saugiose rankose
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-primary-600 dark:text-primary-400">Svetainių priežiūra</span> ir techninis palaikymas
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
                Rūpinamės jūsų svetaine, kad jūs galėtumėte rūpintis verslu. Saugumas, atnaujinimai, atsarginės kopijos – viskas viename plane.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#kontaktai" className="btn-primary inline-flex items-center gap-2">
                  Nemokama konsultacija <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> Nuo 29€/mėn</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> 24/7 stebėsena</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> Greitas atsakymas</span>
              </div>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in" delay={0.2}>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-400 to-primary-600 opacity-20 blur-3xl absolute -top-10 -right-10" />
                <div className="relative w-[340px] rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-[#1e1e1e]">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] border-b border-gray-700">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-gray-400 font-mono">prieziura.yml — WEBZY</span>
                  </div>
                  <div className="p-5 font-mono text-sm leading-relaxed">
                    <div><span className="text-pink-400">svetaine:</span></div>
                    <div>  <span className="text-green-400">jusu-svetaine.lt</span></div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">busena:</span> <span className="text-green-400">veikia</span></div>
                    <div><span className="text-pink-400">ssl:</span> <span className="text-green-400">aktyvus</span></div>
                    <div><span className="text-pink-400">wp:</span> <span className="text-green-400">6.7 (atnaujinta)</span></div>
                    <div><span className="text-pink-400">backup:</span> <span className="text-green-400">siandien 03:00</span></div>
                    <div><span className="text-pink-400">uptime:</span> <span className="text-green-400">99.97%</span></div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">grezitis:</span></div>
                    <div>  <span className="text-green-400">desktop: 98/100</span></div>
                    <div>  <span className="text-green-400">mobile: 94/100</span></div>
                    <div className="h-2" />
                    <div className="text-gray-500">{'# viskas tvarkoje ✓'}</div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#2d2d2d] border-t border-gray-700 flex items-center gap-2">
                    <span className="text-green-400 text-xs">✓</span>
                    <span className="text-gray-500 text-xs font-mono">stebima 24/7 — nuo 29€/mėn</span>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Kodėl verta prižiūrėti svetainę?</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Jūsų svetainė – jūsų verslo veidas. Rūpinkitės juo.
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Neprižiūrima svetainė lėtėja, tampa pažeidžiama ir praranda pozicijas Google. Mūsų komanda užtikrina, kad jūsų svetainė visada būtų greita, saugi ir paruošta darbui.
            </p>
            </AnimatedOnScroll>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <AnimatedOnScroll key={i} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={i * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors duration-300">
                  <b.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{b.desc}</p>
              </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <Portfolio />

      {/* Plans */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Priežiūros planai</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pasirinkite jums tinkamiausią planą
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nuo bazinės priežiūros iki pilno aptarnavimo – lankstūs planai kiekvienam biudžetui.
            </p>
            </AnimatedOnScroll>
          </div>
          <div className="space-y-12">
            {maintenanceServices.map((service, i) => (
              <AnimatedOnScroll key={i} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={i * 0.15}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-gray-700 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-gray-400 font-mono">{service.snippet.file}</span>
                  </div>
                  <div className="p-5 font-mono text-xs leading-relaxed">
                    {service.snippet.lines.map((line, li) => (
                      <div key={li} className={line.comment ? "text-gray-500" : line.pink ? "text-pink-400" : line.green ? "text-green-400" : line.length === 0 ? "h-3" : "text-gray-300"}>
                        {line.text || "\u00A0"}
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Kaip pradedame?</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuo audito iki nuolatinės priežiūros
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Paprastas procesas – įvertiname, pasiūlome, prižiūrime.
            </p>
            </AnimatedOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <AnimatedOnScroll key={i} animation="fade-in-up" delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm h-full">
                  <span className="text-4xl font-bold text-primary-200 dark:text-primary-800 block mb-3">{p.step}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{p.desc}</p>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Norite, kad jūsų svetaine rūpintųsi profesionalai?</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Palikite rūpesčius mums. Susisiekite ir gaukite nemokamą svetainės būklės įvertinimą.
            </p>
            <Link href="#kontaktai" className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Gauti nemokamą auditą <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">DUK</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dažniausiai užduodami klausimai
            </h2>
            </AnimatedOnScroll>
          </div>
          <div className="space-y-4">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <section id="kontaktai">
        <Contact />
      </section>

      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
