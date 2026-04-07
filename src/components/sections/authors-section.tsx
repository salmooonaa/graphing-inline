import type { AuthorsContent } from "@/types/content";

import { DetailList } from "@/components/blocks/detail-list";
import { SectionShell } from "@/components/ui/section-shell";

type AuthorsSectionProps = {
  content: AuthorsContent;
};

export function AuthorsSection({ content }: AuthorsSectionProps) {
  return (
    <SectionShell
      id="authors"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <DetailList items={content.items} />
    </SectionShell>
  );
}
