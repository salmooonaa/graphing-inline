import type { HomeContent } from "@/types/content";

import { KeyPointsGrid } from "@/components/blocks/key-points-grid";
import { SectionShell } from "@/components/ui/section-shell";

type ImplicationsSectionProps = {
  content: HomeContent["implications"];
};

export function ImplicationsSection({ content }: ImplicationsSectionProps) {
  return (
    <SectionShell
      id="implications"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <KeyPointsGrid items={content.items} />
    </SectionShell>
  );
}
