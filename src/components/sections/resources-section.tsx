import type { HomeContent } from "@/types/content";

import { ResourceGrid } from "@/components/blocks/resource-grid";
import { SectionShell } from "@/components/ui/section-shell";

type ResourcesSectionProps = {
  content: HomeContent["resources"];
};

export function ResourcesSection({ content }: ResourcesSectionProps) {
  return (
    <SectionShell
      id="resources"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <ResourceGrid items={content.items} />
    </SectionShell>
  );
}
