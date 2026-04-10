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
    <section className="section-anchor-endcap py-10 sm:py-12">
      <Container>
        <div className="layout-module mx-auto space-y-5 sm:space-y-6">
          <div id="bibtex" className="section-reveal module-header section-anchor">
            <div className="module-header-row">
              <div className="layout-copy min-w-0">
                <h2 className="text-[1.9rem] leading-[1] text-[var(--foreground)] sm:text-[2.25rem]">
                  {content.title}
                </h2>
              </div>
              <div aria-hidden="true" className="module-divider" />
            </div>
          </div>

          <div className="section-reveal reveal-delay-1 w-full rounded-[0.95rem] border border-[var(--line)] bg-white px-3.5 py-3.5 sm:px-4 sm:py-4">
            <div className="flex flex-wrap items-center justify-start gap-1.5 pb-3 sm:pb-3.5">
              {content.bibtexDownloadHref ? (
                <a
                  href={content.bibtexDownloadHref}
                  download
                  className="inline-flex min-h-9 items-center justify-center gap-2 rounded-[0.5rem] border border-[rgba(23,19,15,0.1)] bg-white px-3 py-1.75 text-[0.68rem] font-medium text-[var(--muted-strong)] transition-colors duration-150 hover:border-[rgba(23,19,15,0.18)] hover:text-[var(--foreground)]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4.75v10.5" />
                    <path d="M7.75 11.25L12 15.25l4.25-4" />
                    <path d="M4.75 19.25h14.5" />
                  </svg>
                  <span>Download</span>
                </a>
              ) : null}
              <CopyBibtexButton value={content.bibtex} />
            </div>

            <pre className="overflow-x-auto overflow-y-hidden rounded-[0.75rem] bg-[#f7f6f4] px-2.5 py-2.5 text-[0.78rem] leading-[1.72] text-[var(--muted-strong)] sm:px-3 sm:py-3 sm:text-[0.82rem]">
              <BibtexCode value={content.bibtex} />
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}
