import type { HomeContent } from "@/types/content";

import { DetailList } from "@/components/blocks/detail-list";
import { SectionShell } from "@/components/ui/section-shell";

type MethodSectionProps = {
  content: HomeContent["method"];
};

export function MethodSection({ content }: MethodSectionProps) {
  return (
    <SectionShell
      id="method"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <DetailList items={content.phases} />
    </SectionShell>
  );
}
