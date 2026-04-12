import type { ResultsContent } from "@/types/content";

import {
  dimensionTheme,
  type ExplorerItemMeta,
  type FocusTarget,
  sameFocus,
} from "@/components/blocks/results-shared";
import { cn } from "@/lib/utils";

function ExplorerItemButton({
  item,
  state,
  isPinned,
  onHover,
  onLeave,
  onClick,
}: {
  item: ExplorerItemMeta;
  state: "idle" | "active" | "primary" | "secondary" | "dim";
  isPinned: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const theme = dimensionTheme[item.dimensionId];
  const isActive = state === "active";
  const isLinked = state === "primary" || state === "secondary";
  const isDim = state === "dim";

  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onClick}
      aria-pressed={isPinned}
      className={cn(
        "w-full rounded-[1.1rem] border px-3.5 py-3 text-left transition duration-150 ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)]",
        isDim && "opacity-45",
      )}
      style={{
        borderColor: isActive || isLinked ? theme.line : "var(--line)",
        backgroundColor: isActive
          ? theme.wash
          : isLinked
            ? theme.soft
            : "white",
        boxShadow: isActive ? `inset 0 0 0 1px ${theme.accent}` : "none",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className="text-[0.76rem] uppercase tracking-[0.2em]"
            style={{ color: isActive || isLinked ? theme.accent : "var(--muted)" }}
          >
            {item.label}
          </p>
          {item.note ? (
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">
              {item.note}
            </p>
          ) : null}
        </div>
        <span className="shrink-0 text-[0.9rem] font-semibold text-[var(--foreground)]">
          {item.value}
        </span>
      </div>

      <div className="mt-3 h-1.5 rounded-full bg-black/6">
        <div
          className="h-full rounded-full transition-[width] duration-200"
          style={{
            width: item.value,
            backgroundColor: theme.accent,
            opacity: isActive ? 1 : isLinked ? 0.86 : 0.72,
          }}
        />
      </div>

      <p className="mt-2.5 text-[0.74rem] leading-5 text-[var(--muted)]">
        {item.summary}
      </p>
    </button>
  );
}

export function ResultsExplorer({
  content,
  itemLookup,
  activeFocus,
  pinnedFocus,
  relatedStrengths,
  panel,
  onHover,
  onLeave,
  onToggleFocus,
  onClearFocus,
}: {
  content: ResultsContent;
  itemLookup: Map<string, ExplorerItemMeta>;
  activeFocus: FocusTarget | null;
  pinnedFocus: FocusTarget | null;
  relatedStrengths: Map<string, "active" | "primary" | "secondary">;
  panel: {
    eyebrow: string;
    title: string;
    summary: string;
    detail: string;
    facts: string[];
    links: string[];
    definitions: Array<{ term: string; description: string }>;
  };
  onHover: (nextFocus: FocusTarget) => void;
  onLeave: () => void;
  onToggleFocus: (nextFocus: FocusTarget) => void;
  onClearFocus: () => void;
}) {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.72fr)]">
      <div className="rounded-[1.45rem] border border-[var(--line)] bg-white p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-3">
          {content.explorer.dimensions.map((dimension) => (
            <section
              key={dimension.id}
              className="rounded-[1.2rem] border p-3.5"
              style={{
                borderColor: dimensionTheme[dimension.id].line,
                backgroundColor: dimensionTheme[dimension.id].soft,
              }}
            >
              <div className="space-y-1">
                <p
                  className="font-[var(--font-data)] text-[0.64rem] uppercase tracking-[0.22em]"
                  style={{ color: dimensionTheme[dimension.id].accent }}
                >
                  {dimension.label}
                </p>
                <h3 className="text-[1rem] leading-tight text-[var(--foreground)]">
                  {dimension.title}
                </h3>
                <p className="text-[0.72rem] leading-5 text-[var(--muted)]">
                  {dimension.summary}
                </p>
              </div>

              <div className="mt-3 space-y-2.5">
                {dimension.items.map((item) => {
                  const relationState = relatedStrengths.get(item.id);
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
                    <ExplorerItemButton
                      key={item.id}
                      item={itemLookup.get(item.id)!}
                      state={state}
                      isPinned={sameFocus(pinnedFocus, { type: "item", id: item.id })}
                      onHover={() => onHover({ type: "item", id: item.id })}
                      onLeave={onLeave}
                      onClick={() => onToggleFocus({ type: "item", id: item.id })}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      <aside className="rounded-[1.45rem] border border-[var(--line)] bg-white p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5">
            <p className="section-eyebrow">{panel.eyebrow}</p>
            <h3 className="text-[1.16rem] leading-tight text-[var(--foreground)]">
              {panel.title}
            </h3>
          </div>
          {pinnedFocus ? (
            <button
              type="button"
              onClick={onClearFocus}
              className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-150 hover:text-[var(--foreground)]"
            >
              Clear focus
            </button>
          ) : null}
        </div>

        <p className="mt-3 text-[0.88rem] leading-6 text-[var(--foreground)]">
          {panel.summary}
        </p>
        <p className="mt-2.5 text-[0.78rem] leading-5.5 text-[var(--muted)]">
          {panel.detail}
        </p>

        {panel.facts.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {panel.facts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.64rem] uppercase tracking-[0.16em] text-[var(--muted)]"
              >
                {fact}
              </span>
            ))}
          </div>
        ) : null}

        {panel.links.length > 0 ? (
          <div className="mt-4 space-y-2">
            <p className="section-eyebrow">Linked signal</p>
            <ul className="space-y-1.5">
              {panel.links.map((entry) => (
                <li
                  key={entry}
                  className="rounded-[0.95rem] border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-2 text-[0.74rem] leading-5 text-[var(--muted)]"
                >
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {panel.definitions.length > 0 ? (
          <div className="mt-4 space-y-2">
            <p className="section-eyebrow">Dimension definitions</p>
            <div className="space-y-2">
              {panel.definitions.map((definition) => (
                <div
                  key={definition.term}
                  className="rounded-[0.95rem] border border-[var(--line)] px-3 py-2.5"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--foreground)]">
                    {definition.term}
                  </p>
                  <p className="mt-1.5 text-[0.74rem] leading-5 text-[var(--muted)]">
                    {definition.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
