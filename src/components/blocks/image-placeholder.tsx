import type { PlaceholderFigure } from "@/types/content";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  figure: PlaceholderFigure;
  className?: string;
  canvasClassName?: string;
  tone?: "neutral" | "blue" | "amber" | "green";
};

const toneMap = {
  neutral: {
    frame: "border-[var(--line)] bg-[var(--surface)] text-[var(--muted-strong)]",
    chip: "border-[var(--line)] bg-white/70 text-[var(--muted)]",
    accent: "bg-[var(--foreground)]",
    grid: "rgba(23,19,15,0.05)",
  },
  blue: {
    frame: "border-[var(--blue-line)] bg-[var(--blue-soft)] text-[var(--muted-strong)]",
    chip: "border-[var(--blue-line)] bg-white/72 text-[var(--blue)]",
    accent: "bg-[var(--blue)]",
    grid: "rgba(77,101,128,0.07)",
  },
  amber: {
    frame: "border-[var(--amber-line)] bg-[var(--amber-soft)] text-[var(--muted-strong)]",
    chip: "border-[var(--amber-line)] bg-white/72 text-[var(--amber)]",
    accent: "bg-[var(--amber)]",
    grid: "rgba(155,106,40,0.07)",
  },
  green: {
    frame: "border-[var(--green-line)] bg-[var(--green-soft)] text-[var(--muted-strong)]",
    chip: "border-[var(--green-line)] bg-white/72 text-[var(--green)]",
    accent: "bg-[var(--green)]",
    grid: "rgba(75,105,92,0.07)",
  },
};

export function ImagePlaceholder({
  figure,
  className,
  canvasClassName,
  tone = "neutral",
}: ImagePlaceholderProps) {
  const toneStyles = toneMap[tone];
  const description = /replace with|reserved for|use one|use /i.test(
    figure.description,
  )
    ? ""
    : figure.description;
  const title = /placeholder/i.test(figure.title)
    ? "Figure placeholder"
    : figure.title;

  return (
    <figure
      className={cn(
        "paper-panel relative overflow-hidden p-5 sm:p-6",
        toneStyles.frame,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.68]"
        style={{
          backgroundImage:
            `linear-gradient(${toneStyles.grid} 1px, transparent 1px), linear-gradient(90deg, ${toneStyles.grid} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent"
      />

      <div className="relative space-y-5">
        <div className="flex items-start justify-between gap-3 border-b border-[var(--line)] pb-3">
          <div className="flex items-center gap-3">
            <span className={cn("h-2.5 w-2.5 rounded-full", toneStyles.accent)} />
            <div>
              <p className="section-eyebrow">{figure.eyebrow}</p>
            </div>
          </div>
          <p
            className={cn(
              "inline-flex items-center border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em]",
              toneStyles.chip,
            )}
          >
            Figure
          </p>
        </div>

        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden border border-dashed border-[var(--line)] bg-white/76 p-4 sm:p-5",
            canvasClassName,
          )}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),transparent_32%,rgba(23,19,15,0.03))]" />
          <div className="relative grid h-full grid-rows-[auto_1fr_auto] gap-4">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <div className={cn("h-2.5 w-10 rounded-full", toneStyles.accent)} />
              <div className="h-px bg-[var(--line)]" />
              <div className="h-2 w-16 bg-[var(--surface-muted)]" />
            </div>

            <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
              <div className="grid gap-4">
                <div className="border border-[var(--line)] bg-[var(--surface-strong)] p-3 sm:p-4">
                  <div className="grid h-full grid-rows-[auto_1fr] gap-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="h-2.5 w-24 bg-[var(--surface-muted)]" />
                      <div className="h-2.5 w-14 bg-[var(--surface-muted)]" />
                    </div>
                    <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
                      <div className="border border-[var(--line)] bg-white/72 p-3">
                        <div className="grid h-full grid-rows-4 gap-2">
                          <div className="h-full bg-[var(--surface-muted)]" />
                          <div className="grid grid-cols-3 gap-2">
                            <div className={cn("rounded-full", toneStyles.accent)} />
                            <div className="bg-[var(--surface-muted)]" />
                            <div className="bg-[var(--surface-muted)]" />
                          </div>
                          <div className="grid grid-cols-4 gap-2">
                            <div className="bg-[var(--surface-muted)]" />
                            <div className="bg-[var(--surface-muted)]" />
                            <div className="bg-[var(--surface-muted)]" />
                            <div className={cn("rounded-full", toneStyles.accent)} />
                          </div>
                          <div className="h-full bg-[var(--surface-muted)]" />
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <div className="border border-[var(--line)] bg-white/80 p-3">
                          <div className="space-y-2.5">
                            <div className="h-2.5 w-20 bg-[var(--surface-muted)]" />
                            <div className="h-2.5 w-full bg-[var(--surface-muted)]" />
                            <div className="h-2.5 w-4/5 bg-[var(--surface-muted)]" />
                            <div className="h-2.5 w-3/5 bg-[var(--surface-muted)]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="col-span-3 h-14 border border-[var(--line)] bg-white/72" />
                          <div className={cn("rounded-full", toneStyles.accent)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[0.92fr_1.08fr] gap-4">
                  <div className="border border-[var(--line)] bg-white/80 p-3">
                    <div className="space-y-2.5">
                      <div className="h-2.5 w-14 bg-[var(--surface-muted)]" />
                      <div className="h-2.5 w-full bg-[var(--surface-muted)]" />
                      <div className="h-2.5 w-5/6 bg-[var(--surface-muted)]" />
                    </div>
                  </div>
                  <div className="border border-[var(--line)] bg-white/72 p-3">
                    <div className="grid h-full grid-cols-5 gap-2">
                      <div className={cn("rounded-full", toneStyles.accent)} />
                      <div className="bg-[var(--surface-muted)]" />
                      <div className="bg-[var(--surface-muted)]" />
                      <div className="bg-[var(--surface-muted)]" />
                      <div className={cn("rounded-full", toneStyles.accent)} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="border border-[var(--line)] bg-white/82 p-3">
                  <div className="space-y-2">
                    <div className="h-2.5 w-24 bg-[var(--surface-muted)]" />
                    <div className="h-2.5 w-full bg-[var(--surface-muted)]" />
                    <div className="h-2.5 w-4/5 bg-[var(--surface-muted)]" />
                    <div className="h-2.5 w-2/3 bg-[var(--surface-muted)]" />
                    <div className="h-px bg-[var(--line)]" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className={cn("h-12 rounded-full", toneStyles.accent)} />
                      <div className="h-12 bg-[var(--surface-muted)]" />
                    </div>
                  </div>
                </div>
                <div className="border border-[var(--line)] bg-white/76 p-3">
                  <div className="grid h-full grid-cols-[0.28fr_0.72fr] gap-3">
                    <div className="grid gap-2">
                      <div className={cn("rounded-full", toneStyles.accent)} />
                      <div className="bg-[var(--surface-muted)]" />
                      <div className={cn("rounded-full", toneStyles.accent)} />
                    </div>
                    <div className="border border-[var(--line)] bg-[var(--surface-strong)] p-3">
                      <div className="grid h-full grid-rows-4 gap-2">
                        <div className="h-2.5 w-4/5 bg-[var(--surface-muted)]" />
                        <div className="h-full bg-[var(--surface-muted)]" />
                        <div className="h-full bg-[var(--surface-muted)]" />
                        <div className="h-2.5 w-2/3 bg-[var(--surface-muted)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[0.35fr_0.3fr_0.35fr] gap-3">
              <div className="h-2.5 bg-[var(--surface-muted)]" />
              <div className={cn("h-2.5 rounded-full", toneStyles.accent)} />
              <div className="h-2.5 bg-[var(--surface-muted)]" />
            </div>
          </div>
        </div>

        <figcaption className="grid gap-3 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <h3 className="text-2xl leading-tight text-[var(--foreground)]">
            {title}
          </h3>
          {description ? (
            <p className="max-w-3xl text-sm leading-7 text-[var(--muted)]">
              {description}
            </p>
          ) : null}
        </figcaption>
      </div>
    </figure>
  );
}
