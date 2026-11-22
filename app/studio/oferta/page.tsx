import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { resolveLocale } from "@/lib/i18n";
import { studioOferta } from "@/content/studio-oferta";

const BASE_PATH = "/studio/oferta";

type SearchParams = Promise<{ lang?: string | string[] }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const doc = studioOferta[locale];
  return {
    title: `Subly — ${doc.title}`,
    description: doc.intro,
  };
}

export default async function StudioOfertaPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const doc = studioOferta[locale];

  return <PolicyPage doc={doc} locale={locale} basePath={BASE_PATH} />;
}
