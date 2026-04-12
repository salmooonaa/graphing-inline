import type { ResultsContent } from "@/types/content";

import { ResultsBoard } from "@/components/blocks/results-board";
import { Container } from "@/components/ui/container";

type ResultsSectionProps = {
  content: ResultsContent;
};

export function ResultsSection({ content }: ResultsSectionProps) {
  return (
    <section className="border-b border-[var(--line)] py-10 sm:py-12">
      <Container>
        <div id="results" className="section-anchor layout-module mx-auto">
          <ResultsBoard content={content} />
        </div>
      </Container>
    </section>
  );
}
