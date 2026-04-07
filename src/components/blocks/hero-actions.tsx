import type { HeroAction } from "@/types/content";

import { cn } from "@/lib/utils";

type HeroActionsProps = {
  actions: HeroAction[];
};

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <a
          key={`${action.label}-${action.href}`}
          href={action.href}
          className={cn(
            "inline-flex items-center border-b px-0 py-2 text-sm font-medium transition-colors",
            action.variant === "primary"
              ? "border-slate-950 text-slate-950 hover:text-slate-700"
              : "border-slate-300 text-slate-700 hover:border-slate-950 hover:text-slate-950",
          )}
        >
          <span>{action.label}</span>
        </a>
      ))}
    </div>
  );
}
