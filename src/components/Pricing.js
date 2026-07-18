import { HiCheck, HiBadgeCheck } from "react-icons/hi";

const plans = [
  {
    name: "Vieno puslapio svetainė",
    price: "299",
    badge: "Tinka: individualiems paslaugų teikėjams",
    popular: false,
    features: [
      "Turinio valdymo sistema (CMS)",
      "Pristatomasis dizainas",
      "Kontaktų forma",
      "Nuotraukų galerija",
      "Pradinės informacijos įkėlimas",
      "Vidinis SEO",
      "Įgyvendinimas per 1-2 sav.",
    ],
  },
  {
    name: "Reprezentacinė svetainė",
    price: "399",
    badge: "Tinka: smulkiam ir vidutiniam verslui",
    popular: true,
    features: [
      "Visos vieno puslapio svetainės funkcijos",
      "Išplėstinė struktūra (iki 6 psl.)",
      "Daugiaakalbystė (LT, EN, ES)",
      "Individualus dizaino pritaikymas",
      "Socialinių tinklų integracija",
      "Profesionalus turinio išdėstymas",
      "Įgyvendinimo trukmė: 2-3 sav.",
    ],
  },
  {
    name: "Individualus web sprendimas",
    price: "549+",
    badge: "Tinka: parduotuvėms, kompleksiniams sprendimams",
    popular: false,
    features: [
      "Visos reprezentacinės svetainės funkcijos",
      "Prekių / paslaugų katalogas",
      "Mokėjimų integracijos (Paysera, Stripe, PayPal)",
      "Produktų filtrai ir paieška",
      "Atsargų valdymas",
      "Galimybė plėsti į dropshipping ar B2B",
      "Įgyvendinimas nuo 2-3 sav.",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="kainos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Mūsų <span className="text-primary-600">Kainos</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
          Skaidrūs įkainiai be paslėptų mokesčių. Kiekvienam biudžetui
          pritaikytas sprendimas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card flex flex-col ${
                plan.popular
                  ? "border-2 border-primary-500 scale-105 md:scale-105 shadow-xl"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                  <HiBadgeCheck className="w-4 h-4" />
                  POPULIARIAUSIAS
                </div>
              )}

              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-extrabold text-primary-600">
                  €{plan.price}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">vienkartinis mokestis</span>
              </div>

              {/* Badge */}
              <div className="bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium text-center px-3 py-2 rounded-lg mb-6">
                {plan.badge}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <HiCheck className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#kontaktai"
                className={`text-center font-semibold py-3 px-8 rounded-lg transition-all duration-300 block ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-outline"
                }`}
              >
                Pasirinkti planą
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
