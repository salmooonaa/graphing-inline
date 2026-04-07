import { CopyBibtexButton } from "@/components/blocks/copy-bibtex-button";

type CitationBlockProps = {
  citationText: string;
  bibtex: string;
  bibtexDownloadHref?: string;
};

export function CitationBlock({
  citationText,
  bibtex,
  bibtexDownloadHref,
}: CitationBlockProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <article className="border-t border-slate-300 bg-white pt-5">
        <h3 className="text-xl font-semibold text-slate-950">Citation</h3>
        <p className="mt-4 text-sm leading-7 text-slate-700">{citationText}</p>
      </article>

      <article className="border-t border-slate-300 bg-white pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-950">BibTeX</h3>
          <div className="flex flex-wrap gap-2">
            {bibtexDownloadHref ? (
              <a
                href={bibtexDownloadHref}
                className="inline-flex items-center border border-slate-300 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-700 transition-colors hover:border-slate-950 hover:text-slate-950"
              >
                Download .bib
              </a>
            ) : null}
            <CopyBibtexButton value={bibtex} />
          </div>
        </div>

        <pre className="mt-4 overflow-x-auto bg-slate-950 p-5 text-sm leading-7 text-slate-200">
          <code>{bibtex}</code>
        </pre>
      </article>
    </div>
  );
}
