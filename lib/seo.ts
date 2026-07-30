import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

interface SeoInput {
  title?: string;
  description?: string;
  path?: string;
}

export function createMetadata({ title, description, path = "/" }: SeoInput): Metadata {
  const pageTitle = title
    ? siteConfig.seo.titleTemplate.replace("%s", title)
    : siteConfig.seo.defaultTitle;
  const pageDescription = description ?? siteConfig.seo.description;
  const url = new URL(path, siteConfig.siteUrl).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.businessName,
      images: [siteConfig.seo.ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.seo.ogImage],
    },
  };
}
