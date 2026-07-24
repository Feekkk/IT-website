import { createFileRoute } from "@tanstack/react-router";
import { PUBLIC_PATHS, absoluteUrl, getSiteUrl } from "@/lib/seo";

const PATH_META: Record<
  (typeof PUBLIC_PATHS)[number],
  { changefreq: string; priority: string }
> = {
  "/": { changefreq: "weekly", priority: "1.0" },
  "/about": { changefreq: "monthly", priority: "0.8" },
  "/information": { changefreq: "monthly", priority: "0.8" },
  "/feedback": { changefreq: "monthly", priority: "0.7" },
};

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const siteUrl = getSiteUrl(new URL(request.url).origin);
        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = PUBLIC_PATHS.map((path) => {
          const meta = PATH_META[path];
          return [
            "  <url>",
            `    <loc>${absoluteUrl(path, siteUrl)}</loc>`,
            `    <lastmod>${lastmod}</lastmod>`,
            `    <changefreq>${meta.changefreq}</changefreq>`,
            `    <priority>${meta.priority}</priority>`,
            "  </url>",
          ].join("\n");
        }).join("\n");

        const body = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urls,
          "</urlset>",
          "",
        ].join("\n");

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
