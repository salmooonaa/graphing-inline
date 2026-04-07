type FigureCaptionProps = {
  title: string;
  caption: string;
  className?: string;
};

export function FigureCaption({ title, caption, className }: FigureCaptionProps) {
  return (
    <figcaption className={className}>
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{caption}</p>
    </figcaption>
  );
}
