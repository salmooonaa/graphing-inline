import type { FrameworkContent } from "@/types/content";

import { FrameworkMap } from "@/components/blocks/framework-map";
import { Container } from "@/components/ui/container";

type FrameworkSectionProps = {
  content: FrameworkContent;
};

export function FrameworkSection({ content }: FrameworkSectionProps) {
  return (
    <section
      id="framework"
      className="scroll-mt-24 border-t border-slate-200/80 py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {content.title}
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              {content.description}
            </p>
            <p className="border-l border-slate-300 pl-4 text-sm leading-7 text-slate-600">
              {content.conclusion}
            </p>
          </div>

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
