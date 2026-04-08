import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(248,244,237,0.84)] backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-8 lg:min-h-[4.5rem]">
        <a
          href="#overview"
          className="flex min-w-0 items-center gap-3 text-sm font-medium text-[var(--foreground)]"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--foreground)]" />
          <div className="min-w-0">
            <span className="block truncate text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Graphing Inline
            </span>
            <span className="hidden truncate text-[0.72rem] text-[var(--muted)] sm:block">
              Word-scale graphics in scientific papers
            </span>
          </div>
          <span
            aria-hidden="true"
            className="hidden h-px w-8 bg-[var(--line-strong)] lg:block"
          />
          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] lg:inline">
            editorial research page
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {siteMeta.navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="quiet-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
