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
    <section id="bibtex" className="py-16 sm:py-18">
      <Container>
        <div className="mx-auto max-w-7xl space-y-7 sm:space-y-8">
          <div className="section-reveal space-y-5">
            <h2 className="text-[2.7rem] leading-[0.92] tracking-[-0.05em] text-[var(--foreground)] sm:text-[3.4rem]">
              {content.title}
            </h2>
            <div className="h-px w-full bg-[var(--line)]" />
          </div>

          <div className="section-reveal reveal-delay-1 mx-auto max-w-[78rem] rounded-[1.35rem] bg-[#f6f3ef] px-4 py-4 sm:px-7 sm:py-6">
            <div className="flex flex-wrap items-center justify-end gap-2 pb-4 sm:pb-5">
              {content.bibtexDownloadHref ? (
                <a
                  href={content.bibtexDownloadHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-[0.6rem] border border-[rgba(23,19,15,0.1)] bg-white px-4 py-2.5 text-[0.76rem] font-medium text-[var(--muted-strong)] transition-colors duration-150 hover:border-[rgba(23,19,15,0.2)] hover:text-[var(--foreground)]"
                >
                  Download .bib
                </a>
              ) : null}
              <CopyBibtexButton value={content.bibtex} />
            </div>

            <pre className="max-h-[34rem] overflow-auto rounded-[1rem] bg-[#f6f3ef] px-4 pb-4 text-[1.02rem] leading-[2.02] text-[var(--muted-strong)] sm:px-5 sm:pb-5 sm:text-[1.08rem]">
              <BibtexCode value={content.bibtex} />
            </pre>
          </div>

          <div className="section-reveal reveal-delay-2 mx-auto max-w-4xl space-y-2">
            <p className="section-eyebrow">Citation</p>
            <p className="text-[0.82rem] leading-6 text-[var(--muted)] sm:text-[0.86rem]">
              {content.citationText}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
