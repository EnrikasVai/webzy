import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "Privatumo politika",
  description:
    "WEBZY privatumo politika. Sužinokite, kaip mes renkame, naudojame ir saugome jūsų asmens duomenis.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivatumoPolitikaPage() {
  return (
    <main>
      <Navbar locale="lt" />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privatumo politika
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Paskutinį kartą atnaujinta: 2026 m.
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              1. Bendrosios nuostatos
            </h2>
            <p>
              Ši privatumo politika reglamentuoja asmens duomenų rinkimo, tvarkymo ir saugojimo
              principus, kai lankotės mūsų svetainėje arba naudojatės mūsų teikiamomis paslaugomis.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              2. Renkama informacija
            </h2>
            <p>
              Mes renkame tik tą informaciją, kurią mums pateikiate savo noru:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vardas ir pavardė</li>
              <li>El. pašto adresas</li>
              <li>Telefono numeris</li>
              <li>Žinutės turinys</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. Kaip naudojame jūsų duomenis
            </h2>
            <p>Jūsų pateiktus duomenis naudojame tik šiais tikslais:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Atsakyti į jūsų užklausas</li>
              <li>Teikti konsultacijas</li>
              <li>Pagerinti mūsų paslaugų kokybę</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              4. Duomenų saugojimas
            </h2>
            <p>
              Jūsų asmens duomenys saugomi saugiai ir nėra perduodami tretiesiems asmenims be
              jūsų sutikimo, išskyrus atvejus, kai to reikalauja įstatymai.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              5. Jūsų teisės
            </h2>
            <p>
              Jūs turite teisę bet kada prašyti ištrinti, pataisyti arba gauti informaciją apie
              savo saugomus asmens duomenis. Norėdami tai padaryti, susisiekite su mumis el. paštu.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              6. Kontaktai
            </h2>
            <p>
              Jei turite klausimų dėl privatumo politikos, susisiekite:
              <br />
              El. paštas: info@webzy.lt
            </p>
          </div>
        </div>
      </section>
      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
