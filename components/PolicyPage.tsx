import type { Locale } from "@/lib/i18n";
import type { PolicyDocument } from "@/lib/policy";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// Presentational layout for any privacy policy document.
// Reused across projects (Ijaradosh, Wayout, ...) — only the content differs.
export function PolicyPage({
  doc,
  locale,
  basePath,
}: {
  doc: PolicyDocument;
  locale: Locale;
  basePath: string;
}) {
  return (
    <main className="policy" lang={locale}>
      <header className="policy-header">
        <LanguageSwitcher basePath={basePath} current={locale} />
        <h1>{doc.title}</h1>
        <p className="policy-updated">
          {doc.updatedLabel}: {doc.updatedDate}
        </p>
        <p className="policy-intro">{doc.intro}</p>
      </header>

      {doc.sections.map((section, i) => (
        <section key={i} className="policy-section">
          <h2>{section.heading}</h2>
          {section.body.map((block, j) =>
            block.type === "paragraph" ? (
              <p key={j}>{block.text}</p>
            ) : (
              <ul key={j}>
                {block.items.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            )
          )}
        </section>
      ))}
    </main>
  );
}
