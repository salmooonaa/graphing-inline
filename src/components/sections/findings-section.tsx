import type { FindingsContent } from "@/types/content";

import {
  AssociationFigure,
  QuantifiedFigure,
} from "@/components/blocks/findings-figure";
import { Container } from "@/components/ui/container";

type FindingsSectionProps = {
  content: FindingsContent;
};

export function FindingsSection({ content }: FindingsSectionProps) {
  return (
    <section
      id="findings"
      className="scroll-mt-24 border-t border-slate-200/80 bg-white/60 py-16 sm:py-20"
    >
      <Container>
        <div className="max-w-3xl space-y-4">
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

        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {content.items.map((item) => (
            <li key={item.label} className="border-t border-slate-900 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                {item.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-8 text-slate-950">
                {item.conclusion}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {item.explanation}
              </p>
              {item.evidence ? (
                <p className="mt-3 border-l border-slate-300 pl-4 text-sm leading-7 text-slate-600">
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
      </Container>
    </section>
  );
}
