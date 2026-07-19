import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPageMeta } from "@/data/seo";

export const metadata = getPageMeta("privacy", "en");

export default function EnPrivatumoPolitika() {
  return (
    <main>
      <Navbar locale="en" />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Last updated: July 19, 2026
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              1. General Provisions
            </h2>
            <p>
              This privacy policy governs the principles of collection, processing and storage of personal data when you visit
              <strong> webzy.lt</strong> (hereinafter – the Website) or use our services. We process your personal data in accordance with
              Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation, GDPR),
              the laws of the Republic of Lithuania, and other applicable legal acts.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              2. Data Controller
            </h2>
            <p>
              The data controller of your personal data is <strong>WEBZY</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email: <strong>info@webzy.lt</strong></li>
              <li>Website: <strong>https://webzy.lt</strong></li>
              <li>Country: Lithuania</li>
            </ul>
            <p>
              For any questions regarding the processing of your personal data, you may contact us using the details above.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. What Data We Collect
            </h2>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">3.1. Data You Provide</h3>
            <p>We only collect information that you voluntarily provide via the contact form or email:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Message content</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">3.2. Automatically Collected Data</h3>
            <p>When you visit the Website, certain technical data is collected automatically:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address (anonymised)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Time and date of visit</li>
              <li>Pages viewed</li>
              <li>Referrer URL</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              4. Cookies
            </h2>
            <p>
              The Website uses cookies – small text files stored on your device. They help ensure the proper functioning
              of the Website, analyse traffic, and improve the user experience.
            </p>

            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Cookie</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Provider</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">_ga, _ga_*</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Traffic statistics, user behaviour analysis</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">__cf_bm</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cloudflare</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Bot detection and protection (Turnstile)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">30 min</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">cf_clearance</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cloudflare</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Turnstile verification that user is not a bot</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Up to 1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">cookie-consent</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">WEBZY</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cookie consent storage</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">theme-preference</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">WEBZY</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Dark/light theme setting</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              You can change your cookie settings at any time in your browser or withdraw your cookie consent by
              clicking the &ldquo;Cookie Settings&rdquo; link in the Website footer.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              5. Google Analytics
            </h2>
            <p>
              The Website uses <strong>Google Analytics 4 (GA4)</strong> – a web analytics service provided by Google Ireland Limited
              (Gordon House, Barrow Street, Dublin 4, Ireland). Google Analytics uses cookies to analyse your use of the Website.
              The collected information (including your anonymised IP address) is transmitted to and stored on Google servers
              in the United States.
            </p>
            <p>
              Google uses this information to compile reports on Website traffic. Google may transfer this information
              to third parties where required by law or where third parties process data on Google&rsquo;s behalf.
            </p>
            <p>
              More information on Google&rsquo;s data processing:
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline"> Google Privacy Policy</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              6. Google Tag Manager
            </h2>
            <p>
              The Website uses <strong>Google Tag Manager</strong> – a tag management system that allows centralised management
              of website tags (tracking codes). Google Tag Manager itself does not collect personal data – it only enables
              the functioning of tags from other services (e.g., Google Analytics).
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              7. Cloudflare Services
            </h2>
            <p>
              Our Website is hosted and protected using <strong>Cloudflare, Inc.</strong> (101 Townsend St, San Francisco, CA 94107, USA)
              infrastructure. This includes:
            </p>

            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">7.1. Cloudflare CDN</h3>
            <p>
              Website content is delivered via the Cloudflare Content Delivery Network (CDN). This means your requests
              may be routed through Cloudflare servers located in various countries worldwide. Cloudflare may temporarily
              process your IP address and other technical data for security and performance purposes.
            </p>

            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">7.2. Cloudflare Turnstile</h3>
            <p>
              The Website uses <strong>Cloudflare Turnstile</strong> – an anti-bot and spam protection solution.
              Turnstile may collect technical data (IP address, browser characteristics) to determine whether the user is a human.
              This data is processed in accordance with the Cloudflare Privacy Policy:
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline"> Cloudflare Privacy Policy</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              8. Data Transfers to Third Countries
            </h2>
            <p>
              Some of our service providers (Cloudflare, Google) may process data outside the European Economic Area,
              including the United States. In such cases, we ensure that data transfers comply with GDPR requirements –
              standard contractual clauses (SCCs) are in place with these providers, and where applicable, they participate in the
              <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline"> EU-US Data Privacy Framework</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              9. Data Retention
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Contact form data</strong> – stored for up to 2 years from the last correspondence, unless a legal basis for longer retention arises.</li>
              <li><strong>Google Analytics data</strong> – stored for up to 26 months (per Google Analytics settings).</li>
              <li><strong>Cookies</strong> – according to the expiry periods listed in the table above.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              10. Your Rights Under GDPR
            </h2>
            <p>You have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Right to be informed</strong> – receive information about what data we process about you.</li>
              <li><strong>Right of access</strong> – obtain a copy of your processed data.</li>
              <li><strong>Right to rectification</strong> – request correction of inaccurate data.</li>
              <li><strong>Right to erasure</strong> (&ldquo;right to be forgotten&rdquo;) – request deletion of your data.</li>
              <li><strong>Right to restrict processing</strong> – limit data processing in certain cases.</li>
              <li><strong>Right to data portability</strong> – receive your data in a structured format.</li>
              <li><strong>Right to object</strong> – object to processing for direct marketing or where processing is based on legitimate interest.</li>
              <li><strong>Right to withdraw consent</strong> – withdraw your consent regarding cookies or data processing at any time.</li>
              <li><strong>Right to lodge a complaint</strong> – with the State Data Protection Inspectorate (<a href="https://vdai.lrv.lt/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">vdai.lrv.lt</a>) or your local supervisory authority.</li>
            </ul>
            <p>
              To exercise your rights, please email us at <strong>info@webzy.lt</strong>. We will respond to your request within 30 calendar days.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              11. Third-Party Links
            </h2>
            <p>
              The Website may contain links to external websites (e.g., social networks, partner sites).
              We are not responsible for the privacy practices of these websites. We recommend reviewing
              the privacy policy of each website you visit.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              12. Policy Changes
            </h2>
            <p>
              We reserve the right to update this privacy policy at any time. Significant changes will be announced
              on the Website. We recommend periodically reviewing this page.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              13. Contact
            </h2>
            <p>
              If you have any questions about this privacy policy or wish to exercise your rights, please contact us:
              <br />
              Email: <strong>info@webzy.lt</strong>
              <br />
              Website: <strong>https://webzy.lt</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer locale="en" />
    </main>
  );
}
