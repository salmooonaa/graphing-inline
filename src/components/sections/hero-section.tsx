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
  const hasStructuredAuthors = Boolean(content.authors?.length);

  return (
    <section className="border-b border-[var(--line)] px-0 pb-10 pt-7 sm:pb-12 sm:pt-8 lg:pb-14">
      <Container>
        <div id="overview" className="section-anchor">
          <div className="section-reveal layout-masthead mx-auto flex flex-col items-center text-center">
            <div className="w-full space-y-3.5 sm:space-y-4.5">
              <div className="space-y-2">
                <h1 className="text-balance text-[2.02rem] leading-[0.97] tracking-[-0.043em] text-[var(--foreground)] sm:text-[2.55rem] lg:text-[2.95rem]">
                  {content.title}
                </h1>
                {content.subtitle ? (
                  <p className="mx-auto max-w-full font-[var(--font-editorial)] text-[1rem] font-semibold leading-[1] tracking-[-0.04em] text-[var(--muted-strong)] sm:text-[1.18rem] md:whitespace-nowrap lg:text-[1.32rem]">
                    {content.subtitle}
                  </p>
                ) : null}
              </div>

              <div className="layout-copy mx-auto space-y-1.5">
                {hasStructuredAuthors ? (
                  <>
                    <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[0.84rem] font-medium leading-5 text-[var(--muted-strong)] lg:hidden">
                      {content.authors!.map((author) =>
                        author.href ? (
                          <a
                            key={`${author.name}-${author.href}-mobile`}
                            href={author.href}
                            target="_blank"
                            rel="noreferrer"
                            className="author-link inline-flex min-h-11 items-center px-1"
                          >
                            {author.name}
                          </a>
                        ) : (
                          <span
                            key={`${author.name}-mobile`}
                            className="inline-flex min-h-11 items-center px-1"
                          >
                            {author.name}
                          </span>
                        ),
                      )}
                    </div>

                    <p className="hidden text-pretty text-[0.88rem] font-medium leading-5.5 text-[var(--muted-strong)] lg:block lg:text-[0.95rem]">
                      {content.authors!.map((author, index) => {
                        const separator =
                          index < content.authors!.length - 1 ? ", " : "";

                        if (author.href) {
                          return (
                            <span key={`${author.name}-${author.href}`}>
                              <a
                                href={author.href}
                                target="_blank"
                                rel="noreferrer"
                                className="author-link"
                              >
                                {author.name}
                              </a>
                              {separator}
                            </span>
                          );
                        }

                        return (
                          <span key={author.name}>
                            {author.name}
                            {separator}
                          </span>
                        );
                      })}
                    </p>
                  </>
                ) : (
                  <p className="text-pretty text-[0.88rem] font-medium leading-5.5 text-[var(--muted-strong)] sm:text-[0.95rem]">
                    {content.authorsLine}
                  </p>
                )}

                {(hasPublicationLine || hasContributionNotes) && (
                  <div className="space-y-0.5">
                    {hasPublicationLine ? (
                      <p className="text-[0.68rem] leading-5 text-[var(--muted)] sm:text-[0.74rem]">
                        {content.publicationLine}
                      </p>
                    ) : null}
                    {hasContributionNotes ? (
                      <p className="text-[0.62rem] leading-5 text-[var(--muted)]/90 sm:text-[0.68rem]">
                        {content.contributionNotes!.join(" 路 ")}
                      </p>
                    ) : null}
                  </div>
                )}

                {hasAcknowledgementLine ? (
                  <p className="mx-auto max-w-3xl text-[0.62rem] leading-5 text-[var(--muted)]/76 sm:text-[0.66rem]">
                    {content.acknowledgementLine}
                  </p>
                ) : null}
              </div>

              <div className="flex w-full flex-wrap items-center justify-center gap-1.5 pt-0.5 sm:gap-2">
                {content.actions.map((action) => (
                  <a
                    key={`${action.label}-${action.href}`}
                    href={action.href}
                    className="inline-flex min-h-11 min-w-[7.3rem] items-center justify-center gap-2 border border-[var(--line)] bg-white px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--muted-strong)] transition-colors duration-150 hover:border-[var(--line-strong)] hover:text-[var(--foreground)] sm:min-w-[8.35rem] sm:px-3.5 sm:text-[0.64rem] lg:min-h-10"
                  >
                    <HeroActionIcon label={action.label} />
                    <span>{action.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
