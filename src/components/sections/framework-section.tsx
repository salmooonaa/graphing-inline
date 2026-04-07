import type { FrameworkContent } from "@/types/content";

import { FrameworkMap } from "@/components/blocks/framework-map";
import { SectionIntro } from "@/components/blocks/section-intro";
import { Container } from "@/components/ui/container";

type FrameworkSectionProps = {
  content: FrameworkContent;
};

export function FrameworkSection({ content }: FrameworkSectionProps) {
  return (
    <section
      id="framework"
      className="scroll-mt-24 border-t border-[var(--line)] py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            accent={content.conclusion}
            className="lg:pr-8"
          />

          <FrameworkMap
            dimensions={content.dimensions}
            title="Framework figure"
            caption={content.figureCaption}
          />
        </div>
      </Container>
    </section>
  );
}
