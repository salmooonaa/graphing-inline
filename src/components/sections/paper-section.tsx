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
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="grid gap-0 border-y border-[var(--line)] md:grid-cols-3">
            {content.implications.map((item) => (
              <article
                key={item.title}
                className="border-b border-[var(--line)] py-5 md:border-b-0 md:px-5 md:py-7 md:[&:not(:first-child)]:border-l"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
            <div className="space-y-6 border border-[var(--line)] bg-white/80 p-6">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Paper access
                </p>
                <p className="text-sm leading-7 text-slate-700">
                  Read the paper for the full corpus construction, coding process,
                  statistics, and discussion. The homepage only keeps the thesis,
                  the reading lens, and the strongest findings.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={content.paperHref}
                  className="inline-flex items-center border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                >
                  Read Paper
                </a>
                <a
                  href={content.doiHref}
                  className="inline-flex items-center border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-950 hover:text-slate-950"
                >
                  View DOI
                </a>
                <a
                  href={content.bibtexDownloadHref}
                  className="inline-flex items-center border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-950 hover:text-slate-950"
                >
                  Download BibTeX
                </a>
              </div>

              <a
                href={content.contactHref}
                className="inline-flex text-sm leading-7 text-slate-600 underline decoration-[var(--line-strong)] underline-offset-4"
              >
                {content.contactLabel}
              </a>
            </div>

            <div className="border border-[var(--line)] bg-[var(--surface-strong)] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Citation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {content.citationText}
                  </p>
                </div>
                <CopyBibtexButton value={content.bibtex} />
              </div>

              <pre className="mt-5 overflow-x-auto border border-[var(--line)] bg-white p-5 text-xs leading-6 text-slate-700">
                <code>{content.bibtex}</code>
              </pre>
            </div>
          </div>

          <footer className="border-t border-[var(--line)] pt-5 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Graphing Inline project page · Website copy intentionally condensed
            for fast reading
          </footer>
        </div>
      </Container>
    </section>
  );
}
