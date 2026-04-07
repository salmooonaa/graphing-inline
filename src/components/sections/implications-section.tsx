import type { ImplicationsContent } from "@/types/content";

import { ImplicationsFlow } from "@/components/blocks/implications-flow";
import { Container } from "@/components/ui/container";

type ImplicationsSectionProps = {
  content: ImplicationsContent;
};

export function ImplicationsSection({ content }: ImplicationsSectionProps) {
  return (
    <section
      id="implications"
      className="scroll-mt-24 border-t border-slate-200/80 py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
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

          <div className="space-y-6">
            {content.items.map((item) => (
              <article key={item.title} className="border-t border-slate-900 pt-4">
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-900">
                  {item.conclusion}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.explanation}
                </p>
                <p className="mt-3 border-l border-slate-300 pl-4 text-sm leading-7 text-slate-600">
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
