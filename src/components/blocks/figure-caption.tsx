type FigureCaptionProps = {
  title: string;
  caption: string;
  className?: string;
};

function sanitizeFigureText(value: string, fallback?: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return fallback ?? "";
  }

  if (/replace with|reserved for|use one|use /i.test(trimmed)) {
    return fallback ?? "";
  }

  if (/placeholder/i.test(trimmed)) {
    return fallback ?? "";
  }

  return trimmed;
}

export function FigureCaption({ title, caption, className }: FigureCaptionProps) {
  const safeTitle = sanitizeFigureText(title, "");
  const safeCaption = sanitizeFigureText(caption, "");

  if (!safeTitle && !safeCaption) {
    return null;
  }

  return (
    <figcaption className={className}>
      {safeTitle ? (
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {safeTitle}
        </p>
      ) : null}
      {safeCaption ? (
        <p className="mt-1 max-w-xl text-[0.76rem] leading-5.5 text-[var(--muted)]">
          {safeCaption}
        </p>
      ) : null}
    </figcaption>
  );
}
