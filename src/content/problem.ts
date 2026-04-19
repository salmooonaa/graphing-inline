import type { ProblemContent } from "@/types/content";

export const problemContent: ProblemContent = {
  eyebrow: "Motivation",
  title: "Motivation",
  description: "Why word-scale graphics matter in scholarly communication.",
  researchQuestion:
    "How do researchers apply word-scale graphics in scientific papers?",

  thesis: [
    { text: "Graphics live " },
    { text: "in", italic: true },
    { text: " text, not beside it." },
  ],

  framing:
    "Scientific papers still separate numbers from the words that describe them. Word-scale graphics fold the visual back into the sentence — small enough to sit between letters, specific enough to answer a claim in place.",

  demo: {
    segments: [
      { type: "run", text: "In a corpus of " },
      { type: "run", text: "126,797", bold: true },
      { type: "run", text: " papers, only " },
      { type: "run", text: "0.6%", bold: true },
      {
        type: "run",
        text: " used word-scale graphics. Most of those placed the graphic inside running text — ",
      },
      {
        type: "token",
        id: "tok1",
        text: "see Fig 2",
        graphic: { kind: "icon-figure" },
      },
      { type: "run", text: " for the yearly trend. Revenue " },
      {
        type: "token",
        id: "tok2",
        text: "rose 23%",
        graphic: { kind: "sparkline", direction: "up", bars: [1, 2, 4, 8] },
      },
      { type: "run", text: " while costs " },
      {
        type: "token",
        id: "tok3",
        text: "fell 8%",
        graphic: { kind: "sparkline", direction: "down", bars: [8, 6, 3, 1] },
      },
      { type: "run", text: ", a pattern significant at " },
      {
        type: "token",
        id: "tok4",
        text: "p < 0.001",
        graphic: { kind: "smallcaps" },
      },
      { type: "run", text: "." },
    ],
  },

  annotation:
    "Inline graphics add a visual cue at the exact point a reader needs it — without forcing a jump to a standalone figure.",

  gap: "Prior work has explored such micro-visualizations in design and interaction research. But their everyday use in published scientific papers has never been characterized at scale.",

  bridge: [
    { text: "We read " },
    { text: "126,797", bold: true },
    { text: " papers and coded " },
    { text: "909", bold: true },
    { text: " use cases along three axes — " },
    { text: "where", italic: true, bold: true },
    { text: " they appear, " },
    { text: "why", italic: true, bold: true },
    { text: " they are used, and " },
    { text: "how", italic: true, bold: true },
    { text: " they are drawn — reported in the section below." },
  ],
};
