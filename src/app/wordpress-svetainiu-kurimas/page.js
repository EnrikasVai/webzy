import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import CookieBanner from "@/components/CookieBanner";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiZap, FiShield, FiSearch, FiSmartphone, FiSettings, FiShoppingCart, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { getPageMeta } from "@/data/seo";

export const metadata = getPageMeta("wordpress", "lt");

const benefits = [
  {
    icon: FiZap,
    title: "Greitas paleidimas",
    desc: "WordPress svetainę galime sukurti ir paleisti per 1-2 savaites. Nereikia laukti mėnesių – jūsų verslas pradeda veikti greitai.",
  },
  {
    icon: FiSettings,
    title: "Lengvas valdymas",
    desc: "Po projekto pabaigos gausite pilnai veikiančią administracinę panelę, kurioje galėsite patys keisti tekstus, nuotraukas ir kitą turinį.",
  },
  {
    icon: FiSearch,
    title: "SEO optimizacija",
    desc: "WordPress yra viena geriausių platformų SEO. Kuriame svetaines su švaria struktūra, greitu įkėlimu ir visomis reikalingomis SEO priemonėmis.",
  },
  {
    icon: FiSmartphone,
    title: "Mobilus dizainas",
    desc: "Visos mūsų kuriamos WordPress svetainės yra pilnai pritaikytos mobiliesiems įrenginiams – telefonams, planšetėms ir kompiuteriams.",
  },
  {
    icon: FiShield,
    title: "Saugumas",
    desc: "Įdiegiame saugumo sprendimus, reguliariai atnaujiname WordPress versiją ir pluginus, kad jūsų svetainė būtų apsaugota nuo grėsmių.",
  },
  {
    icon: FiTrendingUp,
    title: "Plėtros galimybės",
    desc: "WordPress leidžia lengvai plėsti svetainę – pridėti el. parduotuvę, forumą, narystės sistemą ar bet kokį kitą funkcionalumą.",
  },
];

const wordpressServices = [
  {
    title: "WordPress svetainių kūrimas",
    desc: "Kuriame individualias WordPress svetaines nuo nulio – nuo paprastų vizitinių iki sudėtingų korporatyvinių portalų. Naudojame tik patikimas temas ir pluginus.",
    features: ["Individualus dizainas pagal jūsų prekės ženklą", "Custom post types ir laukai (ACF)", "Daugiakalbystė (WPML / Polylang)", "Kontaktų formos, galerijos, žemėlapiai"],
    snippet: { file: "theme.json", lines: [{ text: '"name": "WEBZY",', pink: true }, { text: '"version": "1.0",' }, { text: '"support": {', comment: true }, { text: '  "responsive": true,', green: true }, { text: '  "seo": "yoast-seo",', green: true }, { text: '  "lang": ["lt", "en"],', green: true }, { text: '}' }, { text: '' }, { text: '// paleista be klaidų ✓', comment: true }] },
  },
  {
    title: "WordPress el. parduotuvės (WooCommerce)",
    desc: "Kuriame pilnai funkcionalias el. parduotuves su WooCommerce – nuo prekių katalogo iki mokėjimo sprendimų ir logistikos integracijų.",
    features: ["WooCommerce diegimas ir konfigūravimas", "Mokėjimų integracijos (Paysera, Stripe, PayPal)", "Pristatymo ir logistikos sprendimai", "Prekių importavimas / eksportavimas"],
    snippet: { file: "migracija.php", lines: [{ text: 'const $parduotuve = perkelti(', pink: true }, { text: '  iš: "PrestaShop",' }, { text: '  į: "WooCommerce",', green: true }, { text: '  duomenys: [' }, { text: '    "prekės",', green: true }, { text: '    "klientai",', green: true }, { text: '    "užsakymai",', green: true }, { text: '    "SEO"', green: true }, { text: '  ]' }, { text: ');', pink: true }, { text: '' }, { text: '// prarasta: 0 — SEO išsaugotas ✓', comment: true }] },
  },
  {
    title: "WordPress priežiūra ir palaikymas",
    desc: "Reguliariai prižiūrime jūsų WordPress svetainę: atnaujiname branduolį, temas, pluginus, darome atsargines kopijas ir stebime saugumą.",
    features: ["WordPress, temų ir pluginų atnaujinimai", "Dienos / savaitės atsarginės kopijos", "Saugumo monitoringas ir kenkėjiško kodo šalinimas", "Greičio ir našumo optimizavimas"],
    snippet: { file: "priežiūra.yml", lines: [{ text: 'backup:', pink: true }, { text: '  periodas: kasdien', green: true }, { text: '  saugykla: debesis + lokalus' }, { text: '' }, { text: 'saugumas:', pink: true }, { text: '  ssl: aktyvus', green: true }, { text: '  ugniasienė: įjungta', green: true }, { text: '  skenavimas: aktyvus', green: true }, { text: '' }, { text: 'atnaujinimai:', pink: true }, { text: '  wp: 6.7', green: true }, { text: '  plugin: visi atnaujinti ✓', green: true }, { text: '' }, { text: '# būsena: saugu ✓', comment: true }] },
  },
  {
    title: "WordPress SEO optimizavimas",
    desc: "Optimizuojame jūsų WordPress svetainę paieškos sistemoms: techninis SEO, greičio optimizavimas, turinio strategija ir raktažodžių analizė.",
    features: ["Techninė SEO auditas ir taisymas", "Yoast / Rank Math SEO konfigūravimas", "Google Search Console ir Analytics integracija", "SEO turinio strategija ir rekomendacijos"],
    snippet: { file: "seo-auditas.json", lines: [{ text: '{', pink: true }, { text: '  "greitis": "A (98/100)",', green: true }, { text: '  "mobile": "A (95/100)",', green: true }, { text: '  "seo": "A (97/100)",', green: true }, { text: '' }, { text: '  "meta": "optimizuota",', green: true }, { text: '  "alt": "visos nuotraukos",', green: true }, { text: '  "schema": "įdiegta",', green: true }, { text: '  "sitemap": "sugeneruota",', green: true }, { text: '' }, { text: '  "pozicijos": "↗ kylančios"', green: true }, { text: '}', pink: true }, { text: '' }, { text: '// auditas atliktas ✓', comment: true }] },
  },
];

const process = [
  { step: "01", title: "Konsultacija", desc: "Aptariame jūsų poreikius, tikslus ir biudžetą. Pasiūlome geriausią sprendimą." },
  { step: "02", title: "Dizainas", desc: "Sukuriame unikalų dizainą, atitinkantį jūsų prekės ženklo identitetą." },
  { step: "03", title: "Kūrimas", desc: "Programuojame WordPress temą, integruojame pluginus ir funkcionalumą." },
  { step: "04", title: "Testavimas", desc: "Testuojame visus funkcionalumus, greitį, mobilų vaizdą ir SEO." },
  { step: "05", title: "Paleidimas", desc: "Paleidžiame svetainę į jūsų domeną ir apmokome, kaip ja naudotis." },
];

const faq = [
  {
    q: "Kodėl verta rinktis WordPress?",
    a: "WordPress valdo daugiau nei 40% viso interneto. Tai atviro kodo sistema, kuri yra lanksti, saugi ir lengvai plečiama. Ją palaiko didžiausia kūrėjų bendruomenė pasaulyje, todėl visada rasite sprendimą bet kokiam poreikiui.",
  },
  {
    q: "Kiek kainuoja WordPress svetainė?",
    a: "WordPress svetainės kaina priklauso nuo jūsų poreikių. Paprasta 5-6 puslapių WordPress svetainė kainuoja nuo 299€. El. parduotuvė su WooCommerce – nuo 899€. Kiekvienam projektui pateikiame individualų pasiūlymą.",
  },
  {
    q: "Ar galėsiu pats valdyti svetainę?",
    a: "Taip! Vienas pagrindinių WordPress privalumų – intuityvi administracinė panelė. Po projekto pabaigos apmokome, kaip pridėti naują turinį, keisti nuotraukas, tekstus ir valdyti kitus elementus. Nereikia būti programuotoju.",
  },
  {
    q: "Ar WordPress svetainė yra saugi?",
    a: "Taip, jei ji tinkamai prižiūrima. Mes įdiegiame saugumo pluginus, konfigūruojame SSL sertifikatus, nustatome reguliarius atnaujinimus ir darome atsargines kopijas. Saugumas yra vienas mūsų prioritetų.",
  },
  {
    q: "Per kiek laiko sukuriate WordPress svetainę?",
    a: "Viskas priklauso nuo projekto sudėtingumo. Paprastą WordPress svetainę (5-6 psl.) galime sukurti per 1-2 savaites. El. parduotuvė su WooCommerce užtrunka 2-4 savaites. Visada stengiamės dirbti greitai, bet kokybiškai.",
  },
  {
    q: "Ar galite perkelti mano esamą svetainę į WordPress?",
    a: "Taip! Dažnai perkeliame svetaines iš senų sistemų (Wix, Joomla, Drupal, HTML) į WordPress. Perkėlimo metu išsaugome visą turinį, nuotraukas ir SEO duomenis, kad neprarastumėte pozicijų Google paieškoje.",
  },
];

export default function WordPressSvetainiuKurimasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress svetainių kūrimas",
    provider: {
      "@type": "ProfessionalService",
      name: "WEBZY",
      url: "https://webzy.lt",
    },
    url: "https://webzy.lt/wordpress-svetainiu-kurimas",
    description: "Profesionalus WordPress svetainių kūrimas, WooCommerce el. parduotuvės, SEO optimizacija ir priežiūra. Individualūs sprendimai verslui nuo 299€.",
    areaServed: { "@type": "Country", name: "Lietuva" },
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "EUR",
      description: "WordPress svetainės kūrimas nuo 299€",
    },
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                <FiZap className="w-4 h-4" />
                WordPress specialistai
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-primary-600 dark:text-primary-400">WordPress svetainių kūrimas</span> jūsų verslui
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
                Kuriame profesionalias WordPress svetaines, kurios ne tik puikiai atrodo, bet ir atneša rezultatų. 
                Nuo paprastos vizitinės iki sudėtingos el. parduotuvės – turime sprendimą kiekvienam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#kontaktai" className="btn-primary inline-flex items-center gap-2">
                  Nemokama konsultacija <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#procesas" className="btn-outline inline-flex items-center gap-2">
                  Kaip dirbame
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> Nuo 299€</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> 1-2 sav.</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> Priežiūra</span>
              </div>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in" delay={0.2}>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-3xl absolute -top-10 -right-10" />
                <div className="relative w-[340px] rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-[#1e1e1e]">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] border-b border-gray-700">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-gray-400 font-mono">index.php — WEBZY</span>
                  </div>
                  <div className="p-5 font-mono text-sm leading-relaxed">
                    <div className="text-pink-400">&lt;?php</div>
                    <div className="h-2" />
                    <div className="text-gray-500">/**</div>
                    <div className="text-gray-500"> * Jūsų WordPress svetainė</div>
                    <div className="text-gray-500"> * Sukurta: WEBZY</div>
                    <div className="text-gray-500"> */</div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">define</span><span className="text-gray-300">(</span><span className="text-green-400">'WP_SITEURL'</span><span className="text-gray-300">,</span></div>
                    <div>  <span className="text-green-400">'jusu-svetaine.lt'</span><span className="text-gray-300">);</span></div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">add_theme_support</span><span className="text-gray-300">(</span><span className="text-green-400">'responsive'</span><span className="text-gray-300">);</span></div>
                    <div><span className="text-pink-400">add_theme_support</span><span className="text-gray-300">(</span><span className="text-green-400">'seo-optimized'</span><span className="text-gray-300">);</span></div>
                    <div><span className="text-pink-400">add_theme_support</span><span className="text-gray-300">(</span><span className="text-green-400">'lightning-fast'</span><span className="text-gray-300">);</span></div>
                    <div className="h-2" />
                    <div className="text-gray-500">// paleista sėkmingai ✓</div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#2d2d2d] border-t border-gray-700 flex items-center gap-2">
                    <span className="text-green-400 text-xs">✓</span>
                    <span className="text-gray-500 text-xs font-mono">paruošta darbui — nuo 299€</span>
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
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Kodėl WordPress?</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              WordPress – populiariausia svetainių kūrimo platforma pasaulyje
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Daugiau nei 40% visų pasaulio svetainių veikia su WordPress. Tai lanksti, saugi ir lengvai valdoma sistema, kurią renkasi tiek mažos įmonės, tiek globalūs prekės ženklai.
            </p>
            </AnimatedOnScroll>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <AnimatedOnScroll key={i} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={i * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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

      {/* Services Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Mūsų WordPress paslaugos</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pilnas WordPress sprendimų spektras
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nuo kūrimo iki priežiūros – pasirūpiname viskuo, kad jūsų WordPress svetainė veiktų nepriekaištingai.
            </p>
            </AnimatedOnScroll>
          </div>
          <div className="space-y-12">
            {wordpressServices.map((service, i) => (
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
      <section id="procesas" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Darbo procesas</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kaip vyksta WordPress svetainės kūrimas
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Aiškus ir skaidrus procesas – nuo pirmos konsultacijos iki sėkmingo paleidimo.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pasiruošę pradėti savo WordPress projektą?</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Susisiekite su mumis šiandien ir gaukite nemokamą konsultaciją. Aptarsime jūsų poreikius ir pateiksime konkretų pasiūlymą.
            </p>
            <Link href="#kontaktai" className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Gauti nemokamą konsultaciją <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">DUK</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dažniausiai užduodami klausimai apie WordPress
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">{item.q}</h3>
                  <span className="text-primary-600 dark:text-primary-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontaktai">
        <Contact />
      </section>

      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
