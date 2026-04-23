import type { ProblemContent } from "@/types/content";

export const problemContent: ProblemContent = {
  eyebrow: "Motivation",
  title: "Motivation",
  description: "Why word-scale graphics matter in scholarly communication.",

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

  statement: [
    {
      text: "Word-scale graphics fold a precise visual cue back into the sentence that makes a claim — useful, well-studied in HCI, and almost absent from published science. In a corpus of ",
    },
    { text: "126,797", bold: true },
    { text: " papers, only " },
    { text: "0.6%", bold: true },
    {
      text: " adopted them, and their everyday use has never been characterized at scale. ",
    },
    {
      text: "How do researchers apply word-scale graphics in scientific papers?",
      bold: true,
    },
  ],
};
