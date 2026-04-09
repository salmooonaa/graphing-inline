import type {
  FindingsContent,
  FrameworkContent,
  PageStat,
} from "@/types/content";

import { FrameworkMap } from "@/components/blocks/framework-map";
import {
  AssociationFigure,
  QuantifiedFigure,
} from "@/components/blocks/findings-figure";
import { Container } from "@/components/ui/container";

type ResultsSectionProps = {
  framework: FrameworkContent;
  findings: FindingsContent;
  stats: PageStat[];
};

export function ResultsSection({
  framework,
  findings,
  stats,
}: ResultsSectionProps) {
  const strongestFindings = findings.items.slice(0, 3);

  return (
    <section id="results" className="border-b border-[var(--line)] py-16 sm:py-18">
      <Container>
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
          <div className="section-reveal space-y-3">
            <p className="section-eyebrow">Results</p>
            <h2 className="text-4xl leading-[0.98] text-[var(--foreground)] sm:text-[3rem]">
              Results
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Where&#8211;why&#8211;how framework plus the strongest corpus
              findings.
            </p>
          </div>

          <dl className="section-reveal reveal-delay-1 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-5 py-6 sm:px-6 sm:py-7">
                <dt className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {stat.label}
                </dt>
                <dd className="mt-4 font-[var(--font-editorial)] text-[2.1rem] leading-none text-[var(--foreground)]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="section-reveal reveal-delay-2 space-y-3">
            <p className="section-eyebrow">{framework.eyebrow}</p>
            <FrameworkMap
              dimensions={framework.dimensions}
              title={framework.title}
              caption={framework.figureCaption}
            />
          </div>

          <div className="section-reveal reveal-delay-3 space-y-3">
            <p className="section-eyebrow">Takeaways</p>
            <ol className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
              {strongestFindings.map((item) => (
                <li key={item.label} className="bg-white px-5 py-6 sm:px-6 sm:py-7">
                  <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-[1.5rem] leading-tight text-[var(--foreground)]">
                    {item.conclusion}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.explanation}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="section-reveal reveal-delay-4 space-y-3">
              <p className="section-eyebrow">Distribution</p>
              <QuantifiedFigure
                title={findings.representationFigure.title}
                caption={findings.representationFigure.caption}
                items={findings.representationFigure.items}
              />
            </div>

            <div className="section-reveal reveal-delay-5 space-y-3">
              <p className="section-eyebrow">Associations</p>
              <AssociationFigure
                title={findings.associationFigure.title}
                caption={findings.associationFigure.caption}
                pairs={findings.associationFigure.pairs}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
