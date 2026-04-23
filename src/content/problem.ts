import type { ProblemContent } from "@/types/content";

export const problemContent: ProblemContent = {
  eyebrow: "Motivation",
  title: "Motivation",
  description: "Why word-scale graphics matter in scholarly communication.",

  demo: {
    segments: [
      { type: "run", text: "At least " },
      { type: "run", text: "40", bold: true },
      { type: "run", text: " cities and counties are hiking their minimum wages: Flagstaff, Arizona, to " },
      {
        type: "token",
        id: "tok1",
        text: "$17.40",
        graphic: { kind: "bar", value: 17.40, max: 18.85 },
      },
      { type: "run", text: "; Mountain View, California, to " },
      {
        type: "token",
        id: "tok2",
        text: "$18.85",
        graphic: { kind: "bar", value: 18.85, max: 18.85 },
      },
      { type: "run", text: "; Denver, Colorado, to " },
      {
        type: "token",
        id: "tok3",
        text: "$18.29",
        graphic: { kind: "bar", value: 18.29, max: 18.85 },
      },
      { type: "run", text: "; and Portland, Maine, to " },
      {
        type: "token",
        id: "tok4",
        text: "$15",
        graphic: { kind: "bar", value: 15, max: 18.85 },
      },
      { type: "run", text: "." },
    ],
  },

  statement: [
    {
      text: "Scientific figures typically sit apart from the text that cites them, so readers split attention between text and graphic — an extraneous load that can obscure the argument the figure is meant to support. Word-scale graphics offer a different path: compact visuals rendered at typographic size that fold the evidence back into the sentence itself. Prior work has mapped their design space, reading behaviors, and novel applications, yet how researchers actually put them to use in published papers remains uncharted. We therefore ask: ",
    },
    {
      text: "How do researchers apply word-scale graphics in scientific papers?",
      bold: true,
    },
  ],
};
