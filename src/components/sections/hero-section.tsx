import type { PageHeroContent } from "@/types/content";

import { ImagePlaceholder } from "@/components/blocks/image-placeholder";
import { Container } from "@/components/ui/container";

type HeroSectionProps = {
  content: PageHeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="border-b border-[var(--line)] px-0 pb-18 pt-10 sm:pb-20 sm:pt-14 lg:pb-24"
    >
      <Container>
        <div className="space-y-12 sm:space-y-14 lg:space-y-16">
          <div className="section-reveal mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="w-full space-y-5 sm:space-y-6">
              <h1 className="mx-auto max-w-[15ch] text-[2.9rem] leading-[0.94] text-[var(--foreground)] sm:text-[4.1rem] lg:text-[5rem]">
                {content.title}
              </h1>

              <div className="space-y-2.5">
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)] sm:text-[0.8rem]">
                  {content.authorsLine}
                </p>
                <p className="text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">
                  {content.publicationLine}
                </p>
              </div>
            </div>

            <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-9">
              {content.actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  className={
                    action.variant === "primary"
                      ? "inline-flex items-center justify-center border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:rgba(23,19,15,0.88)]"
                      : "inline-flex items-center justify-center border border-[var(--line-strong)] bg-white/78 px-5 py-3 text-sm font-medium text-[var(--muted-strong)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <ImagePlaceholder
            className="section-reveal reveal-delay-1 mx-auto max-w-6xl"
            figure={content.visual}
            tone="neutral"
            canvasClassName="aspect-[16/11] md:aspect-[16/10]"
          />
        </div>
      </Container>
    </section>
  );
}
