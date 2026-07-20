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

export const metadata = getPageMeta("maintenance", "en");

const benefits = [
  {
    icon: FiShield,
    title: "Hack Protection",
    desc: "We regularly update WordPress core, themes, and plugins. We monitor security vulnerabilities and respond quickly to threats.",
  },
  {
    icon: FiHardDrive,
    title: "Daily Backups",
    desc: "Automatic daily cloud backups. Your data is always safe – we can restore your website in minutes.",
  },
  {
    icon: FiZap,
    title: "Speed Optimization",
    desc: "We continuously monitor and improve website speed: image optimization, caching, database, and server configuration.",
  },
  {
    icon: FiRefreshCw,
    title: "Regular Updates",
    desc: "We ensure your website always runs on the latest WordPress version with security patches and plugin updates.",
  },
  {
    icon: FiHeadphones,
    title: "Technical Support",
    desc: "Fast email support response. Minor content changes and consultations are included in your plan.",
  },
  {
    icon: FiTrendingUp,
    title: "SEO Monitoring",
    desc: "We track your Google rankings, monitor traffic, and provide recommendations for SEO improvement.",
  },
];

const maintenanceServices = [
  {
    title: "Basic Maintenance Plan",
    desc: "The ideal solution for small businesses that need to ensure their website runs smoothly and stays secure.",
    features: ["WordPress, theme & plugin updates", "Weekly cloud backups", "24/7 security monitoring", "Speed optimization", "SSL certificate maintenance"],
    snippet: { file: "plan-basic.yml", lines: [{ text: 'plan: basic', pink: true }, { text: 'price: from €29/mo', green: true }, { text: '' }, { text: 'updates:', pink: true }, { text: '  wp: automatic', green: true }, { text: '  plugins: automatic', green: true }, { text: '' }, { text: 'backup:', pink: true }, { text: '  frequency: daily', green: true }, { text: '  storage: cloud', green: true }, { text: '' }, { text: 'support:', pink: true }, { text: '  response: within 24h', green: true }, { text: '  minor edits: 1h/month', green: true }, { text: '' }, { text: '# all good ✓', comment: true }] },
  },
  {
    title: "Business Maintenance Plan",
    desc: "Full maintenance package for active businesses where speed, security, and continuous improvement matter.",
    features: ["Everything from Basic plan", "Advanced security audit", "Ongoing SEO monitoring", "Priority support (within 4h)"],
    snippet: { file: "plan-business.yml", lines: [{ text: 'plan: business', pink: true }, { text: 'price: from €59/mo', green: true }, { text: '' }, { text: 'includes:', pink: true }, { text: '  - all basic features', comment: true }, { text: '  + backup testing', green: true }, { text: '  + security audit', green: true }, { text: '  + SEO monitoring', green: true }, { text: '  + priority support', green: true }, { text: '' }, { text: 'performance:', pink: true }, { text: '  gtmetrix: A (95+)', green: true }, { text: '  uptime: 99.9%', green: true }, { text: '' }, { text: '# premium maintenance ✓', comment: true }] },
  },
  {
    title: "One-Time Services",
    desc: "Don't need ongoing maintenance? We offer one-time services – from website updates to server migration.",
    features: ["Website audit & recommendations", "WordPress version upgrade", "Website migration to new hosting", "Infected website cleanup", "Speed optimization (one-time)"],
    snippet: { file: "services.yml", lines: [{ text: 'one-time services:', pink: true }, { text: '' }, { text: '  audit: from €99', green: true }, { text: '  migration: from €149', green: true }, { text: '  cleanup: from €199', green: true }, { text: '  optimization: from €149', green: true }, { text: '' }, { text: 'speed-after:', pink: true }, { text: '  before: 45/100', comment: true }, { text: '  after: 95/100', green: true }, { text: '' }, { text: '# done in 24-48h ✓', comment: true }] },
  },
];

const process = [
  { step: "01", title: "Audit", desc: "We assess your website's condition: security, speed, SEO, and technical aspects." },
  { step: "02", title: "Proposal", desc: "We provide a custom maintenance plan based on your needs and budget." },
  { step: "03", title: "Setup", desc: "We configure all tools: monitoring, backups, security systems." },
  { step: "04", title: "Maintenance", desc: "We continuously maintain, update, and optimize your website." },
  { step: "05", title: "Reports", desc: "You get a monthly report on completed work and website health." },
];

const faq = [
  {
    q: "Why should I choose a website maintenance plan?",
    a: "An unmaintained website is vulnerable – outdated plugins can be hacked, slow performance drives customers away, and lost data can cost thousands. Our maintenance plan ensures your website always runs fast, secure, and without issues.",
  },
  {
    q: "What's included in the maintenance plan price?",
    a: "Depending on the plan: WordPress updates, theme and plugin updates, backups, security monitoring, speed optimization, SSL maintenance, technical support, and minor content changes.",
  },
  {
    q: "Can I cancel the contract at any time?",
    a: "Yes, the contract is monthly – you can cancel anytime with no additional fees. Your website and all data remain yours.",
  },
  {
    q: "What do you do if the website gets hacked?",
    a: "First – we restore from the latest backup. Then we identify the vulnerability, remove malicious code, and strengthen security. In most cases, the website is back online within a few hours.",
  },
  {
    q: "Do you maintain non-WordPress websites?",
    a: "We specialize in WordPress, but we can also maintain other systems (Laravel, custom PHP, HTML). Each case is evaluated individually – get in touch and we'll discuss.",
  },
  {
    q: "How often do you make backups?",
    a: "Standard – weekly. For active e-commerce stores, we can do backups every day. All backups are stored in the cloud and can be restored within minutes.",
  },
];

export default function WebsiteMaintenancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Maintenance",
    provider: { "@type": "ProfessionalService", name: "WEBZY", url: "https://webzy.lt" },
    url: "https://webzy.lt/en/website-maintenance",
    description: "Professional website maintenance: security, updates, backups and technical support. Plans from €29/month.",
    areaServed: { "@type": "Country", name: "Lithuania" },
    offers: { "@type": "Offer", price: "29", priceCurrency: "EUR", description: "Website maintenance from €29/month" },
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
                <FiShield className="w-4 h-4" />
                Your website in safe hands
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-primary-600 dark:text-primary-400">Website Maintenance</span> & Technical Support
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
                We take care of your website so you can take care of your business. Security, updates, backups – all in one plan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Free Consultation <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> From €29/mo</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> 24/7 monitoring</span>
                <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-green-500" /> Fast response</span>
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
                    <span className="ml-2 text-xs text-gray-400 font-mono">maintenance.yml — WEBZY</span>
                  </div>
                  <div className="p-5 font-mono text-sm leading-relaxed">
                    <div><span className="text-pink-400">website:</span></div>
                    <div>  <span className="text-green-400">your-website.com</span></div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">status:</span> <span className="text-green-400">running</span></div>
                    <div><span className="text-pink-400">ssl:</span> <span className="text-green-400">active</span></div>
                    <div><span className="text-pink-400">wp:</span> <span className="text-green-400">6.7 (updated)</span></div>
                    <div><span className="text-pink-400">backup:</span> <span className="text-green-400">today 03:00</span></div>
                    <div><span className="text-pink-400">uptime:</span> <span className="text-green-400">99.97%</span></div>
                    <div className="h-2" />
                    <div><span className="text-pink-400">speed:</span></div>
                    <div>  <span className="text-green-400">desktop: 98/100</span></div>
                    <div>  <span className="text-green-400">mobile: 94/100</span></div>
                    <div className="h-2" />
                    <div className="text-gray-500">{'# all good ✓'}</div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#2d2d2d] border-t border-gray-700 flex items-center gap-2">
                    <span className="text-green-400 text-xs">✓</span>
                    <span className="text-gray-500 text-xs font-mono">monitored 24/7 — from €29/mo</span>
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
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Why Maintain Your Website?</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your website is your business face. Take care of it.
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              An unmaintained website slows down, becomes vulnerable, and loses Google rankings. Our team ensures your website is always fast, secure, and ready for business.
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
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Maintenance Plans</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose the right plan for you
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From basic maintenance to full service – flexible plans for every budget.
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
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">How We Start</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              From audit to ongoing maintenance
            </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fade-in-up" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A simple process – we assess, propose, maintain.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want professionals to take care of your website?</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Leave the worries to us. Get in touch and receive a free website health assessment.
            </p>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Get a Free Audit <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedOnScroll animation="fade-in-up">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">FAQ</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            </AnimatedOnScroll>
          </div>
          <div className="space-y-4">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer locale="en" />
      <CookieBanner />
    </main>
  );
}
