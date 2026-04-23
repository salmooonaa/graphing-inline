"use client";

import { useState } from "react";

import type {
  MotivationDemoSegment,
  MotivationDemoToken,
} from "@/types/content";

import { renderRun } from "@/lib/rich-text";

type Mode = "plain" | "word";

function IconFigure() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="wsg-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="3.5" width="11" height="9" rx="0.5" />
      <path d="M4.5 10.5l2-2.5 2 1.6 2.6-3 1.4 1.9" />
      <circle cx="5.6" cy="6.2" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Sparkline({
  bars,
  direction,
}: {
  bars: number[];
  direction: "up" | "down";
}) {
  const max = Math.max(...bars, 1);
  const color = direction === "up" ? "var(--amber)" : "var(--blue)";
  return (
    <span className="wsg-sparkline">
      {bars.map((v, i) => (
        <span
          key={i}
          className="wsg-sparkline__bar"
          style={{
            height: `${Math.max((v / max) * 100, 10)}%`,
            background: color,
          }}
        />
      ))}
    </span>
  );
}

function TokenGraphic({
  token,
  mode,
}: {
  token: MotivationDemoToken;
  mode: Mode;
}) {
  const g = token.graphic;
  const isOn = mode === "word";

  if (g.kind === "icon-figure") {
    return (
      <span className="wsg-token">
        {token.text}
        <span
          className={`wsg-graphic-wrap wsg-graphic-wrap--icon ${isOn ? "is-on" : "is-off"}`}
          aria-hidden="true"
        >
          <IconFigure />
        </span>
      </span>
    );
  }
  if (g.kind === "sparkline") {
    return (
      <span className="wsg-token">
        <span
          className={`wsg-graphic-wrap wsg-graphic-wrap--sparkline ${isOn ? "is-on" : "is-off"}`}
          aria-hidden="true"
        >
          <Sparkline bars={g.bars} direction={g.direction} />
        </span>
        {token.text}
      </span>
    );
  }
  return (
    <span className={`wsg-token ${isOn ? "wsg-smallcaps" : ""}`}>
      {token.text}
    </span>
  );
}

function DemoProse({
  segments,
  mode,
}: {
  segments: MotivationDemoSegment[];
  mode: Mode;
}) {
  return (
    <p className="wsg-demo-prose">
      {segments.map((seg, i) =>
        seg.type === "run" ? (
          renderRun(
            { text: seg.text, italic: seg.italic, bold: seg.bold },
            `run-${i}`,
          )
        ) : (
          <TokenGraphic key={seg.id} token={seg} mode={mode} />
        ),
      )}
    </p>
  );
}

function Toggle({
  mode,
  onChange,
}: {
  mode: Mode;
  onChange: (m: Mode) => void;
}) {
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange("plain");
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange("word");
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Toggle between plain text and word-scale prose"
      className="wsg-toggle"
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        role="radio"
        aria-checked={mode === "plain"}
        tabIndex={mode === "plain" ? 0 : -1}
        onClick={() => onChange("plain")}
        className={`wsg-toggle__btn whitespace-nowrap ${mode === "plain" ? "is-active" : ""}`}
      >
        Plain text
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={mode === "word"}
        tabIndex={mode === "word" ? 0 : -1}
        onClick={() => onChange("word")}
        className={`wsg-toggle__btn ${mode === "word" ? "is-active" : ""}`}
      >
        Word-scale
      </button>
    </div>
  );
}

export function MotivationDemo({
  segments,
}: {
  segments: MotivationDemoSegment[];
}) {
  const [mode, setMode] = useState<Mode>("word");
  return (
    <div className="section-reveal reveal-delay-1 w-full wsg-demo-card">
      <div className="wsg-demo-header">
        <span className="section-eyebrow">Example</span>
        <Toggle mode={mode} onChange={setMode} />
      </div>
      <div className="wsg-demo-body">
        <DemoProse segments={segments} mode={mode} />
      </div>
    </div>
  );
}
