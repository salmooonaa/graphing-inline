import type { CitationContent } from "@/types/content";

import { CopyBibtexButton } from "@/components/blocks/copy-bibtex-button";
import { Container } from "@/components/ui/container";

type CitationSectionProps = {
  content: CitationContent;
};

export function CitationSection({ content }: CitationSectionProps) {
  return (
    <section id="bibtex" className="py-16 sm:py-18">
      <Container>
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10">
          <div className="section-reveal space-y-3">
            <p className="section-eyebrow">{content.eyebrow}</p>
            <h2 className="text-4xl leading-[0.98] text-[var(--foreground)] sm:text-[3rem]">
              {content.title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {content.description}
            </p>
          </div>

          <div className="section-reveal reveal-delay-1 space-y-6 border border-[var(--line)] bg-white p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-3xl space-y-3">
                <p className="section-eyebrow">Citation</p>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  {content.citationText}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {content.bibtexDownloadHref ? (
                  <a
                    href={content.bibtexDownloadHref}
                    className="inline-flex items-center border border-[var(--line)] bg-white px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  >
                    Download .bib
                  </a>
                ) : null}
                <CopyBibtexButton value={content.bibtex} />
              </div>
            </div>

            <div className="space-y-3">
              <p className="section-eyebrow">BibTeX</p>
              <pre className="overflow-x-auto border border-[var(--line)] bg-white p-5 text-xs leading-6 text-[var(--muted-strong)]">
                <code>{content.bibtex}</code>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
