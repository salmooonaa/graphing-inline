import type { SummaryContent } from "@/types/content";

import { KeyPointsGrid } from "@/components/blocks/key-points-grid";
import { SectionShell } from "@/components/ui/section-shell";

type SummarySectionProps = {
  content: SummaryContent;
};

export function SummarySection({ content }: SummarySectionProps) {
  return (
    <SectionShell
      id="summary"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <KeyPointsGrid items={content.points} />
    </SectionShell>
  );
}
