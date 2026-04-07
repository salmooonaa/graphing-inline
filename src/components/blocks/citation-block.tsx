type CitationBlockProps = {
  citationText: string;
  bibtex: string;
};

export function CitationBlock({ citationText, bibtex }: CitationBlockProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-950">Citation text</h3>
        <p className="mt-4 text-sm leading-7 text-slate-700">{citationText}</p>
      </article>
      <article className="rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-white">BibTeX placeholder</h3>
        <pre className="mt-4 overflow-x-auto text-sm leading-7 text-slate-200">
          <code>{bibtex}</code>
        </pre>
      </article>
    </div>
  );
}
