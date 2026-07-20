/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old WP pages
      { source: "/apie", destination: "/apie-mus", permanent: true },
      { source: "/slapuku-politika", destination: "/privatumo-politika", permanent: true },
      { source: "/taisykles-ir-salygos", destination: "/privatumo-politika", permanent: true },

      // Old WP blog posts
      {
        source: "/kodel-rinktis-wordpress",
        destination: "/wordpress-svetainiu-kurimas",
        permanent: true,
      },
      {
        source: "/wordpress-shopify-ar-laravel-kaip-pasirinkti-tinkamiausia-platforma-jusu-verslui",
        destination: "/blogas",
        permanent: true,
      },

      // Old WP categories → blog
      { source: "/category/wordpress", destination: "/wordpress-svetainiu-kurimas", permanent: true },
      { source: "/category/iskiepiai", destination: "/blogas", permanent: true },
      { source: "/category/laravel", destination: "/blogas", permanent: true },
      { source: "/category/seo", destination: "/blogas", permanent: true },
      { source: "/category/uncategorized", destination: "/blogas", permanent: true },
      { source: "/category/el-parduotuves", destination: "/blogas", permanent: true },
    ];
  },
};

export default nextConfig;

// Cloudflare next-on-pages dev setup
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}
