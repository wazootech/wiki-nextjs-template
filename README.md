# wiki-nextjs-template

Next.js static site that consumes **`wiki export`** JSON-LD and pre-renders one route per vault page.

Registry: [Wiki CLI templates](https://github.com/wazootech/wiki/blob/main/docs/wiki/Wiki_CLI.md#ecosystem-templates).

## Quick start

```bash
pip install wazootech-wiki
bash scripts/export-wiki-data.sh
cd web && npm install && npm run build
```

Open `web/out/` after `next build` (static export).

## Layout

| Path | Role |
| ---- | ---- |
| `wiki/` | Example vault |
| `wiki.yaml` | Wiki CLI config |
| `scripts/export-wiki-data.sh` | `wiki check` + `wiki export` → `web/data/wiki-export.json` |
| `web/` | Next.js SSG app |

## Deploy

Deploy `web/out/` to Vercel, Netlify, or GitHub Pages. Re-run `scripts/export-wiki-data.sh` when the vault changes.

## Related

- [#15](https://github.com/wazootech/wiki/issues/15)
- [Wiki Subcommand export](https://github.com/wazootech/wiki/blob/main/docs/wiki/Wiki_Subcommand_export.md)
