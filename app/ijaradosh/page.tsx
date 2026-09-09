import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { resolveLocale } from "@/lib/i18n";
import { ijaradoshPolicy } from "@/content/ijaradosh";

const BASE_PATH = "/ijaradosh";

type SearchParams = Promise<{ lang?: string | string[] }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const doc = ijaradoshPolicy[locale];
  return {
    title: `Ijaradosh — ${doc.title}`,
    description: doc.intro,
  };
}

export default async function IjaradoshPolicyPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const doc = ijaradoshPolicy[locale];

  return <PolicyPage doc={doc} locale={locale} basePath={BASE_PATH} />;
}
