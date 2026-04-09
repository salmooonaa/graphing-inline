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
    <section id="bibtex" className="py-12 sm:py-14">
      <Container>
        <div className="mx-auto space-y-5 sm:space-y-6">
          <div className="section-reveal layout-copy mx-auto space-y-4">
            <h2 className="text-[2.2rem] leading-[0.94] tracking-[-0.045em] text-[var(--foreground)] sm:text-[2.7rem]">
              {content.title}
            </h2>
            <div className="h-px w-full bg-[var(--line)]" />
          </div>

          <div className="section-reveal reveal-delay-1 layout-figure mx-auto rounded-[1.15rem] bg-[#f6f3ef] px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-3.5 sm:pb-4">
              {content.bibtexDownloadHref ? (
                <a
                  href={content.bibtexDownloadHref}
                  className="inline-flex min-h-10 items-center justify-center rounded-[0.55rem] border border-[rgba(23,19,15,0.1)] bg-white px-3.5 py-2 text-[0.72rem] font-medium text-[var(--muted-strong)] transition-colors duration-150 hover:border-[rgba(23,19,15,0.2)] hover:text-[var(--foreground)]"
                >
                  Download .bib
                </a>
              ) : null}
              <CopyBibtexButton value={content.bibtex} />
            </div>

            <pre className="max-h-[24rem] overflow-auto rounded-[0.95rem] bg-[#f6f3ef] px-2 pb-2 text-[0.86rem] leading-[1.78] text-[var(--muted-strong)] sm:px-3 sm:pb-3 sm:text-[0.92rem]">
              <BibtexCode value={content.bibtex} />
            </pre>
          </div>

          <div className="section-reveal reveal-delay-2 layout-copy mx-auto space-y-1.5">
            <p className="section-eyebrow">Citation</p>
            <p className="text-[0.78rem] leading-5 text-[var(--muted)] sm:text-[0.82rem] sm:leading-6">
              {content.citationText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
