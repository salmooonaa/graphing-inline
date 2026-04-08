import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(249,246,240,0.9)] backdrop-blur-md">
      <Container className="flex min-h-16 items-center justify-between gap-8">
        <a
          href="#overview"
          className="flex items-center gap-3 text-sm font-medium text-slate-900"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
            Graphing Inline
          </span>
          <span
            aria-hidden="true"
            className="hidden h-px w-8 bg-[var(--line-strong)] sm:block"
          />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-500 sm:inline">
            research page
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 md:flex">
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
