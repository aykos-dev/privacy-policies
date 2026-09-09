import Link from "next/link";

// Simple landing page. Likely to be modified later.
// Lists the projects whose privacy policies are hosted here.
const projects = [
  { slug: "ijaradosh", name: "Ijaradosh" },
  // Add future projects here, e.g. { slug: "wayout", name: "Wayout" }
];

export default function Home() {
  return (
    <main className="home">
      <h1>Privacy Policies</h1>
      <p>Select a project to view its privacy policy.</p>
      <ul className="home-list">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
