import type { Key, ReactNode } from "react";

import type { RichTextRun } from "@/types/content";

export function renderRun(run: RichTextRun, key: Key) {
  let node: ReactNode = run.text;
  if (run.italic) node = <em className="italic">{node}</em>;
  if (run.bold) node = <strong className="font-semibold">{node}</strong>;
  return <span key={key}>{node}</span>;
}

export function RichText({ runs }: { runs: RichTextRun[] }) {
  return <>{runs.map((r, i) => renderRun(r, i))}</>;
}
