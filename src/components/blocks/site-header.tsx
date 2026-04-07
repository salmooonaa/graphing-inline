import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(251,248,242,0.88)] backdrop-blur-md">
      <Container className="flex min-h-16 items-center justify-between gap-8">
        <a
          href="#hero"
          className="flex items-center gap-3 text-sm font-medium text-slate-900"
        >
          <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
            Graphing Inline
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-[var(--line-strong)]" />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-500 sm:inline">
            research project
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.18em] text-slate-600 lg:flex">
          {siteMeta.navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition-colors hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
