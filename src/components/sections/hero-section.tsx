import type { PageHeroContent } from "@/types/content";

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
        className="h-[0.95rem] w-[0.95rem] shrink-0"
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
        className="h-[0.95rem] w-[0.95rem] shrink-0"
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
      className="h-[0.95rem] w-[0.95rem] shrink-0"
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
  const hasPublicationLine = content.publicationLine.trim().length > 0;
  const hasContributionNotes = Boolean(content.contributionNotes?.length);
  const hasAcknowledgementLine = Boolean(content.acknowledgementLine?.trim());

  return (
    <section
      id="overview"
      className="border-b border-[var(--line)] px-0 pb-16 pt-10 sm:pb-18 sm:pt-14 lg:pb-20"
    >
      <Container>
        <div className="section-reveal mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="w-full space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <h1 className="text-balance text-[2.5rem] leading-[0.96] tracking-[-0.05em] text-[var(--foreground)] sm:text-[3.35rem] lg:text-[4rem]">
                {content.title}
              </h1>
              {content.subtitle ? (
                <p className="mx-auto max-w-3xl text-balance text-[0.96rem] leading-7 text-[var(--muted)] sm:text-[1.02rem] sm:leading-8">
                  {content.subtitle}
                </p>
              ) : null}
            </div>

            <div className="mx-auto max-w-4xl space-y-2.5">
              <p className="text-pretty text-[1rem] font-medium leading-7 text-[var(--muted-strong)] sm:text-[1.06rem]">
                {content.authorsLine}
              </p>

              {(hasPublicationLine || hasContributionNotes) && (
                <div className="space-y-1">
                  {hasPublicationLine ? (
                    <p className="text-[0.8rem] leading-6 text-[var(--muted)] sm:text-[0.86rem]">
                      {content.publicationLine}
                    </p>
                  ) : null}
                  {hasContributionNotes ? (
                    <p className="text-[0.7rem] leading-6 text-[var(--muted)]/90 sm:text-[0.75rem]">
                      {content.contributionNotes!.join(" · ")}
                    </p>
                  ) : null}
                </div>
              )}

              {hasAcknowledgementLine ? (
                <p className="mx-auto max-w-3xl text-[0.66rem] leading-6 text-[var(--muted)]/76 sm:text-[0.72rem]">
                  {content.acknowledgementLine}
                </p>
              ) : null}
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-2.5 pt-1 sm:gap-3">
              {content.actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  className="inline-flex min-w-[9.8rem] items-center justify-center gap-2.25 border border-[var(--line)] bg-white px-4.5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)] transition-colors duration-150 hover:border-[var(--line-strong)] hover:text-[var(--foreground)]"
                >
                  <HeroActionIcon label={action.label} />
                  <span>{action.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
