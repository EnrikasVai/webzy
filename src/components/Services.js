import {
  HiShoppingCart,
  HiGlobe,
  HiColorSwatch,
  HiChartBar,
  HiShieldCheck,
  HiLightningBolt,
} from "react-icons/hi";
import AnimatedOnScroll from "./AnimatedOnScroll";

const services = [
  {
    icon: HiShoppingCart,
    title: "Elektroninių parduotuvių kūrimas",
    description:
      "Pilnai funkcionalios el. parduotuvės su mokėjimo sprendimais (Paysera, Stripe, PayPal), prekių valdymu, katalogais ir užsakymų sistema.",
  },
  {
    icon: HiGlobe,
    title: "Internetinių svetainių kūrimas",
    description:
      "Nuo vieno puslapio vizitinių kortelių iki specializuotų web sprendimų. Kiekviena svetainė kuriama pagal jūsų poreikius.",
  },
  {
    icon: HiColorSwatch,
    title: "Web dizaino darbai",
    description:
      "Šiuolaikiškas, vartotojui patrauklus dizainas, atitinkantis jūsų prekės ženklo stilistiką ir verslo tikslus.",
  },
  {
    icon: HiChartBar,
    title: "SEO Paslaugos",
    description:
      "Techninis SEO, raktažodžių analizė, turinio optimizavimas paieškos sistemoms. Padėkite klientams jus rasti.",
  },
  {
    icon: HiShieldCheck,
    title: "Svetainių priežiūra",
    description:
      "Reguliarūs atnaujinimai, saugumo užtikrinimas, greičio optimizavimas ir techninė priežiūra.",
  },
  {
    icon: HiLightningBolt,
    title: "Pilnas optimizavimas",
    description:
      "Svetainės greičio, struktūros ir vartotojo patirties optimizavimas, kad jūsų lankytojai išliktų.",
  },
];

export default function Services() {
  return (
    <section id="paslaugos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedOnScroll animation="fade-in-up">
          <h2 className="section-title">
            Mūsų <span className="text-primary-600">Paslaugos</span>
          </h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll animation="fade-in-up" delay={0.1}>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
            Siūlome pilną web sprendimų spektrą – nuo dizaino iki techninės
            priežiūros
          </p>
        </AnimatedOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedOnScroll key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={index * 0.1}>
              <div className="card group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
