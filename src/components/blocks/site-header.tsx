"use client";

import { useEffect, useState } from "react";

import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const sectionToNavMap = {
  overview: "overview",
  lens: "overview",
  findings: "findings",
  paper: "paper",
} as const;

type ActiveNavId = (typeof sectionToNavMap)[keyof typeof sectionToNavMap];

export function SiteHeader() {
  const [activeNavId, setActiveNavId] = useState<ActiveNavId>("overview");

  useEffect(() => {
    const trackedSections = Object.keys(sectionToNavMap) as Array<
      keyof typeof sectionToNavMap
    >;
    let frameId = 0;

    const updateActiveNav = () => {
      const marker = window.scrollY + 128;
      let nextActive: ActiveNavId = "overview";

      for (const sectionId of trackedSections) {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= marker) {
          nextActive = sectionToNavMap[sectionId];
        }
      }

      setActiveNavId((current) => (current === nextActive ? current : nextActive));
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveNav);
    };

    updateActiveNav();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-white/94 backdrop-blur-md">
      <Container className="flex min-h-14 items-center justify-between gap-6 lg:min-h-15">
        <a
          href="#overview"
          className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-[var(--foreground)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--foreground)]" />
          <div className="min-w-0">
            <span className="block truncate text-[10px] uppercase tracking-[0.22em] text-[var(--foreground)]">
              Graphing Inline
            </span>
            <span className="hidden truncate text-[0.62rem] text-[var(--muted)]/78 lg:block">
              Word-scale graphics in scientific papers
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex lg:gap-7">
          {siteMeta.navItems.map((item) => {
            const isActive = activeNavId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative inline-flex items-center pb-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-150",
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--muted-strong)]",
                )}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-0 -bottom-px mx-auto h-px bg-[var(--foreground)] transition-all duration-150",
                    isActive
                      ? "w-5 opacity-100"
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-70",
                  )}
                />
              </a>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
