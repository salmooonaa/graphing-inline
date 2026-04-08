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
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          <div className="section-reveal mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="w-full max-w-4xl space-y-7 sm:space-y-8">
              <h1 className="mx-auto max-w-[18ch] text-balance text-[2.45rem] leading-[0.98] tracking-[-0.038em] text-[var(--foreground)] sm:text-[3.35rem] lg:text-[4.15rem]">
                {content.title}
              </h1>

              <div className="mx-auto max-w-3xl space-y-2.5 sm:space-y-3">
                <p className="text-pretty text-[0.98rem] font-medium leading-7 text-[var(--muted-strong)] sm:text-[1.06rem]">
                  {content.authorsLine}
                </p>
                <p className="text-[0.82rem] leading-6 text-[var(--muted)] sm:text-[0.88rem]">
                  {content.publicationLine}
                </p>
              </div>
            </div>

            <div className="mt-9 flex w-full flex-col items-center gap-3.5 sm:mt-10">
              <p className="section-eyebrow">Project resources</p>
              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {content.actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  className={
                    action.variant === "primary"
                      ? "inline-flex min-w-[8.5rem] items-center justify-center border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[color:rgba(23,19,15,0.88)]"
                      : "inline-flex min-w-[8.5rem] items-center justify-center border border-[var(--line-strong)] bg-white/78 px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  }
                >
                  {action.label}
                </a>
              ))}
              </div>
            </div>
          </div>

          <ImagePlaceholder
            className="section-reveal reveal-delay-1 mx-auto max-w-5xl"
            figure={content.visual}
            tone="neutral"
            canvasClassName="aspect-[16/11] md:aspect-[16/10]"
          />
        </div>
      </Container>
    </section>
  );
}
