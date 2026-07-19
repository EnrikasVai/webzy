import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogPosts from "@/data/blog-posts";

export const metadata = {
  title: "Blog",
  description:
    "WEBZY blog about website development, e-commerce, SEO, web design and digital marketing. Tips and insights for your business.",
  alternates: {
    canonical: "/en/blog",
    languages: { lt: "/blogas", en: "/en/blog" },
  },
  openGraph: {
    title: "Blog | WEBZY",
    description:
      "WEBZY blog about website development, e-commerce, SEO and web design.",
    url: "https://webzy.lt/en/blog",
    siteName: "WEBZY",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "WEBZY - Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | WEBZY",
    description: "WEBZY blog about website development, e-commerce, SEO and web design.",
    images: ["/og-image.webp"],
  },
};

export default function EnBlogPage() {
  const posts = blogPosts.filter((p) => p.published);

  return (
    <main>
      <Navbar locale="en" />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
            Insights, tips and news about website development, design, SEO and digital marketing.
          </p>

          {posts.length === 0 ? (
            <p className="text-gray-400 dark:text-gray-500">Posts are coming soon. Check back later!</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/en/${post.enSlug}`}
                  className="group card overflow-hidden hover:shadow-lg transition-all"
                >
                  {post.en.image && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.en.image}
                        alt={post.en.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.category.en}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                      {post.en.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                      {post.en.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer locale="en" />
    </main>
  );
}
