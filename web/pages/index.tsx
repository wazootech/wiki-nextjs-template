import Link from "next/link";
import { listPages } from "../lib/pages";

export default function Home() {
  const pages = listPages();
  return (
    <main style={{ fontFamily: "system-ui", margin: "2rem" }}>
      <h1>Wiki Next.js viewer</h1>
      <p>Static routes generated from <code>wiki export</code> JSON-LD.</p>
      <ul>
        {pages.map((page) => (
          <li key={page.slug}>
            <Link href={`/${page.slug}`}>{page.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
