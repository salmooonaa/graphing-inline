import type { HomeContent } from "@/types/content";

import { KeyPointsGrid } from "@/components/blocks/key-points-grid";
import { SectionShell } from "@/components/ui/section-shell";

type ProblemSectionProps = {
  content: HomeContent["problem"];
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <SectionShell
      id="problem"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <KeyPointsGrid items={content.points} />
    </SectionShell>
  );
}
