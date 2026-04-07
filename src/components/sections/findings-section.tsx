import type { FindingsContent } from "@/types/content";

import { KeyPointsGrid } from "@/components/blocks/key-points-grid";
import { SectionShell } from "@/components/ui/section-shell";

type FindingsSectionProps = {
  content: FindingsContent;
};

export function FindingsSection({ content }: FindingsSectionProps) {
  return (
    <SectionShell
      id="findings"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <KeyPointsGrid items={content.items} />
    </SectionShell>
  );
}
