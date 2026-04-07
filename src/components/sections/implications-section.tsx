import type { ImplicationsContent } from "@/types/content";

import { ImplicationsFlow } from "@/components/blocks/implications-flow";
import { SectionIntro } from "@/components/blocks/section-intro";
import { Container } from "@/components/ui/container";

type ImplicationsSectionProps = {
  content: ImplicationsContent;
};

export function ImplicationsSection({ content }: ImplicationsSectionProps) {
  return (
    <section
      id="implications"
      className="scroll-mt-24 border-t border-[var(--line)] py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.64fr_1.36fr]">
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            accent={content.conclusion}
            className="lg:pr-8"
          />

          <div className="space-y-6">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="border-t border-[var(--line-strong)] pt-4"
              >
                <h3 className="text-2xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-900">
                  {item.conclusion}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.explanation}
                </p>
                <p className="mt-3 border-l border-[var(--line)] pl-4 text-sm leading-7 text-slate-600">
                  {item.support}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <ImplicationsFlow figure={content.figure} />
        </div>
      </Container>
    </section>
  );
}
