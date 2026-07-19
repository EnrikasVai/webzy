import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogPosts from "@/data/blog-posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export function generateStaticParams() {
  return blogPosts
    .filter((p) => p.published)
    .map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.published);
  if (!post) return {};

  return {
    title: post.lt.title,
    description: post.lt.description,
    alternates: {
      canonical: `/${post.slug}`,
      languages: { lt: `/${post.slug}`, en: `/en/${post.enSlug}` },
    },
    openGraph: {
      title: `${post.lt.title} | WEBZY`,
      description: post.lt.description,
      type: "article",
      publishedTime: post.date,
      url: `https://webzy.lt/${post.slug}`,
      siteName: "WEBZY",
      locale: "lt_LT",
      images: post.lt.image
        ? [{ url: post.lt.image, width: 1200, height: 630, alt: post.lt.title }]
        : [{ url: "/og-image.webp", width: 1200, height: 630, alt: post.lt.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.lt.title} | WEBZY`,
      description: post.lt.description,
      images: post.lt.image ? [post.lt.image] : ["/og-image.webp"],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.published);
  if (!post) notFound();

  return (
    <main>
      <Navbar locale="lt" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.lt.title,
            description: post.lt.description,
            image: post.lt.image
              ? `https://webzy.lt${post.lt.image}`
              : "https://webzy.lt/og-image.webp",
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "WEBZY",
              url: "https://webzy.lt",
            },
            publisher: {
              "@type": "Organization",
              name: "WEBZY",
              logo: {
                "@type": "ImageObject",
                url: "https://webzy.lt/logo.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://webzy.lt/${post.slug}`,
            },
          }),
        }}
      />
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogas"
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline mb-6 inline-block"
          >
            ← Grįžti į tinklaraštį
          </Link>
          {post.lt.image && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.lt.image}
                alt={post.lt.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category.lt}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            {post.lt.title}
          </h1>
          <div
            className="prose prose-gray dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-600 dark:prose-p:text-gray-300
              prose-a:text-primary-600 dark:prose-a:text-primary-400
              prose-strong:text-gray-900 dark:prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.lt.content }}
          />
        </div>
      </article>
      <Footer locale="lt" />
      <CookieBanner />
    </main>
  );
}
