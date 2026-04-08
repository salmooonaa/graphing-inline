import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(248,244,237,0.72)] backdrop-blur-lg">
      <Container className="flex min-h-14 items-center justify-between gap-6 lg:min-h-15">
        <a
          href="#overview"
          className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-[var(--foreground)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--foreground)]" />
          <div className="min-w-0">
            <span className="block truncate text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Graphing Inline
            </span>
            <span className="hidden truncate text-[0.68rem] text-[var(--muted)] md:block">
              Word-scale graphics in scientific papers
            </span>
          </div>
          <span
            aria-hidden="true"
            className="hidden h-px w-6 bg-[var(--line)] xl:block"
          />
          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] xl:inline">
            editorial research page
          </span>
        </a>
        <nav className="hidden items-center gap-5 md:flex">
          {siteMeta.navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="quiet-link">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
