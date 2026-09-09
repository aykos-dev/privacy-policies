import type { Locale } from "@/lib/i18n";

// Structured shape for a privacy policy document.
// Content is authored as data so every language renders identically
// and adding a new project (e.g. /wayout) is just another dictionary.

export interface PolicySection {
  heading: string;
  // Each block is either a paragraph or a bullet list.
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
  >;
}

export interface PolicyDocument {
  title: string;
  updatedLabel: string; // e.g. "Last updated"
  updatedDate: string; // e.g. "September 9, 2026"
  intro: string;
  sections: PolicySection[];
}

// A localized policy is one document per supported language.
export type LocalizedPolicy = Record<Locale, PolicyDocument>;
