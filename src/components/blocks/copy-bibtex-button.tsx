"use client";

import { useState } from "react";

type CopyBibtexButtonProps = {
  value: string;
};

export function CopyBibtexButton({ value }: CopyBibtexButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-[0.5rem] border border-[rgba(23,19,15,0.1)] bg-white px-3 py-1.75 text-[0.68rem] font-medium text-[var(--foreground)] transition-colors duration-150 hover:border-[rgba(23,19,15,0.18)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 7.25h10v13H9z" />
        <path d="M5 3.75h10v13" />
      </svg>
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
