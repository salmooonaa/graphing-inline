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
      className="border-b border-[var(--line)] px-0 pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16"
    >
      <Container>
        <div className="section-reveal layout-masthead mx-auto flex flex-col items-center text-center">
          <div className="w-full space-y-4 sm:space-y-5">
            <div className="space-y-2.5">
              <h1 className="text-balance text-[2.2rem] leading-[0.97] tracking-[-0.045em] text-[var(--foreground)] sm:text-[2.95rem] lg:text-[3.45rem]">
                {content.title}
              </h1>
              {content.subtitle ? (
                <p className="layout-copy mx-auto text-balance text-[0.88rem] leading-6 text-[var(--muted)] sm:text-[0.96rem] sm:leading-7">
                  {content.subtitle}
                </p>
              ) : null}
            </div>

            <div className="layout-copy mx-auto space-y-2">
              <p className="text-pretty text-[0.94rem] font-medium leading-6 text-[var(--muted-strong)] sm:text-[1rem]">
                {content.authorsLine}
              </p>

              {(hasPublicationLine || hasContributionNotes) && (
                <div className="space-y-1">
                  {hasPublicationLine ? (
                    <p className="text-[0.74rem] leading-5 text-[var(--muted)] sm:text-[0.8rem]">
                      {content.publicationLine}
                    </p>
                  ) : null}
                  {hasContributionNotes ? (
                    <p className="text-[0.66rem] leading-5 text-[var(--muted)]/90 sm:text-[0.72rem]">
                      {content.contributionNotes!.join(" · ")}
                    </p>
                  ) : null}
                </div>
              )}

              {hasAcknowledgementLine ? (
                <p className="mx-auto max-w-3xl text-[0.64rem] leading-5 text-[var(--muted)]/76 sm:text-[0.7rem]">
                  {content.acknowledgementLine}
                </p>
              ) : null}
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-2 pt-0.5 sm:gap-2.5">
              {content.actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  className="inline-flex min-w-[9.15rem] items-center justify-center gap-2.25 border border-[var(--line)] bg-white px-4 py-2.25 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--muted-strong)] transition-colors duration-150 hover:border-[var(--line-strong)] hover:text-[var(--foreground)]"
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
