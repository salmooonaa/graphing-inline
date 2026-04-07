type FigureCaptionProps = {
  title: string;
  caption: string;
  className?: string;
};

export function FigureCaption({ title, caption, className }: FigureCaptionProps) {
  return (
    <figcaption className={className}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
        {title}
      </p>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{caption}</p>
    </figcaption>
  );
}
