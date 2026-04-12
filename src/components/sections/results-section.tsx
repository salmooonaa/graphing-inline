"use client";

import { useState } from "react";

import type { ResultsContent } from "@/types/content";

import { ResultsDistributions } from "@/components/blocks/results-distributions";
import { ResultsExplorer } from "@/components/blocks/results-explorer";
import { ResultsPatterns } from "@/components/blocks/results-patterns";
import {
  buildItemLookup,
  getPanelContent,
  getRelatedStrengths,
  sameFocus,
  type FocusTarget,
} from "@/components/blocks/results-shared";
import { ModuleHeader } from "@/components/blocks/results-ui";
import { Container } from "@/components/ui/container";

type ResultsSectionProps = {
  content: ResultsContent;
};

export function ResultsSection({ content }: ResultsSectionProps) {
  const [hoveredFocus, setHoveredFocus] = useState<FocusTarget | null>(null);
  const [pinnedFocus, setPinnedFocus] = useState<FocusTarget | null>(null);
  const itemLookup = new Map(buildItemLookup(content.explorer.dimensions));
  const activeFocus = pinnedFocus ?? hoveredFocus;
  const relatedStrengths = getRelatedStrengths(
    activeFocus,
    content.explorer.connections,
    content.dominantPatterns.items,
  );
  const highlightedItemIds = new Set(relatedStrengths.keys());
  const panel = getPanelContent(
    content,
    activeFocus,
    itemLookup,
    content.explorer.connections,
    content.dominantPatterns.items,
  );

  const handleToggleFocus = (nextFocus: FocusTarget) => {
    setPinnedFocus((current) => (sameFocus(current, nextFocus) ? null : nextFocus));
  };

  const handleHover = (nextFocus: FocusTarget) => {
    setHoveredFocus(nextFocus);
  };

  const handleLeave = () => {
    setHoveredFocus(null);
  };

  return (
    <section className="border-b border-[var(--line)] py-10 sm:py-12">
      <Container>
        <div className="mx-auto max-w-[58rem] space-y-7 sm:space-y-8">
          <div id="results" className="section-anchor">
            <div className="section-reveal module-header">
              <div className="module-header-row">
                <div className="layout-copy min-w-0">
                  <h2 className="text-[1.9rem] leading-[1] text-[var(--foreground)] sm:text-[2.25rem]">
                    {content.title}
                  </h2>
                </div>
                <div aria-hidden="true" className="module-divider" />
              </div>
              <p className="layout-copy max-w-lg text-[0.86rem] leading-5.5 text-[var(--muted)] sm:text-[0.92rem] sm:leading-6.5">
                {content.description}
              </p>
            </div>
          </div>

          <section className="section-reveal reveal-delay-1 space-y-3">
            <ModuleHeader
              eyebrow="A. Key Findings Strip"
              title="Top findings first"
              description="The result section opens with the three signals readers should retain before exploring the structure behind them."
            />

            <ol className="grid gap-px overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
              {content.keyFindings.map((item) => (
                <li
                  key={item.id}
                  className="bg-white px-4 py-4.5 sm:px-5 sm:py-5"
                >
                  <div className="flex items-end justify-between gap-4">
                    <p className="font-[var(--font-data)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                      {item.title}
                    </p>
                    <p className="font-[var(--font-data)] text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {item.metric}
                    </p>
                  </div>
                  <p className="mt-3 text-[1.1rem] leading-tight text-[var(--foreground)] sm:text-[1.18rem]">
                    {item.summary}
                  </p>
                  <p className="mt-2 text-[0.77rem] leading-5 text-[var(--muted)]">
                    {item.evidence}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="section-reveal reveal-delay-2 space-y-3">
            <ModuleHeader
              eyebrow="B. Interactive Where-Why-How Explorer"
              title="Explore the relationship structure"
              description="Hover to preview a relationship, click to lock focus, and use the contextual panel to keep definitions and evidence out of the first reading layer."
            />
            <ResultsExplorer
              content={content}
              itemLookup={itemLookup}
              activeFocus={activeFocus}
              pinnedFocus={pinnedFocus}
              relatedStrengths={relatedStrengths}
              panel={panel}
              onHover={handleHover}
              onLeave={handleLeave}
              onToggleFocus={handleToggleFocus}
              onClearFocus={() => setPinnedFocus(null)}
            />
          </section>

          <section className="section-reveal reveal-delay-3 space-y-3">
            <ModuleHeader
              eyebrow="C. Dominant Patterns"
              title={content.dominantPatterns.title}
              description={content.dominantPatterns.summary}
            />
            <ResultsPatterns
              content={content}
              itemLookup={itemLookup}
              activeFocus={activeFocus}
              pinnedFocus={pinnedFocus}
              onHover={handleHover}
              onLeave={handleLeave}
              onToggleFocus={handleToggleFocus}
            />
          </section>

          <section className="section-reveal reveal-delay-4 space-y-3">
            <ModuleHeader
              eyebrow="D. Evidence by Dimension"
              title={content.distributions.title}
              description={content.distributions.summary}
            />
            <ResultsDistributions
              content={content}
              itemLookup={itemLookup}
              activeFocus={activeFocus}
              pinnedFocus={pinnedFocus}
              highlightedItemIds={highlightedItemIds}
              onHover={handleHover}
              onLeave={handleLeave}
              onToggleFocus={handleToggleFocus}
            />
          </section>

          <section className="section-reveal reveal-delay-5 space-y-3">
            <ModuleHeader
              eyebrow="E. Statistical Evidence / Detail Layer"
              title={content.evidence.title}
              description={content.evidence.summary}
            />

            <details className="group rounded-[1.35rem] border border-[var(--line)] bg-white p-4 sm:p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[var(--foreground)]">
                    Open the detail layer
                  </p>
                  <p className="text-[0.74rem] leading-5 text-[var(--muted)]">
                    Pairwise tests, relation summaries, and corpus note.
                  </p>
                </div>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)] transition-transform duration-150 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-4 space-y-4">
                <div className="grid gap-2.5 lg:grid-cols-3">
                  {content.evidence.pairs.map((pair) => (
                    <article
                      key={pair.id}
                      className="rounded-[1.05rem] border border-[var(--line)] px-3.5 py-3"
                    >
                      <p className="section-eyebrow">{pair.label}</p>
                      <p className="mt-2 text-[0.86rem] leading-5.5 text-[var(--foreground)]">
                        {pair.summary}
                      </p>
                      <p className="mt-2 text-[0.72rem] leading-5 text-[var(--muted)]">
                        {pair.detail}
                      </p>
                      <p className="mt-3 font-[var(--font-data)] text-[0.68rem] text-[var(--muted)]">
                        {pair.statistic}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="grid gap-2">
                  {content.evidence.notes.map((note) => (
                    <div
                      key={note}
                      className="rounded-[0.95rem] border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-2 text-[0.74rem] leading-5 text-[var(--muted)]"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </section>
        </div>
      </Container>
    </section>
  );
}
