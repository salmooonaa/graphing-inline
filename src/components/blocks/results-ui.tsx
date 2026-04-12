import type { ResultsDimensionId } from "@/types/content";

import { dimensionTheme } from "@/components/blocks/results-shared";

export function ModuleHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2.5">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="flex items-end gap-4">
        <h3 className="text-[1.15rem] leading-tight text-[var(--foreground)] sm:text-[1.3rem]">
          {title}
        </h3>
        <div aria-hidden="true" className="mb-1 hidden h-px flex-1 bg-[var(--line)] sm:block" />
      </div>
      <p className="max-w-3xl text-[0.83rem] leading-5.5 text-[var(--muted)] sm:text-[0.88rem] sm:leading-6">
        {description}
      </p>
    </div>
  );
}

export function ItemPill({
  label,
  dimension,
}: {
  label: string;
  dimension: ResultsDimensionId;
}) {
  const theme = dimensionTheme[dimension];

  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-1 text-[0.63rem] font-medium uppercase tracking-[0.16em]"
      style={{
        borderColor: theme.line,
        backgroundColor: theme.soft,
        color: theme.accent,
      }}
    >
      {label}
    </span>
  );
}
