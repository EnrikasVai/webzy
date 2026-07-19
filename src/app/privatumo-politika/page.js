import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { getPageMeta } from "@/data/seo";

export const metadata = getPageMeta("privacy", "lt");

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
            Paskutinį kartą atnaujinta: 2026 m. liepos 19 d.
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              1. Bendrosios nuostatos
            </h2>
            <p>
              Ši privatumo politika reglamentuoja asmens duomenų rinkimo, tvarkymo ir saugojimo
              principus, kai lankotės svetainėje <strong>webzy.lt</strong> (toliau – Svetainė) arba naudojatės mūsų teikiamomis paslaugomis.
              Tvarkydami jūsų asmens duomenis vadovaujamės 2016 m. balandžio 27 d. Europos Parlamento ir Tarybos reglamentu (ES) 2016/679
              (Bendrasis duomenų apsaugos reglamentas, BDAR), Lietuvos Respublikos asmens duomenų teisinės apsaugos įstatymu ir kitais teisės aktais.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              2. Duomenų valdytojas
            </h2>
            <p>
              Jūsų asmens duomenų valdytojas yra <strong>WEBZY</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>El. paštas: <strong>info@webzy.lt</strong></li>
              <li>Svetainė: <strong>https://webzy.lt</strong></li>
              <li>Šalis: Lietuva</li>
            </ul>
            <p>
              Visais klausimais, susijusiais su asmens duomenų tvarkymu, galite kreiptis aukščiau nurodytais kontaktais.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. Kokius duomenis renkame
            </h2>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">3.1. Jūsų pateikti duomenys</h3>
            <p>Mes renkame tik tą informaciją, kurią savanoriškai pateikiate per kontaktinę formą ar el. paštą:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vardas</li>
              <li>El. pašto adresas</li>
              <li>Telefono numeris (jei nurodote)</li>
              <li>Žinutės turinys</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">3.2. Automatiškai renkami duomenys</h3>
            <p>
              Lankantis Svetainėje, tam tikri techniniai duomenys renkami automatiškai:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP adresas (anonimizuotas)</li>
              <li>Naršyklės tipas ir versija</li>
              <li>Operacinė sistema</li>
              <li>Apsilankymo laikas ir data</li>
              <li>Peržiūrėti puslapiai</li>
              <li>Prisijungimo šaltinis (refferer URL)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              4. Slapukai (Cookies)
            </h2>
            <p>
              Svetainėje naudojami slapukai – maži tekstiniai failai, išsaugomi jūsų įrenginyje.
              Jie padeda užtikrinti tinkamą Svetainės veikimą, analizuoti lankomumą ir pagerinti naudotojo patirtį.
            </p>

            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Slapukas</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Tiekėjas</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Paskirtis</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Galiojimo laikas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">_ga, _ga_*</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Lankomumo statistika, naudotojų elgsenos analizė</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2 metai</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">__cf_bm</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cloudflare</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Botų aptikimas ir apsauga (Turnstile)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">30 min.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">cf_clearance</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cloudflare</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Turnstile patvirtinimas, kad naudotojas ne botas</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Iki 1 metų</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">cookie-consent</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">WEBZY</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Slapukų sutikimo išsaugojimas</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 metai</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">theme-preference</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">WEBZY</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Tamsios/šviesios temos nustatymas</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 metai</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Jūs galite bet kada pakeisti slapukų nustatymus savo naršyklėje arba ištrinti slapukų sutikimą
              paspaudę „Slapukų nustatymai&rdquo; nuorodą Svetainės apačioje.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              5. Google Analytics
            </h2>
            <p>
              Svetainė naudoja <strong>Google Analytics 4 (GA4)</strong> – žiniatinklio analizės paslaugą, teikiamą „Google Ireland Limited&rdquo;
              (Gordon House, Barrow Street, Dublin 4, Airija). Google Analytics naudoja slapukus, kad analizuotų jūsų naudojimąsi Svetaine.
              Surinkta informacija (įskaitant anonimizuotą IP adresą) perduodama ir saugoma „Google&rdquo; serveriuose Jungtinėse Valstijose.
            </p>
            <p>
              „Google&rdquo; naudoja šią informaciją Svetainės lankomumo ataskaitoms rengti. „Google&rdquo; gali perduoti šią informaciją
              trečiosioms šalims, jei to reikalauja įstatymai arba jei trečiosios šalys apdoroja duomenis „Google&rdquo; vardu.
            </p>
            <p>
              Daugiau informacijos apie „Google&rdquo; duomenų tvarkymą rasite:
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline"> Google privatumo politikoje</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              6. Google Tag Manager
            </h2>
            <p>
              Svetainė naudoja <strong>Google Tag Manager</strong> – įrankių valdymo sistemą, leidžiančią centralizuotai valdyti
              svetainės žymas (tracking codes). Google Tag Manager pats savaime nerenka asmens duomenų – jis tik įgalina kitų
              paslaugų (pvz., Google Analytics) žymų veikimą.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              7. Cloudflare paslaugos
            </h2>
            <p>
              Mūsų Svetainė talpinama ir apsaugota naudojant <strong>Cloudflare, Inc.</strong> (101 Townsend St, San Francisco, CA 94107, JAV)
              infrastruktūrą. Tai apima:
            </p>

            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">7.1. Cloudflare CDN</h3>
            <p>
              Svetainės turinys pristatomas per Cloudflare turinio pristatymo tinklą (CDN). Tai reiškia,
              kad jūsų užklausos gali būti nukreiptos per Cloudflare serverius, esančius įvairiose pasaulio šalyse.
              Cloudflare gali laikinai apdoroti jūsų IP adresą ir kitus techninius duomenis saugumo ir našumo tikslais.
            </p>

            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">7.2. Cloudflare Turnstile</h3>
            <p>
              Svetainė naudoja <strong>Cloudflare Turnstile</strong> – apsaugos nuo automatizuotų botų ir šlamšto sprendimą.
              Turnstile gali rinkti techninius duomenis (IP adresą, naršyklės charakteristikas), kad nustatytų,
              ar naudotojas yra žmogus. Šie duomenys tvarkomi pagal Cloudflare privatumo politiką:
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline"> Cloudflare privatumo politika</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              8. Duomenų perdavimas į trečiąsias šalis ir už ES/EEE ribų
            </h2>
            <p>
              Kai kurie mūsų naudojami paslaugų teikėjai (Cloudflare, Google) gali tvarkyti duomenis už Europos ekonominės erdvės ribų,
              įskaitant Jungtines Valstijas. Tokiais atvejais užtikriname, kad duomenų perdavimas vyktų laikantis BDAR reikalavimų –
              su šiais teikėjais yra sudarytos standartinės sutarčių sąlygos (SCC), o kur taikoma, jie dalyvauja
              <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline"> ES-JAV duomenų privatumo sistemoje (Data Privacy Framework)</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              9. Duomenų saugojimo terminai
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Kontaktinių formų duomenys</strong> – saugomi iki 2 metų nuo paskutinio susirašinėjimo, nebent atsiranda teisinis pagrindas saugoti ilgiau.</li>
              <li><strong>Google Analytics duomenys</strong> – saugomi iki 26 mėnesių (pagal Google Analytics nustatymus).</li>
              <li><strong>Slapukai</strong> – pagal aukščiau pateiktoje lentelėje nurodytus galiojimo terminus.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              10. Jūsų teisės pagal BDAR
            </h2>
            <p>Jūs turite šias teises:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Teisė žinoti</strong> – gauti informaciją apie tai, kokius jūsų duomenis tvarkome.</li>
              <li><strong>Teisė susipažinti</strong> – gauti savo tvarkomų duomenų kopiją.</li>
              <li><strong>Teisė ištaisyti</strong> – reikalauti ištaisyti netikslius duomenis.</li>
              <li><strong>Teisė ištrinti</strong> („teisė būti pamirštam&rdquo;) – reikalauti ištrinti jūsų duomenis.</li>
              <li><strong>Teisė apriboti tvarkymą</strong> – apriboti duomenų tvarkymą tam tikrais atvejais.</li>
              <li><strong>Teisė į duomenų perkeliamumą</strong> – gauti duomenis struktūrizuotu formatu.</li>
              <li><strong>Teisė nesutikti</strong> – nesutikti su duomenų tvarkymu tiesioginės rinkodaros tikslais arba kai tvarkymas grindžiamas teisėtu interesu.</li>
              <li><strong>Teisė atšaukti sutikimą</strong> – bet kada atšaukti duotą sutikimą dėl slapukų ar duomenų tvarkymo.</li>
              <li><strong>Teisė pateikti skundą</strong> – Valstybinei duomenų apsaugos inspekcijai (<a href="https://vdai.lrv.lt/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">vdai.lrv.lt</a>).</li>
            </ul>
            <p>
              Norėdami pasinaudoti savo teisėmis, rašykite el. paštu <strong>info@webzy.lt</strong>. Į jūsų užklausą atsakysime per 30 kalendorinių dienų.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              11. Trečiųjų šalių nuorodos
            </h2>
            <p>
              Svetainėje gali būti nuorodų į išorines svetaines (pvz., socialinius tinklus, partnerių svetaines).
              Mes neatsakome už šių svetainių privatumo praktikas. Rekomenduojame susipažinti su kiekvienos lankomos svetainės privatumo politika.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              12. Politikos pakeitimai
            </h2>
            <p>
              Pasiliekame teisę bet kada atnaujinti šią privatumo politiką. Apie esminius pakeitimus informuosime Svetainėje.
              Rekomenduojame periodiškai peržiūrėti šį puslapį.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              13. Kontaktai
            </h2>
            <p>
              Jei turite klausimų dėl šios privatumo politikos ar norite pasinaudoti savo teisėmis, susisiekite:
              <br />
              El. paštas: <strong>info@webzy.lt</strong>
              <br />
              Svetainė: <strong>https://webzy.lt</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
