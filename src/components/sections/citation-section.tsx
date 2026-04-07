import type { CitationContent } from "@/types/content";

import { CitationBlock } from "@/components/blocks/citation-block";
import { SectionShell } from "@/components/ui/section-shell";

type CitationSectionProps = {
  content: CitationContent;
};

export function CitationSection({ content }: CitationSectionProps) {
  return (
    <SectionShell
      id="citation"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <CitationBlock
        citationText={content.citationText}
        bibtex={content.bibtex}
      />
    </SectionShell>
  );
}
