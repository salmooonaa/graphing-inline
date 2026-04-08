import type { PlaceholderFigure } from "@/types/content";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  figure: PlaceholderFigure;
  className?: string;
  canvasClassName?: string;
  tone?: "neutral" | "blue" | "amber" | "green";
};

const toneMap = {
  neutral:
    "border-[var(--line-strong)] bg-[var(--surface-strong)] text-slate-700",
  blue: "border-[var(--blue-line)] bg-[var(--blue-soft)] text-slate-700",
  amber:
    "border-[var(--amber-line)] bg-[var(--amber-soft)] text-slate-700",
  green:
    "border-[var(--green-line)] bg-[var(--green-soft)] text-slate-700",
};

export function ImagePlaceholder({
  figure,
  className,
  canvasClassName,
  tone = "neutral",
}: ImagePlaceholderProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border p-5 sm:p-6",
        toneMap[tone],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,24,39,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.04) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            {figure.eyebrow}
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Image placeholder
          </p>
        </div>

        <div
          className={cn(
            "mt-5 aspect-[16/10] border border-dashed border-[var(--line)] bg-white/80 p-4",
            canvasClassName,
          )}
        >
          <div className="grid h-full gap-4 grid-rows-[auto_1fr_auto]">
            <div className="flex items-center justify-between gap-4">
              <div className="h-2.5 w-32 bg-slate-200/90" />
              <div className="h-2.5 w-20 bg-slate-200/70" />
            </div>

            <div className="grid grid-cols-[1.15fr_0.85fr] gap-4">
              <div className="border border-slate-200 bg-slate-50/90 p-3">
                <div className="grid h-full grid-rows-3 gap-3">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-3 h-full bg-slate-200/80" />
                    <div className="h-full bg-slate-300/70" />
                    <div className="h-full bg-slate-300/70" />
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-2 h-full bg-slate-200/80" />
                    <div className="col-span-4 h-full bg-slate-100/90" />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-full bg-slate-300/80" />
                    <div className="h-full bg-slate-100/90" />
                    <div className="h-full bg-slate-200/80" />
                    <div className="h-full bg-slate-100/90" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="border border-slate-200 bg-slate-50/90 p-3">
                  <div className="space-y-2">
                    <div className="h-2.5 w-24 bg-slate-300/80" />
                    <div className="h-2.5 w-full bg-slate-200/80" />
                    <div className="h-2.5 w-4/5 bg-slate-200/70" />
                    <div className="h-2.5 w-2/3 bg-slate-200/60" />
                  </div>
                </div>
                <div className="border border-slate-200 bg-slate-50/90 p-3">
                  <div className="grid h-full grid-cols-3 gap-2">
                    <div className="bg-slate-200/80" />
                    <div className="bg-slate-300/70" />
                    <div className="bg-slate-200/70" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="h-2.5 bg-slate-200/80" />
              <div className="h-2.5 bg-slate-200/60" />
              <div className="h-2.5 bg-slate-200/80" />
            </div>
          </div>
        </div>

        <figcaption className="mt-5 space-y-2">
          <h3 className="text-xl font-semibold text-slate-950">{figure.title}</h3>
          <p className="max-w-3xl text-sm leading-7 text-slate-600">
            {figure.description}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
