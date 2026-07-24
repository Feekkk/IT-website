const SITE_NAME = "RCMP IT Department";
const DEFAULT_DESCRIPTION =
  "Official IT Department website for RCMP — campus systems, AV support, network help, and feedback.";
const DEFAULT_OG_IMAGE = "/rcmp.png";

export const PUBLIC_PATHS = ["/", "/about", "/information", "/feedback"] as const;

export type PublicPath = (typeof PUBLIC_PATHS)[number];

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function env(name: string): string {
  if (typeof process !== "undefined" && process.env[name]) {
    return process.env[name]!.trim();
  }
  const viteKey = name.startsWith("VITE_") ? name : `VITE_${name}`;
  const viteValue = import.meta.env[viteKey];
  return typeof viteValue === "string" ? viteValue.trim() : "";
}

export function getSiteUrl(fallbackOrigin?: string): string {
  const configured = env("SITE_URL") || env("VITE_SITE_URL") || fallbackOrigin || "";
  return configured.replace(/\/$/, "");
}

export function absoluteUrl(path: string, siteUrl = getSiteUrl()): string {
  if (!siteUrl) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string, includeBrand = true): string {
  if (!includeBrand || title === SITE_NAME) return title;
  return `${title} | ${SITE_NAME}`;
}

export function createSeoHead({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = "website",
  jsonLd,
}: SeoInput) {
  const siteUrl = getSiteUrl();
  const fullTitle = pageTitle(title);
  const url = absoluteUrl(path, siteUrl);
  const imageUrl = absoluteUrl(image, siteUrl);
  const robots = noIndex ? "noindex, nofollow" : "index, follow";

  const meta = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "robots", content: robots },
    { name: "googlebot", content: robots },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_MY" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];

  if (siteUrl) {
    meta.push(
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { name: "twitter:image", content: imageUrl },
    );
  }

  const links = siteUrl ? [{ rel: "canonical", href: url }] : [];

  const scripts: Array<Record<string, unknown>> = [];
  if (jsonLd) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(jsonLd),
    });
  }

  return { meta, links, scripts };
}

export function organizationJsonLd(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl || undefined,
    logo: siteUrl ? absoluteUrl(DEFAULT_OG_IMAGE, siteUrl) : undefined,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Royal College of Medicine Perak",
      url: "https://rcmp.edu.my",
    },
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle(title),
    description,
    url: absoluteUrl(path, siteUrl) || path,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: siteUrl || undefined,
    },
  };
}

export function webSiteJsonLd(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: siteUrl || undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export { SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE };
