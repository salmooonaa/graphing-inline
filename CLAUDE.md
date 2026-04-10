# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Next.js development server
npm run build      # Build static site for GitHub Pages (output: ./out/)
npm run typecheck  # Type check without emitting
```

## Architecture

This is a **Next.js static site** (SSG) for an academic research paper website, deployed to GitHub Pages.

### Three-Layer Structure

1. **Content layer** (`src/content/`, `src/types/content.ts`): TypeScript data objects are the single source of truth for all page text, metrics, and structure. All content is typed via `src/types/content.ts`.

2. **Component layer** (`src/components/`):
   - `sections/`: Major page sections that compose multiple blocks
   - `blocks/`: Reusable presentation components (figures, grids, flows)
   - `ui/`: Low-level layout utilities (`Container`, `SectionShell`, `StatusBadge`)

3. **App layer** (`src/app/`): `page.tsx` composes all sections; `layout.tsx` sets fonts and metadata; `globals.css` holds design tokens, animation keyframes, and utility classes.

### Data Flow

Content objects defined in `src/content/` are imported in `src/app/page.tsx` and passed as props to section components, which delegate rendering to block components. No backend or API — purely static.

### Key Configuration

- `next.config.ts`: Static export + GitHub Pages base path (`/graphing-inline/`)
- `tsconfig.json`: Path alias `@/*` → `src/*`, strict mode
- `.github/workflows/deploy.yml`: Auto-deploys to GitHub Pages on push to `main`

## Language Rules

- **Chat**: Simplified Chinese (unless user asks for English)
- **All repository artifacts** (commits, UI copy, code comments, PR descriptions): English only

## Git Workflow

- Commit and push immediately after every change — do not ask for confirmation.
- For short single-scope tasks: finish, then commit and push once.
- For long/multi-stage tasks: phased commits after each stable milestone.
- Each commit must correspond to a clear logical boundary; do not mix unrelated changes.
- Before each commit, verify that `private/`, `.codex`, and `AGENTS.md` are excluded.
