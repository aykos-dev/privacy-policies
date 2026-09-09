// Central i18n configuration.
// Language is taken from the `lang` query parameter (e.g. ?lang=ru).
// English is the default and fallback when an unsupported value is passed.

export const locales = ["en", "ru", "uz"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Human-readable names shown in the language switcher.
export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "O‘zbekcha",
};

/**
 * Normalize an arbitrary `lang` query value into a supported Locale.
 * Falls back to the default locale for missing or unknown values.
 */
export function resolveLocale(input?: string | string[]): Locale {
  const raw = Array.isArray(input) ? input[0] : input;
  const value = raw?.toLowerCase().trim();
  if (value && (locales as readonly string[]).includes(value)) {
    return value as Locale;
  }
  return defaultLocale;
}
