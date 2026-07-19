import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogPosts from "@/data/blog-posts";
import { getBlogPostMeta } from "@/data/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return blogPosts
    .filter((p) => p.published)
    .map((post) => ({ slug: post.enSlug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.enSlug === params.slug && p.published);
  if (!post) return {};
  return getBlogPostMeta(post, "en");
}

export default function EnBlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.enSlug === params.slug && p.published);
  if (!post) notFound();

  return (
    <main>
      <Navbar locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.en.title,
            description: post.en.description,
            image: post.en.image
              ? `https://webzy.lt${post.en.image}`
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
              "@id": `https://webzy.lt/en/${post.enSlug}`,
            },
          }),
        }}
      />
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/en/blog"
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          {post.en.image && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.en.image}
                alt={post.en.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category.en}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            {post.en.title}
          </h1>
          <div
            className="prose prose-gray dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-600 dark:prose-p:text-gray-300
              prose-a:text-primary-600 dark:prose-a:text-primary-400
              prose-strong:text-gray-900 dark:prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.en.content }}
          />
        </div>
      </article>
      <Footer locale="en" />
    </main>
  );
}
