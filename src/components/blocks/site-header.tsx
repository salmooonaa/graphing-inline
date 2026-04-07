import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-8">
        <a
          href="#hero"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900"
        >
          Graphing Inline
        </a>
        <nav className="hidden items-center gap-5 text-sm text-slate-600 lg:flex">
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
