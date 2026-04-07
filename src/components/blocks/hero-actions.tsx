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
            "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
            action.variant === "primary"
              ? "bg-slate-950 text-white hover:bg-slate-800"
              : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-950",
          )}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}
