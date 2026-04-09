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
    <section id="results" className="border-b border-[var(--line)] py-12 sm:py-14">
      <Container>
        <div className="mx-auto space-y-6 sm:space-y-7">
          <div className="section-reveal layout-copy mx-auto space-y-2.5">
            <p className="section-eyebrow">Results</p>
            <h2 className="text-[2.15rem] leading-[0.98] text-[var(--foreground)] sm:text-[2.55rem]">
              Results
            </h2>
            <p className="max-w-xl text-[0.92rem] leading-6 text-[var(--muted)] sm:text-[0.98rem] sm:leading-7">
              Where&#8211;why&#8211;how framework plus the strongest corpus
              findings.
            </p>
          </div>

          <dl className="section-reveal reveal-delay-1 layout-band mx-auto grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-5 sm:px-5 sm:py-6">
                <dt className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {stat.label}
                </dt>
                <dd className="mt-3 font-[var(--font-editorial)] text-[1.8rem] leading-none text-[var(--foreground)]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="section-reveal reveal-delay-2 layout-figure mx-auto space-y-2.5">
            <p className="section-eyebrow">{framework.eyebrow}</p>
            <FrameworkMap
              dimensions={framework.dimensions}
              title={framework.title}
              caption={framework.figureCaption}
            />
          </div>

          <div className="section-reveal reveal-delay-3 layout-figure mx-auto space-y-2.5">
            <p className="section-eyebrow">Takeaways</p>
            <ol className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
              {strongestFindings.map((item) => (
                <li key={item.label} className="bg-white px-4 py-5 sm:px-5 sm:py-6">
                  <p className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <h3 className="mt-3.5 text-[1.3rem] leading-tight text-[var(--foreground)]">
                    {item.conclusion}
                  </h3>
                  <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--muted)]">
                    {item.explanation}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-5">
            <div className="section-reveal reveal-delay-4 layout-figure mx-auto space-y-2.5">
              <p className="section-eyebrow">Distribution</p>
              <QuantifiedFigure
                title={findings.representationFigure.title}
                caption={findings.representationFigure.caption}
                items={findings.representationFigure.items}
              />
            </div>

            <div className="section-reveal reveal-delay-5 layout-figure mx-auto space-y-2.5">
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
