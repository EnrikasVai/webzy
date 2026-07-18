import {
  HiShoppingCart,
  HiGlobe,
  HiColorSwatch,
  HiChartBar,
  HiShieldCheck,
  HiLightningBolt,
} from "react-icons/hi";

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
        <h2 className="section-title">
          Mūsų <span className="text-primary-600">Paslaugos</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
          Siūlome pilną web sprendimų spektrą – nuo dizaino iki techninės
          priežiūros
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:-translate-y-1 transition-transform duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
