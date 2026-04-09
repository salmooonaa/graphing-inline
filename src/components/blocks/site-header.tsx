"use client";

import { useEffect, useState } from "react";

import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const sectionToNavMap = {
  overview: "overview",
  motivation: "motivation",
  method: "method",
  results: "results",
  bibtex: "bibtex",
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
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-white">
      <Container className="flex min-h-14 items-center justify-center sm:min-h-15">
        <nav className="flex w-full items-center justify-center gap-5 sm:gap-7 md:gap-9 lg:gap-11">
          {siteMeta.navItems.map((item) => {
            const isActive = activeNavId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative inline-flex items-center pb-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-150 sm:text-[0.76rem] md:text-[0.8rem]",
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
                      ? "w-6 opacity-100"
                      : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-70",
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
