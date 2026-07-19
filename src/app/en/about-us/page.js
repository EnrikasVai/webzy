import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiTarget, FiEye, FiUsers, FiAward, FiSearch, FiZap, FiSun } from "react-icons/fi";
import { getPageMeta } from "@/data/seo";

export const metadata = getPageMeta("about", "en");

const teamMembers = [
  {
    name: "Enrikas",
    role: "Founder – Developer",
    initials: "EN",
  },
  {
    name: "Gytis",
    role: "Founder – SEO Specialist",
    initials: "GY",
  },
  {
    name: "Augustė",
    role: "Graphic Designer – Marketing Specialist",
    initials: "AU",
  },
];

export default function EnApieMus() {
  return (
    <main>
      <Navbar locale="en" />

      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-600/10 dark:from-primary-600/10 dark:to-primary-600/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Story</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-primary-600 dark:text-primary-400">We create smart solutions</span> that help businesses grow
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                From the very beginning, our goal was one – to help businesses digitalize not in a complicated way, but effectively. Based on experience and technological foundation, we create websites that not only look good but also work for your benefit.
              </p>
            </div>
            <div className="hidden lg:flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-3xl absolute -top-10 -right-10" />
                <div className="relative w-72 h-72 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-2xl">
                  <Image src="/icon.webp" alt="WEBZY logo" width={280} height={90} className="opacity-90 brightness-0 invert" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <FiTarget className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest">Our Mission</h5>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                To become a reliable IT partner that not only creates websites but also understands your business goals and helps you achieve them.
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that every business deserves a professional website that not only looks great but also brings real results.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <FiEye className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest">Our Vision</h5>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                To help companies grow through efficient, fast and flexible internet solutions.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From simple business cards to complex e-commerce solutions – we create websites that work and deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h5 className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Team</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet our key team members who work daily to make your project successful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="card group hover:-translate-y-1 animate-fade-in text-center" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h5 className="text-primary-200 font-semibold text-sm uppercase tracking-widest mb-4">Let&apos;s Work Together</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get a personalized offer for your needs!
          </h2>
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/20 text-lg group"
          >
            CONTACT US
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}
