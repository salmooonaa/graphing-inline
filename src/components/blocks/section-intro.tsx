import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  accent,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn("max-w-2xl space-y-4", className)}>
      <div className="flex items-center gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
          {eyebrow}
        </p>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-[var(--line)]"
        />
      </div>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
        {description}
      </p>
      {accent ? (
        <p className="max-w-xl border-l border-[var(--line-strong)] pl-4 text-sm leading-7 text-slate-600">
          {accent}
        </p>
      ) : null}
    </div>
  );
}
