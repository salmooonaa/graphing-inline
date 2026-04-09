import type { ProblemContent } from "@/types/content";

export const problemContent: ProblemContent = {
  eyebrow: "Motivation",
  title: "Motivation",
  description:
    "Why word-scale graphics matter in scholarly communication.",
  points: [
    {
      label: "01",
      title: "Standalone figures create split attention",
      description:
        "Readers often jump between prose and distant figures to reconstruct meaning.",
      evidence:
        "Split attention increases reading burden.",
    },
    {
      label: "02",
      title: "Word-scale graphics keep evidence in the flow",
      description:
        "Inline visuals can sit directly inside text or tables instead of outside them.",
      evidence:
        "They promise tighter links between text and evidence.",
    },
    {
      label: "03",
      title: "The field lacks an in-the-wild account",
      description:
        "We still know little about how these graphics are actually used in published papers.",
      evidence:
        "That gap motivates the corpus study.",
    },
  ],
};
