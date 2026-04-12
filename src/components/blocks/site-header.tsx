"use client";

import { useEffect, useRef, useState } from "react";

import { siteMeta } from "@/content/site";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const sectionToNavMap = {
  overview: "overview",
  motivation: "motivation",
  results: "results",
  bibtex: "bibtex",
} as const;

type ActiveNavId = (typeof sectionToNavMap)[keyof typeof sectionToNavMap];

export function SiteHeader() {
  const [activeNavId, setActiveNavId] = useState<ActiveNavId>("overview");
  const headerRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (sectionId: string, behavior: ScrollBehavior) => {
    const target = document.getElementById(sectionId);

    if (!target) {
      return false;
    }

    const configuredOffset = Number.parseFloat(
      window.getComputedStyle(target).scrollMarginTop,
    );
    const fallbackOffset = headerRef.current?.getBoundingClientRect().height ?? 0;
    const offset =
      Number.isFinite(configuredOffset) && configuredOffset > 0
        ? Math.max(configuredOffset, fallbackOffset + 12)
        : fallbackOffset + 12;
    const top = Math.max(
      target.getBoundingClientRect().top + window.scrollY - offset,
      0,
    );

    window.scrollTo({ top, behavior });
    return true;
  };

  useEffect(() => {
    const trackedSections = Object.keys(sectionToNavMap) as Array<
      keyof typeof sectionToNavMap
    >;
    let frameId = 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateActiveNav = () => {
      const headerHeight =
        headerRef.current?.getBoundingClientRect().height ?? 0;
      const marker = window.scrollY + headerHeight + 24;
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

    const onHashChange = () => {
      const nextHash = window.location.hash.slice(1);

      if (nextHash) {
        scrollToSection(
          nextHash,
          prefersReducedMotion.matches ? "auto" : "smooth",
        );
      }

      onScroll();
    };

    updateActiveNav();

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        scrollToSection(window.location.hash.slice(1), "auto");
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: ActiveNavId,
  ) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    const nextHash = `#${sectionId}`;

    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }

    scrollToSection(sectionId, behavior);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-30 border-b border-[var(--line)] bg-white"
    >
      <Container className="flex min-h-14 items-center justify-center py-1.5 sm:min-h-15 sm:py-0">
        <nav className="flex w-full items-center justify-between gap-1.5 sm:justify-center sm:gap-4 md:gap-6 lg:gap-11 max-[359px]:grid max-[359px]:grid-cols-2 max-[359px]:gap-x-2 max-[359px]:gap-y-1.5">
          {siteMeta.navItems.map((item) => {
            const navId = item.id as ActiveNavId;
            const isActive = activeNavId === navId;

            return (
              <a
                key={navId}
                href={`#${navId}`}
                onClick={(event) => handleNavClick(event, navId)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative inline-flex min-h-11 items-center justify-center px-2 pb-1.5 text-[0.62rem] font-medium uppercase tracking-[0.17em] transition-colors duration-150 sm:px-1 sm:text-[0.76rem] lg:min-h-10 md:text-[0.8rem] max-[359px]:w-full",
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
