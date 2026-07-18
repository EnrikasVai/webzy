import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "WEBZY privacy policy. Learn how we collect, use and protect your personal data.",
  robots: {
    index: false,
    follow: true,
  },
};

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
            Last updated: 2026
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              1. General Provisions
            </h2>
            <p>
              This privacy policy governs the principles of collection, processing and storage of personal data when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              2. Data Controller
            </h2>
            <p>
              The data controller of your personal data is WEBZY. If you have any questions about this privacy policy, please contact us by email: info@webzy.lt
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. Collected Data
            </h2>
            <p>We may collect the following data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and surname</li>
              <li>Email address</li>
              <li>Information provided in messages</li>
              <li>Website usage data (Google Analytics)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              4. Purpose of Data Processing
            </h2>
            <p>
              Your data is processed for the following purposes: providing services, responding to inquiries, improving website quality, and ensuring security.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              5. Data Retention
            </h2>
            <p>
              Your personal data is stored for no longer than necessary for the purposes for which it was collected, or as required by applicable law.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, delete or transfer your data, as well as the right to restrict processing and the right to object. You also have the right to withdraw consent at any time.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              7. Contact
            </h2>
            <p>
              If you have any questions about this privacy policy, please contact us: info@webzy.lt
            </p>
          </div>
        </div>
      </section>
      <Footer locale="en" />
    </main>
  );
}
