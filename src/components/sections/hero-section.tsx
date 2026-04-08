import type { PageHeroContent } from "@/types/content";

import { ImagePlaceholder } from "@/components/blocks/image-placeholder";
import { Container } from "@/components/ui/container";

type HeroSectionProps = {
  content: PageHeroContent;
};

function HeroActionIcon({ label }: { label: string }) {
  if (label === "Paper") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 4.75h7.5L18.25 8.5v10.75H7z" />
        <path d="M14.5 4.75V8.5h3.75" />
        <path d="M9.25 12h6.5" />
        <path d="M9.25 15.5h6.5" />
      </svg>
    );
  }

  if (label === "Preprint") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 7h7v7" />
        <path d="M17 7l-9.5 9.5" />
        <path d="M14.5 12.5v4.75h-9V8h4.75" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.75 7.75h14.5v10.5H4.75z" />
      <path d="M8 7.75V5.5h8v2.25" />
      <path d="M4.75 11.5h14.5" />
      <path d="M9 14.5h6" />
    </svg>
  );
}

export function HeroSection({ content }: HeroSectionProps) {
  const titleBreakIndex = content.title.indexOf(" Word-scale ");
  const titleLeading =
    titleBreakIndex > -1
      ? content.title.slice(0, titleBreakIndex)
      : content.title;
  const titleTrailing =
    titleBreakIndex > -1
      ? content.title.slice(titleBreakIndex + 1)
      : null;

  return (
    <section
      id="overview"
      className="border-b border-[var(--line)] px-0 pb-18 pt-10 sm:pb-20 sm:pt-14 lg:pb-24"
    >
      <Container>
        <div className="space-y-9 sm:space-y-11 lg:space-y-13">
          <div className="section-reveal mx-auto flex max-w-6xl flex-col items-center text-center">
            <div className="w-full max-w-[72rem] space-y-7 sm:space-y-8">
              <h1 className="mx-auto max-w-[24ch] text-balance text-[2.18rem] leading-[1.03] tracking-[-0.042em] text-[var(--foreground)] sm:max-w-[23ch] sm:text-[2.85rem] lg:max-w-none lg:text-[2.95rem] lg:leading-[1.04] xl:text-[3.18rem]">
                {titleTrailing ? (
                  <>
                    <span className="lg:block">{titleLeading}</span>
                    <span className="lg:block">{titleTrailing}</span>
                  </>
                ) : (
                  content.title
                )}
              </h1>

              <div className="mx-auto max-w-4xl space-y-3 sm:space-y-3.5">
                <p className="text-pretty text-[1rem] font-medium leading-7 text-[var(--muted-strong)] sm:text-[1.08rem]">
                  {content.authorsLine}
                </p>

                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-[0.84rem] leading-6 text-[var(--muted)] sm:text-[0.9rem]">
                    {content.publicationLine}
                  </p>
                  {content.contributionNotes?.length ? (
                    <p className="text-[0.7rem] leading-6 text-[var(--muted)]/90 sm:text-[0.76rem]">
                      {content.contributionNotes.join(" · ")}
                    </p>
                  ) : null}
                </div>

                {content.acknowledgementLine ? (
                  <p className="mx-auto max-w-3xl pt-1 text-[0.66rem] leading-6 text-[var(--muted)]/76 sm:text-[0.72rem]">
                    {content.acknowledgementLine}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:mt-10">
              <p className="section-eyebrow">Project resources</p>
              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {content.actions.map((action) => (
                  <a
                    key={`${action.label}-${action.href}`}
                    href={action.href}
                    className="inline-flex min-w-[9.5rem] items-center justify-center gap-2.25 border border-[var(--line-strong)] bg-white/92 px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  >
                    <HeroActionIcon label={action.label} />
                    <span>{action.label}</span>
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
