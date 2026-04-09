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
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.6rem] border border-[rgba(23,19,15,0.14)] bg-white px-4 py-2.5 text-[0.82rem] font-medium text-[var(--foreground)] shadow-[0_1px_2px_rgba(23,19,15,0.04)] transition-colors duration-150 hover:border-[rgba(23,19,15,0.22)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4.5 w-4.5 shrink-0"
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
