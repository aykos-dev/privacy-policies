import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";

// Renders a row of language links that keep the current page but swap
// the `lang` query parameter. No client-side JS required.
export function LanguageSwitcher({
  basePath,
  current,
}: {
  basePath: string;
  current: Locale;
}) {
  return (
    <nav className="lang-switcher" aria-label="Language">
      {locales.map((locale) => {
        const isActive = locale === current;
        return (
          <Link
            key={locale}
            href={`${basePath}?lang=${locale}`}
            className={isActive ? "lang-link active" : "lang-link"}
            aria-current={isActive ? "true" : undefined}
            hrefLang={locale}
          >
            {localeNames[locale as Locale]}
          </Link>
        );
      })}
    </nav>
  );
}
