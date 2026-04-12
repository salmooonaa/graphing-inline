"use client";

import { useState } from "react";

import type { ResultsContent } from "@/types/content";

import {
  buildNodeLookup,
  dimensionTheme,
  getPanelContent,
  getRelatedStrengths,
  sameFocus,
  type BoardNodeMeta,
  type FocusTarget,
} from "@/components/blocks/results-shared";
import { cn } from "@/lib/utils";

function BoardBadge({
  label,
  value,
  interactive,
  isActive,
  onClick,
}: {
  label: string;
  value: string;
  interactive?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}) {
  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "rounded-[1rem] border px-3.5 py-3 text-left transition duration-150 hover:border-[var(--line-strong)]",
          isActive
            ? "border-[var(--line-strong)] bg-[var(--surface-muted)]"
            : "border-[var(--line)] bg-white",
        )}
      >
        <p className="text-[0.66rem] uppercase tracking-[0.18em] text-[var(--muted)]">
          {label}
        </p>
        <p className="mt-2 text-[0.94rem] leading-tight text-[var(--foreground)]">
          {value}
        </p>
      </button>
    );
  }

  return (
    <div className="rounded-[1rem] border border-[var(--line)] bg-white px-3.5 py-3 text-left transition duration-150">
      <p className="text-[0.66rem] uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 text-[0.94rem] leading-tight text-[var(--foreground)]">
        {value}
      </p>
    </div>
  );
}

function AxisNodeButton({
  node,
  state,
  isPinned,
  onHover,
  onLeave,
  onClick,
}: {
  node: BoardNodeMeta;
  state: "idle" | "active" | "primary" | "secondary" | "dim";
  isPinned: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const theme = dimensionTheme[node.dimensionId];
  const isActive = state === "active";
  const isLinked = state === "primary" || state === "secondary";
  const isDim = state === "dim";

  return (
    <button
      type="button"
      title={node.definition}
      aria-pressed={isPinned}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onClick}
      className={cn(
        "group relative w-full rounded-[1rem] border px-3 py-3 text-left transition duration-150",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]",
        isDim && "opacity-40",
      )}
      style={{
        borderColor: isActive || isLinked ? theme.line : "var(--line)",
        backgroundColor: isActive ? theme.wash : isLinked ? theme.soft : "white",
        boxShadow: isActive ? `inset 0 0 0 1px ${theme.accent}` : "none",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className="text-[0.75rem] uppercase tracking-[0.18em]"
            style={{ color: isActive || isLinked ? theme.accent : "var(--foreground)" }}
          >
            {node.label}
          </p>
        </div>
        <span className="shrink-0 text-[0.82rem] font-semibold text-[var(--foreground)]">
          {node.value}
        </span>
      </div>

      <div
        className="pointer-events-none absolute left-0 top-full z-10 mt-2 hidden w-56 rounded-[0.9rem] border border-[var(--line)] bg-white px-3 py-2 text-[0.7rem] leading-5 text-[var(--muted)] shadow-[0_12px_30px_rgba(23,19,15,0.08)] md:group-hover:block md:group-focus-visible:block"
      >
        {node.definition}
      </div>
    </button>
  );
}

export function ResultsBoard({ content }: { content: ResultsContent }) {
  const [hoveredFocus, setHoveredFocus] = useState<FocusTarget | null>(null);
  const [pinnedFocus, setPinnedFocus] = useState<FocusTarget | null>(null);

  const nodeLookup = new Map(buildNodeLookup(content.axes));
  const activeFocus = pinnedFocus ?? hoveredFocus;
  const relatedStrengths = getRelatedStrengths(activeFocus, content.connections);
  const panel = getPanelContent(
    content,
    activeFocus,
    nodeLookup,
    content.connections,
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
    <article className="section-reveal rounded-[1.6rem] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,rgba(236,239,243,0.38))] p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-[1.9rem] leading-[1] text-[var(--foreground)] sm:text-[2.2rem]">
                {content.title}
              </h2>
              <p className="mt-2 text-[0.86rem] leading-5.5 text-[var(--muted)] sm:text-[0.92rem] sm:leading-6">
                {content.description}
              </p>
            </div>
            {pinnedFocus ? (
              <button
                type="button"
                onClick={() => setPinnedFocus(null)}
                className="shrink-0 self-start rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-150 hover:text-[var(--foreground)]"
              >
                Clear selection
              </button>
            ) : null}
          </div>
        </div>

        <div className="grid gap-2.5 md:grid-cols-3">
          {content.badges.map((badge) => (
            <BoardBadge
              key={badge.id}
              label={badge.label}
              value={badge.value}
              interactive={false}
            />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.78fr)]">
          <div className="space-y-4 rounded-[1.3rem] border border-[var(--line)] bg-white p-4 sm:p-5">
            <div className="grid gap-3 md:grid-cols-3">
              {content.axes.map((axis) => (
                <section
                  key={axis.id}
                  className="rounded-[1.1rem] border p-3.5"
                  style={{
                    borderColor: dimensionTheme[axis.id].line,
                    backgroundColor: dimensionTheme[axis.id].soft,
                  }}
                >
                  <p
                    className="font-[var(--font-data)] text-[0.66rem] uppercase tracking-[0.22em]"
                    style={{ color: dimensionTheme[axis.id].accent }}
                  >
                    {axis.label}
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {axis.items.map((node) => {
                      const relationState = relatedStrengths.get(node.id);
                      const state =
                        relationState === "active"
                          ? "active"
                          : relationState === "primary"
                            ? "primary"
                            : relationState === "secondary"
                              ? "secondary"
                              : activeFocus
                                ? "dim"
                                : "idle";

                      return (
                        <AxisNodeButton
                          key={node.id}
                          node={nodeLookup.get(node.id)!}
                          state={state}
                          isPinned={sameFocus(pinnedFocus, { type: "item", id: node.id })}
                          onHover={() => handleHover({ type: "item", id: node.id })}
                          onLeave={handleLeave}
                          onClick={() => handleToggleFocus({ type: "item", id: node.id })}
                        />
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.3rem] border border-[var(--line)] bg-white p-4 sm:p-5">
            {panel.eyebrow ? (
              <p className="section-eyebrow">{panel.eyebrow}</p>
            ) : null}
            <h3 className={cn("text-[1.18rem] leading-tight text-[var(--foreground)]", panel.eyebrow ? "mt-2" : "")}>
              {panel.title}
            </h3>
            <p className="mt-3 text-[0.8rem] leading-5.5 text-[var(--muted)]">
              {panel.definition}
            </p>

            {panel.metric || panel.count ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {panel.metric ? (
                  <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.16em] text-[var(--foreground)]">
                    {panel.metric}
                  </span>
                ) : null}
                {panel.count ? (
                  <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {panel.count}
                  </span>
                ) : null}
              </div>
            ) : null}

            <div className="mt-4 space-y-3 rounded-[1rem] border border-[var(--line)] bg-[var(--surface-muted)] px-3.5 py-3">
              <div>
                <p className="section-eyebrow">Strongest link</p>
                <p className="mt-1.5 text-[0.78rem] leading-5 text-[var(--foreground)]">
                  {panel.strongestLink}
                </p>
              </div>
              <div>
                <p className="section-eyebrow">Insight</p>
                <p className="mt-1.5 text-[0.78rem] leading-5 text-[var(--muted)]">
                  {panel.insight}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
