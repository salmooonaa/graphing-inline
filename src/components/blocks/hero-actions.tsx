import type { HeroAction } from "@/types/content";

import { cn } from "@/lib/utils";

type HeroActionsProps = {
  actions: HeroAction[];
};

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action) => (
        <a
          key={`${action.label}-${action.href}`}
          href={action.href}
          className={cn(
            "inline-flex items-center border px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors",
            action.variant === "primary"
              ? "border-slate-950 bg-slate-950 text-white hover:bg-slate-800"
              : "border-[var(--line-strong)] bg-[var(--surface)] text-slate-700 hover:border-slate-950 hover:text-slate-950",
          )}
        >
          <span>{action.label}</span>
        </a>
      ))}
    </div>
  );
}
