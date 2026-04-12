import type { ResultDistributionGroup, ResultsContent } from "@/types/content";

import {
  dimensionTheme,
  type ExplorerItemMeta,
  type FocusTarget,
  sameFocus,
} from "@/components/blocks/results-shared";
import { cn } from "@/lib/utils";

function DistributionBlock({
  group,
  itemLookup,
  activeFocus,
  pinnedFocus,
  highlightedItemIds,
  onHover,
  onLeave,
  onToggleFocus,
}: {
  group: ResultDistributionGroup;
  itemLookup: Map<string, ExplorerItemMeta>;
  activeFocus: FocusTarget | null;
  pinnedFocus: FocusTarget | null;
  highlightedItemIds: Set<string>;
  onHover: (nextFocus: FocusTarget) => void;
  onLeave: () => void;
  onToggleFocus: (nextFocus: FocusTarget) => void;
}) {
  const theme = dimensionTheme[group.id];

  return (
    <article className="space-y-3 rounded-[1.25rem] border border-[var(--line)] bg-white p-4 sm:p-4.5">
      <div className="space-y-1.5">
        <p className="section-eyebrow" style={{ color: theme.accent }}>
          {group.title}
        </p>
        <p className="text-[0.79rem] leading-5 text-[var(--muted)]">{group.summary}</p>
      </div>

      {group.variant === "stacked" ? (
        <div className="space-y-3">
          <div className="flex overflow-hidden rounded-full bg-black/6">
            {group.items.map((item, index) => (
              <button
                key={item.itemId}
                type="button"
                onMouseEnter={() => onHover({ type: "item", id: item.itemId })}
                onMouseLeave={onLeave}
                onFocus={() => onHover({ type: "item", id: item.itemId })}
                onBlur={onLeave}
                onClick={() => onToggleFocus({ type: "item", id: item.itemId })}
                aria-pressed={sameFocus(pinnedFocus, { type: "item", id: item.itemId })}
                className="h-3 transition-opacity duration-150"
                style={{
                  width: item.width,
                  backgroundColor: theme.accent,
                  opacity:
                    activeFocus && !highlightedItemIds.has(item.itemId)
                      ? 0.4 + index * 0.14
                      : 0.64 + index * 0.12,
                }}
              />
            ))}
          </div>

          <div className="space-y-2">
            {group.items.map((item) => {
              const meta = itemLookup.get(item.itemId);
              const isActive = highlightedItemIds.has(item.itemId);
              const isPinned = sameFocus(pinnedFocus, {
                type: "item",
                id: item.itemId,
              });

              return (
                <button
                  key={item.itemId}
                  type="button"
                  onMouseEnter={() => onHover({ type: "item", id: item.itemId })}
                  onMouseLeave={onLeave}
                  onFocus={() => onHover({ type: "item", id: item.itemId })}
                  onBlur={onLeave}
                  onClick={() => onToggleFocus({ type: "item", id: item.itemId })}
                  aria-pressed={isPinned}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-[0.95rem] border px-3 py-2 text-left transition duration-150",
                    activeFocus && !isActive && "opacity-55",
                  )}
                  style={{
                    borderColor: isActive ? theme.line : "var(--line)",
                    backgroundColor: isActive ? theme.soft : "transparent",
                  }}
                >
                  <div className="min-w-0">
                    <p className="text-[0.73rem] uppercase tracking-[0.18em] text-[var(--foreground)]">
                      {item.label}
                    </p>
                    {item.note ? (
                      <p className="mt-1 text-[0.68rem] text-[var(--muted)]">{item.note}</p>
                    ) : meta?.note ? (
                      <p className="mt-1 text-[0.68rem] text-[var(--muted)]">{meta.note}</p>
                    ) : null}
                  </div>
                  <span className="shrink-0 text-[0.82rem] font-semibold text-[var(--foreground)]">
                    {item.value}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-2.5">
          {group.items.map((item) => {
            const isActive = highlightedItemIds.has(item.itemId);
            const isPinned = sameFocus(pinnedFocus, {
              type: "item",
              id: item.itemId,
            });

            return (
              <button
                key={item.itemId}
                type="button"
                onMouseEnter={() => onHover({ type: "item", id: item.itemId })}
                onMouseLeave={onLeave}
                onFocus={() => onHover({ type: "item", id: item.itemId })}
                onBlur={onLeave}
                onClick={() => onToggleFocus({ type: "item", id: item.itemId })}
                aria-pressed={isPinned}
                className={cn(
                  "w-full rounded-[0.95rem] border px-3 py-2.5 text-left transition duration-150",
                  activeFocus && !isActive && "opacity-55",
                )}
                style={{
                  borderColor: isActive ? theme.line : "var(--line)",
                  backgroundColor: isActive ? theme.soft : "transparent",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[0.73rem] uppercase tracking-[0.18em] text-[var(--foreground)]">
                      {item.label}
                    </p>
                    {item.note ? (
                      <p className="mt-1 text-[0.68rem] text-[var(--muted)]">{item.note}</p>
                    ) : null}
                  </div>
                  <span className="shrink-0 text-[0.82rem] font-semibold text-[var(--foreground)]">
                    {item.value}
                  </span>
                </div>

                <div className="mt-2.5 h-1.5 rounded-full bg-black/6">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: item.width,
                      backgroundColor: theme.accent,
                      opacity: isActive ? 1 : 0.78,
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </article>
  );
}

export function ResultsDistributions({
  content,
  itemLookup,
  activeFocus,
  pinnedFocus,
  highlightedItemIds,
  onHover,
  onLeave,
  onToggleFocus,
}: {
  content: ResultsContent;
  itemLookup: Map<string, ExplorerItemMeta>;
  activeFocus: FocusTarget | null;
  pinnedFocus: FocusTarget | null;
  highlightedItemIds: Set<string>;
  onHover: (nextFocus: FocusTarget) => void;
  onLeave: () => void;
  onToggleFocus: (nextFocus: FocusTarget) => void;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {content.distributions.groups.map((group) => (
        <DistributionBlock
          key={group.id}
          group={group}
          itemLookup={itemLookup}
          activeFocus={activeFocus}
          pinnedFocus={pinnedFocus}
          highlightedItemIds={highlightedItemIds}
          onHover={onHover}
          onLeave={onLeave}
          onToggleFocus={onToggleFocus}
        />
      ))}
    </div>
  );
}
