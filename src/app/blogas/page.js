import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import blogPosts from "@/data/blog-posts";

export const metadata = {
  title: "Blogas",
  description:
    "WEBZY tinklaraštis apie interneto svetainių kūrimą, e-komerciją, SEO, web dizainą ir skaitmeninę rinkodarą. Patarimai ir įžvalgos verslui.",
  alternates: {
    canonical: "/blogas",
    languages: { lt: "/blogas", en: "/en/blog" },
  },
  openGraph: {
    title: "Blogas | WEBZY",
    description:
      "WEBZY tinklaraštis apie interneto svetainių kūrimą, e-komerciją, SEO ir web dizainą.",
    url: "https://webzy.lt/blogas",
    siteName: "WEBZY",
    locale: "lt_LT",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "WEBZY - Blogas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogas | WEBZY",
    description:
      "WEBZY tinklaraštis apie interneto svetainių kūrimą, e-komerciją, SEO ir web dizainą.",
    images: ["/og-image.webp"],
  },
};

export default function BlogPage() {
  const posts = blogPosts.filter((p) => p.published);

  return (
    <main>
      <Navbar locale="lt" />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tinklaraštis
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
            Įžvalgos, patarimai ir naujienos apie interneto svetainių kūrimą, dizainą, SEO ir skaitmeninę rinkodarą.
          </p>

          {posts.length === 0 ? (
            <p className="text-gray-400 dark:text-gray-500">Įrašai dar ruošiami. Užsukite vėliau!</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group card overflow-hidden hover:shadow-lg transition-all"
                >
                  {post.lt.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.lt.image}
                        alt={post.lt.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.category.lt}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                      {post.lt.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                      {post.lt.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
