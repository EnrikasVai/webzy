import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import CookieBanner from "@/components/CookieBanner";
import Link from "next/link";
import { FiCheckCircle, FiZap, FiShield, FiSearch, FiSmartphone, FiSettings, FiShoppingCart, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { getPageMeta } from "@/data/seo";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = getPageMeta("wordpress", "en");

const benefits = [
  {
    icon: FiZap,
    title: "Fast Launch",
    desc: "We can build and launch your WordPress website in 1-2 weeks. No months of waiting – your business gets online quickly.",
  },
  {
    icon: FiSettings,
    title: "Easy Management",
    desc: "After the project is complete, you'll get a fully functional admin panel where you can change text, images, and other content yourself.",
  },
  {
    icon: FiSearch,
    title: "SEO Optimized",
    desc: "WordPress is one of the best platforms for SEO. We build websites with clean structure, fast loading, and all necessary SEO tools.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Friendly",
    desc: "All our WordPress websites are fully responsive – they look great on phones, tablets, and desktops.",
  },
  {
    icon: FiShield,
    title: "Security",
    desc: "We implement security solutions, regularly update WordPress core and plugins to protect your website from threats.",
  },
  {
    icon: FiTrendingUp,
    title: "Scalability",
    desc: "WordPress allows easy expansion – add an online store, forum, membership system, or any other functionality.",
  },
];

const wordpressServices = [
  {
    title: "WordPress Website Development",
    desc: "We create custom WordPress websites from scratch – from simple business cards to complex corporate portals. We use only reliable themes and plugins.",
    features: ["Custom design matching your brand", "Custom post types and fields (ACF)", "Multilingual support (WPML / Polylang)", "Contact forms, galleries, maps"],
    snippet: { file: "theme.json", lines: [{ text: '"name": "WEBZY",', pink: true }, { text: '"version": "1.0",' }, { text: '"support": {', comment: true }, { text: '  "responsive": true,', green: true }, { text: '  "seo": "yoast-seo",', green: true }, { text: '  "lang": ["lt", "en"],', green: true }, { text: '}' }, { text: '' }, { text: '// deployed successfully ✓', comment: true }] },
  },
  {
    title: "WordPress E-commerce (WooCommerce)",
    desc: "We build fully functional online stores with WooCommerce – from product catalog to payment solutions and logistics integrations.",
    features: ["WooCommerce installation and configuration", "Payment integrations (Paysera, Stripe, PayPal)", "Shipping and logistics solutions", "Product import / export"],
    snippet: { file: "migration.php", lines: [{ text: 'const $store = migrate(', pink: true }, { text: '  from: "PrestaShop",' }, { text: '  to: "WooCommerce",', green: true }, { text: '  data: [' }, { text: '    "products",', green: true }, { text: '    "customers",', green: true }, { text: '    "orders",', green: true }, { text: '    "SEO"', green: true }, { text: '  ]' }, { text: ');', pink: true }, { text: '' }, { text: '// lost: 0 — SEO preserved ✓', comment: true }] },
  },
  {
    title: "WordPress Maintenance & Support",
    desc: "We regularly maintain your WordPress website: update core, themes, plugins, create backups, and monitor security.",
    features: ["WordPress, theme & plugin updates", "Daily / weekly backups", "Security monitoring & malware removal", "Speed & performance optimization"],
    snippet: { file: "maintenance.yml", lines: [{ text: 'backup:', pink: true }, { text: '  schedule: daily', green: true }, { text: '  storage: cloud + local' }, { text: '' }, { text: 'security:', pink: true }, { text: '  ssl: active', green: true }, { text: '  firewall: enabled', green: true }, { text: '  scanning: active', green: true }, { text: '' }, { text: 'updates:', pink: true }, { text: '  wp: 6.7', green: true }, { text: '  plugins: all updated ✓', green: true }, { text: '' }, { text: '# status: secure ✓', comment: true }] },
  },
  {
    title: "WordPress SEO Optimization",
    desc: "We optimize your WordPress website for search engines: technical SEO, speed optimization, content strategy, and keyword analysis.",
    features: ["Technical SEO audit and fixes", "Yoast / Rank Math SEO configuration", "Google Search Console & Analytics integration", "SEO content strategy & recommendations"],
    snippet: { file: "seo-audit.json", lines: [{ text: '{', pink: true }, { text: '  "speed": "A (98/100)",', green: true }, { text: '  "mobile": "A (95/100)",', green: true }, { text: '  "seo": "A (97/100)",', green: true }, { text: '' }, { text: '  "meta": "optimized",', green: true }, { text: '  "alt": "all images",', green: true }, { text: '  "schema": "installed",', green: true }, { text: '  "sitemap": "generated",', green: true }, { text: '' }, { text: '  "rankings": "↗ improving"', green: true }, { text: '}', pink: true }, { text: '' }, { text: '// audit complete ✓', comment: true }] },
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "We discuss your needs, goals, and budget. We suggest the best solution." },
  { step: "02", title: "Design", desc: "We create a unique design that matches your brand identity." },
  { step: "03", title: "Development", desc: "We code the WordPress theme, integrate plugins and functionality." },
  { step: "04", title: "Testing", desc: "We test all functionality, speed, mobile view, and SEO." },
  { step: "05", title: "Launch", desc: "We launch the website on your domain and train you how to use it." },
];

const faq = [
  {
    q: "Why choose WordPress?",
    a: "WordPress powers over 40% of the entire internet. It's an open-source system that is flexible, secure, and easily expandable. It's supported by the world's largest developer community, so you'll always find a solution for any need.",
  },
  {
    q: "How much does a WordPress website cost?",
    a: "The cost of a WordPress website depends on your needs. A simple 1-2 page WordPress website starts from €299. An e-commerce store with WooCommerce starts from €549. We provide a customized quote for each project.",
  },
  {
    q: "Can I manage the website myself?",
    a: "Yes! One of the main advantages of WordPress is its intuitive admin panel. After the project is complete, we train you on how to add new content, change images, text, and manage other elements. No coding skills needed.",
  },
  {
    q: "Is a WordPress website secure?",
    a: "Yes, if properly maintained. We install security plugins, configure SSL certificates, set up regular updates, and create backups. Security is one of our top priorities.",
  },
  {
    q: "How long does it take to build a WordPress website?",
    a: "It all depends on the project's complexity. A simple WordPress website (5-6 pages) can be built in 1-2 weeks. A WooCommerce store takes 2-4 weeks. We always strive to work quickly but with quality.",
  },
  {
    q: "Can you migrate my existing website to WordPress?",
    a: "Yes! We often migrate websites from old systems (Wix, Joomla, Drupal, HTML) to WordPress. During migration, we preserve all content, images, and SEO data so you don't lose your Google rankings.",
  },
];

export default function WordPressDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress Website Development",
    provider: {
      "@type": "ProfessionalService",
      name: "WEBZY",
      url: "https://webzy.lt",
    },
    url: "https://webzy.lt/en/wordpress-website-development",
    description: "Professional WordPress website development, WooCommerce e-commerce stores, SEO optimization and maintenance. Custom solutions for businesses starting from €299.",
    areaServed: { "@type": "Country", name: "Lithuania" },
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "EUR",
      description: "WordPress website development from €299",
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar locale="en" />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-600/10 dark:from-primary-600/10 dark:to-primary-600/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll animation="fade-in-up">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                <FiZap className="w-4 h-4" />
                WordPress Experts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-primary-600 dark:text-primary-400">WordPress Website Development</span> for Your Business
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
                We build professional WordPress websites that not only look great but also deliver results.
                From simple business sites to complex e-commerce stores – we have a solution for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Free Consultation <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#process" className="btn-outline inline-flex items-center gap-2">
                  How We Work
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> From €299</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> 1-2 weeks</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> Maintenance</span>
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
                    <div className="text-gray-500">{'/**'}</div>
                    <div className="text-gray-500"> * Your WordPress website</div>
                    <div className="text-gray-500"> * Built by: WEBZY</div>
                    <div className="text-gray-500">{' */'}</div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">define</span><span className="text-gray-300">(</span><span className="text-green-400">&apos;WP_SITEURL&apos;</span><span className="text-gray-300">,</span></div>
                    <div>  <span className="text-green-400">&apos;your-website.com&apos;</span><span className="text-gray-300">);</span></div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">add_theme_support</span><span className="text-gray-300">(</span><span className="text-green-400">&apos;responsive&apos;</span><span className="text-gray-300">);</span></div>
                    <div><span className="text-pink-400">add_theme_support</span><span className="text-gray-300">(</span><span className="text-green-400">&apos;seo-optimized&apos;</span><span className="text-gray-300">);</span></div>
                    <div><span className="text-pink-400">add_theme_support</span><span className="text-gray-300">(</span><span className="text-green-400">&apos;lightning-fast&apos;</span><span className="text-gray-300">);</span></div>
                    <div className="h-2" />
                    <div className="text-gray-500">{'// deployed successfully ✓'}</div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#2d2d2d] border-t border-gray-700 flex items-center gap-2">
                    <span className="text-green-400 text-xs">✓</span>
                    <span className="text-gray-500 text-xs font-mono">ready to launch — from €299</span>
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
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Why WordPress?</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              WordPress – The World&rsquo;s Most Popular Website Platform
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Over 40% of all websites worldwide run on WordPress. It&rsquo;s a flexible, secure, and easy-to-manage system chosen by both small businesses and global brands.
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

      {/* Services Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Our WordPress Services</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete WordPress Solutions
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From development to maintenance – we take care of everything so your WordPress website runs flawlessly.
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
      <section id="process" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Process</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How WordPress Website Development Works
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A clear and transparent process – from the first consultation to a successful launch.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your WordPress Project?</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Contact us today and get a free consultation. We&rsquo;ll discuss your needs and provide a concrete proposal.
            </p>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Get a Free Consultation <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">FAQ</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions About WordPress
            </h2>
          </div>
          <div className="space-y-4">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      <Footer locale="en" />
      <CookieBanner />
    </main>
  );
}
