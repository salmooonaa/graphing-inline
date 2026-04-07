import type { FindingsContent } from "@/types/content";

import {
  AssociationFigure,
  QuantifiedFigure,
} from "@/components/blocks/findings-figure";
import { SectionIntro } from "@/components/blocks/section-intro";
import { Container } from "@/components/ui/container";

type FindingsSectionProps = {
  content: FindingsContent;
};

export function FindingsSection({ content }: FindingsSectionProps) {
  return (
    <section
      id="findings"
      className="scroll-mt-24 border-t border-[var(--line)] bg-[rgba(255,252,247,0.7)] py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
          <SectionIntro
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            accent={content.conclusion}
            className="lg:pr-8"
          />

          <div>
            <ol className="grid gap-6 lg:grid-cols-2">
              {content.items.map((item) => (
                <li
                  key={item.label}
                  className="border-t border-[var(--line-strong)] pt-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-8 text-slate-950">
                    {item.conclusion}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.explanation}
                  </p>
                  {item.evidence ? (
                    <p className="mt-3 border-l border-[var(--line)] pl-4 text-sm leading-7 text-slate-600">
                      {item.evidence}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              <QuantifiedFigure
                title={content.representationFigure.title}
                caption={content.representationFigure.caption}
                items={content.representationFigure.items}
              />
              <AssociationFigure
                title={content.associationFigure.title}
                caption={content.associationFigure.caption}
                pairs={content.associationFigure.pairs}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
