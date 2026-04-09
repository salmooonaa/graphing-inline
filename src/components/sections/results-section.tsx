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
    <section id="results" className="border-b border-[var(--line)] py-10 sm:py-12">
      <Container>
        <div className="layout-module mx-auto space-y-5 sm:space-y-6">
          <div className="section-reveal layout-copy space-y-2">
            <p className="section-eyebrow">Results</p>
            <h2 className="text-[1.9rem] leading-[1] text-[var(--foreground)] sm:text-[2.25rem]">
              Results
            </h2>
            <p className="max-w-lg text-[0.86rem] leading-5.5 text-[var(--muted)] sm:text-[0.92rem] sm:leading-6.5">
              Where&#8211;why&#8211;how framework plus the strongest corpus
              findings.
            </p>
          </div>

          <dl className="section-reveal reveal-delay-1 layout-band grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-4.5 sm:px-4.5 sm:py-5">
                <dt className="font-[var(--font-data)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {stat.label}
                </dt>
                <dd className="mt-2.5 font-[var(--font-editorial)] text-[1.55rem] leading-none text-[var(--foreground)]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="section-reveal reveal-delay-2 layout-band space-y-2">
            <p className="section-eyebrow">{framework.eyebrow}</p>
            <FrameworkMap
              dimensions={framework.dimensions}
              title={framework.title}
              caption={framework.figureCaption}
            />
          </div>

          <div className="section-reveal reveal-delay-3 layout-band space-y-2">
            <p className="section-eyebrow">Takeaways</p>
            <ol className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
              {strongestFindings.map((item) => (
                <li key={item.label} className="bg-white px-4 py-4.5 sm:px-4.5 sm:py-5">
                  <p className="font-[var(--font-data)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-[1.14rem] leading-tight text-[var(--foreground)]">
                    {item.conclusion}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-5.5 text-[var(--muted)]">
                    {item.explanation}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4">
            <div className="section-reveal reveal-delay-4 layout-band space-y-2">
              <p className="section-eyebrow">Distribution</p>
              <QuantifiedFigure
                title={findings.representationFigure.title}
                caption={findings.representationFigure.caption}
                items={findings.representationFigure.items}
              />
            </div>

            <div className="section-reveal reveal-delay-5 layout-band space-y-2">
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
