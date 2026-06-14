import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { findPage, listPages } from "../lib/pages";
import wikiExport from "../data/wiki-export.json";

type Props = { slug: string; name: string; rdf: unknown };

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: listPages().map((page) => ({ params: { slug: page.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = String(context.params?.slug ?? "");
  const page = findPage(slug);
  if (!page) return { notFound: true };
  const rows = Array.isArray(wikiExport) ? wikiExport : [wikiExport];
  const row = rows.find((entry) => String(entry.name).replace(/\.md$/i, "") === slug);
  return {
    props: {
      slug,
      name: page.name,
      rdf: row?.rdf ?? {},
    },
  };
};

export default function WikiPage({ slug, name, rdf }: Props) {
  return (
    <main style={{ fontFamily: "system-ui", margin: "2rem" }}>
      <p>
        <Link href="/">← Index</Link>
      </p>
      <h1>{slug.replace(/_/g, " ")}</h1>
      <p>
        Source file: <code>{name}</code>
      </p>
      <pre style={{ background: "#f4f4f5", padding: "1rem", overflow: "auto" }}>
        {JSON.stringify(rdf, null, 2)}
      </pre>
    </main>
  );
}
