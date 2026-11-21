import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { resolveLocale } from "@/lib/i18n";
import { studioPrivacy } from "@/content/studio-privacy";

const BASE_PATH = "/studio/privacy";

type SearchParams = Promise<{ lang?: string | string[] }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const doc = studioPrivacy[locale];
  return {
    title: `Studio — ${doc.title}`,
    description: doc.intro,
  };
}

export default async function StudioPrivacyPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const doc = studioPrivacy[locale];

  return <PolicyPage doc={doc} locale={locale} basePath={BASE_PATH} />;
}
