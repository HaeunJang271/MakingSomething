import type { Metadata } from "next";

const SITE_URL = "https://makesomething.kr";

export const siteConfig = {
  name: "MAKE SOMETHING",
  tagline: "Make something.",
  description:
    "무언가를 만들고 싶은 사람들이 모여 실제 프로젝트를 만들고 공개하는 커뮤니티입니다.",
  url: SITE_URL,
  status: "PROJECT #001 / BUILDING",
};

/**
 * Builds page metadata with Open Graph defaults.
 */
export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} — MAKE SOMETHING`
    : "MAKE SOMETHING — Maker Collective";

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
