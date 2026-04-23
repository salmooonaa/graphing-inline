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
      text: "Scientific figures typically sit apart from the prose that cites them, so readers split attention between text and graphic — an extraneous load that can obscure the argument the figure is meant to support. Word-scale graphics offer a different path: compact visuals rendered at typographic size that fold the evidence back into the sentence itself. Prior HCI work has mapped their design space, reading behaviors, and novel applications, yet how researchers actually put them to use in published papers remains uncharted. We therefore ask: ",
    },
    {
      text: "How do researchers apply word-scale graphics in scientific papers?",
      bold: true,
    },
  ],
};
