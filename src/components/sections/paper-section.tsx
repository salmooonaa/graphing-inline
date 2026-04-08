import type { PaperSectionContent } from "@/types/content";

import { CopyBibtexButton } from "@/components/blocks/copy-bibtex-button";
import { Container } from "@/components/ui/container";

type PaperSectionProps = {
  content: PaperSectionContent;
};

export function PaperSection({ content }: PaperSectionProps) {
  return (
    <section id="paper" className="py-18 sm:py-20">
      <Container>
        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1.42fr)] lg:items-end">
            <div className="section-reveal space-y-4">
              <p className="section-eyebrow">{content.eyebrow}</p>
              <h2 className="max-w-[12ch] text-4xl leading-[0.98] text-[var(--foreground)] sm:text-[3rem]">
                {content.title}
              </h2>
            </div>

            <p className="section-reveal reveal-delay-1 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="section-reveal reveal-delay-1 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {content.implications.map((item) => (
              <article
                key={item.title}
                className="bg-[var(--surface-strong)] px-5 py-5 md:px-6 md:py-6"
              >
                <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:items-stretch">
            <div className="section-reveal reveal-delay-2 bg-[var(--surface-strong)] p-6 sm:p-7">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="section-eyebrow">Paper utility</p>
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    Read the full paper for corpus construction, coding details,
                    and statistics. The homepage deliberately stops at the thesis,
                    the reading lens, and the three strongest findings.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={content.paperHref}
                    className="inline-flex items-center border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:rgba(23,19,15,0.88)]"
                  >
                    Read Paper
                  </a>
                  <a
                    href={content.doiHref}
                    className="inline-flex items-center border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-medium text-[var(--muted-strong)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  >
                    View DOI
                  </a>
                  <a
                    href={content.bibtexDownloadHref}
                    className="inline-flex items-center border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-medium text-[var(--muted-strong)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  >
                    Download BibTeX
                  </a>
                </div>

                <dl className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
                  <div className="bg-white/80 px-5 py-5">
                    <dt className="section-eyebrow">Authors</dt>
                    <dd className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {content.authorsLine}
                    </dd>
                  </div>
                  <div className="bg-white/80 px-5 py-5">
                    <dt className="section-eyebrow">Contact</dt>
                    <dd className="mt-3">
                      <a
                        href={content.contactHref}
                        className="text-sm leading-7 text-[var(--muted)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--foreground)]"
                      >
                        {content.contactLabel}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="grid gap-px bg-[var(--line)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div className="section-reveal reveal-delay-2 bg-[var(--surface-strong)] p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="section-eyebrow">Citation</p>
                  <CopyBibtexButton value={content.bibtex} />
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {content.citationText}
                </p>
              </div>

              <div className="section-reveal reveal-delay-3 bg-[rgba(247,241,231,0.95)] p-6 sm:p-7">
                <p className="section-eyebrow">BibTeX</p>
                <pre className="mt-4 overflow-x-auto border border-[var(--line)] bg-white/82 p-5 text-xs leading-6 text-[var(--muted-strong)]">
                  <code>{content.bibtex}</code>
                </pre>
              </div>
            </div>
          </div>

          <footer className="section-reveal reveal-delay-3 border-t border-[var(--line)] pt-5 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">
            Graphing Inline project page · Homepage intentionally condensed for
            thesis-first reading
          </footer>
        </div>
      </Container>
    </section>
  );
}
