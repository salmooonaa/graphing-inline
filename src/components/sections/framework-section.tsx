import type { HomeContent } from "@/types/content";

import { KeyPointsGrid } from "@/components/blocks/key-points-grid";
import { SectionShell } from "@/components/ui/section-shell";

type FrameworkSectionProps = {
  content: HomeContent["framework"];
};

export function FrameworkSection({ content }: FrameworkSectionProps) {
  return (
    <SectionShell
      id="framework"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <KeyPointsGrid items={content.dimensions} />
    </SectionShell>
  );
}
