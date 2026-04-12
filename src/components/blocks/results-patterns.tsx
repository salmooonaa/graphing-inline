import type { ResultsContent } from "@/types/content";

import {
  type ExplorerItemMeta,
  type FocusTarget,
  sameFocus,
} from "@/components/blocks/results-shared";
import { ItemPill } from "@/components/blocks/results-ui";
import { cn } from "@/lib/utils";

export function ResultsPatterns({
  content,
  itemLookup,
  activeFocus,
  pinnedFocus,
  onHover,
  onLeave,
  onToggleFocus,
}: {
  content: ResultsContent;
  itemLookup: Map<string, ExplorerItemMeta>;
  activeFocus: FocusTarget | null;
  pinnedFocus: FocusTarget | null;
  onHover: (nextFocus: FocusTarget) => void;
  onLeave: () => void;
  onToggleFocus: (nextFocus: FocusTarget) => void;
}) {
  return (
    <div className="space-y-2.5 rounded-[1.45rem] border border-[var(--line)] bg-white p-4 sm:p-5">
      {content.dominantPatterns.items.map((pattern) => {
        const isActive = sameFocus(activeFocus, {
          type: "pattern",
          id: pattern.id,
        });
        const isPinned = sameFocus(pinnedFocus, {
          type: "pattern",
          id: pattern.id,
        });
        const shouldDim =
          activeFocus?.type === "item" &&
          !pattern.connectedItemIds.includes(activeFocus.id);

        return (
          <button
            key={pattern.id}
            type="button"
            onMouseEnter={() => onHover({ type: "pattern", id: pattern.id })}
            onMouseLeave={onLeave}
            onFocus={() => onHover({ type: "pattern", id: pattern.id })}
            onBlur={onLeave}
            onClick={() => onToggleFocus({ type: "pattern", id: pattern.id })}
            aria-pressed={isPinned}
            className={cn(
              "w-full rounded-[1.2rem] border px-3.5 py-3.5 text-left transition duration-150",
              shouldDim && "opacity-45",
            )}
            style={{
              borderColor: isActive ? "var(--line-strong)" : "var(--line)",
              backgroundColor: isActive ? "var(--surface-muted)" : "white",
            }}
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="section-eyebrow">{pattern.rank}</span>
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {pattern.qualifier}
                  </span>
                </div>
                <h3 className="mt-2 text-[1.02rem] leading-tight text-[var(--foreground)] sm:text-[1.1rem]">
                  {pattern.title}
                </h3>
              </div>
              <span className="text-[0.92rem] font-semibold text-[var(--foreground)]">
                {pattern.share}
              </span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-black/6">
              <div
                className="h-full rounded-full bg-[var(--foreground)] transition-[width] duration-200"
                style={{ width: pattern.width }}
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {pattern.pills.map((pill) => (
                <ItemPill
                  key={`${pattern.id}-${pill.itemId}`}
                  label={pill.label}
                  dimension={itemLookup.get(pill.itemId)!.dimensionId}
                />
              ))}
            </div>

            <p className="mt-3 text-[0.76rem] leading-5 text-[var(--muted)]">
              {pattern.summary}
            </p>
          </button>
        );
      })}
    </div>
  );
}
