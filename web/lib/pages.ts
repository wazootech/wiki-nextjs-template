import wikiExport from "../data/wiki-export.json";

export type WikiEntry = {
  name: string;
  slug: string;
};

export function listPages(): WikiEntry[] {
  const rows = Array.isArray(wikiExport) ? wikiExport : [wikiExport];
  return rows.map((row) => {
    const name = String(row.name);
    return { name, slug: name.replace(/\.md$/i, "") };
  });
}

export function findPage(slug: string) {
  return listPages().find((page) => page.slug === slug) ?? null;
}
