import type { CitationContent } from "@/types/content";

import { CopyBibtexButton } from "@/components/blocks/copy-bibtex-button";
import { Container } from "@/components/ui/container";

type CitationSectionProps = {
  content: CitationContent;
};

function BibtexCode({ value }: { value: string }) {
  const lines = value.split("\n");

  return (
    <code className="block min-w-max">
      {lines.map((line, index) => {
        const entryMatch = line.match(/^@([a-zA-Z]+)\{(.+)$/);

        if (entryMatch) {
          return (
            <div key={`${index}-${line}`} className="whitespace-pre">
              <span className="text-[#c43652]">@{entryMatch[1]}</span>
              <span className="text-[#c28a18]">{`{${entryMatch[2]}`}</span>
            </div>
          );
        }

        const fieldMatch = line.match(/^(\s*)([a-zA-Z]+)(\s*=\s*\{)(.*)(\},?)$/);

        if (fieldMatch) {
          return (
            <div key={`${index}-${line}`} className="whitespace-pre">
              <span className="text-[var(--muted)]">{fieldMatch[1]}</span>
              <span className="text-[#c43652]">{fieldMatch[2]}</span>
              <span className="text-[var(--muted)]">{fieldMatch[3]}</span>
              <span className="text-[#5d8f16]">{fieldMatch[4]}</span>
              <span className="text-[var(--muted)]">{fieldMatch[5]}</span>
            </div>
          );
        }

        return (
          <div key={`${index}-${line}`} className="whitespace-pre text-[var(--muted)]">
            {line}
          </div>
        );
      })}
    </code>
  );
}

export function CitationSection({ content }: CitationSectionProps) {
  return (
    <section id="bibtex" className="py-10 sm:py-12">
      <Container>
        <div className="mx-auto space-y-4 sm:space-y-5">
          <div className="section-reveal layout-copy mx-auto space-y-3">
            <h2 className="text-[1.8rem] leading-[0.98] tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.1rem]">
              {content.title}
            </h2>
            <div className="h-px w-full bg-[var(--line)]" />
          </div>

          <div className="section-reveal reveal-delay-1 layout-utility mx-auto rounded-[0.95rem] border border-[var(--line)] bg-white px-3.5 py-3.5 sm:px-4 sm:py-4">
            <div className="flex flex-wrap items-center justify-end gap-1.5 pb-3 sm:pb-3.5">
              {content.bibtexDownloadHref ? (
                <a
                  href={content.bibtexDownloadHref}
                  className="inline-flex min-h-9 items-center justify-center rounded-[0.5rem] border border-[rgba(23,19,15,0.1)] bg-white px-3 py-1.75 text-[0.66rem] font-medium text-[var(--muted-strong)] transition-colors duration-150 hover:border-[rgba(23,19,15,0.18)] hover:text-[var(--foreground)]"
                >
                  Download .bib
                </a>
              ) : null}
              <CopyBibtexButton value={content.bibtex} />
            </div>

            <pre className="overflow-x-auto overflow-y-hidden rounded-[0.75rem] bg-[#f7f6f4] px-2.5 py-2.5 text-[0.78rem] leading-[1.72] text-[var(--muted-strong)] sm:px-3 sm:py-3 sm:text-[0.82rem]">
              <BibtexCode value={content.bibtex} />
            </pre>
          </div>

          <div className="section-reveal reveal-delay-2 layout-copy mx-auto space-y-1">
            <p className="section-eyebrow">Citation</p>
            <p className="text-[0.72rem] leading-5 text-[var(--muted)] sm:text-[0.76rem] sm:leading-5.5">
              {content.citationText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
