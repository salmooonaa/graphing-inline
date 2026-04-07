import type { ImplicationsContent } from "@/types/content";

export const implicationsContent: ImplicationsContent = {
  eyebrow: "Implications",
  title: "The discussion points to support for authors, readers, and publication systems",
  description:
    "The paper turns the corpus findings into practical directions for scholarly communication, emphasizing tool support and infrastructure rather than promotional claims.",
  conclusion:
    "The discussion argues that wider adoption depends on better creation support, more interactive reading experiences, and less restrictive publishing pipelines.",
  items: [
    {
      title: "Authoring support",
      conclusion:
        "Creation needs to become easier before richer word-scale graphics will spread.",
      explanation:
        "The paper suggests tools that link graphic entities to representations, especially for data-driven cases that are harder to author at typographic size.",
      support:
        "One direction named in the discussion is dynamic text–data linkage, potentially supported by newer authoring tools.",
    },
    {
      title: "Interactive reading support",
      conclusion:
        "Reading support should treat papers as interactive rather than static containers.",
      explanation:
        "The discussion argues that current papers remain static even in HTML renderings, limiting the ability of word-scale graphics to help readers navigate and inspect meaning in context.",
      support:
        "The paper explicitly calls for further consideration of interactivity in scientific papers through toolkits for augmented scholarly communication.",
    },
    {
      title: "Publishing workflow support",
      conclusion:
        "Infrastructure can block adoption even when the design idea is useful.",
      explanation:
        "The paper points to restrictive production workflows that constrain packages, dependencies, and cross-format support, making expressive inline graphics harder to publish.",
      support:
        "The authors advocate more flexible publication processes so word-scale graphics can survive both PDF and HTML pipelines.",
    },
  ],
  figure: {
    title: "Support directions derived from the discussion",
    caption:
      "Implications figure. The paper translates corpus observations into three intervention points: creation, reading, and publication infrastructure.",
    steps: [
      {
        label: "A",
        title: "Authoring",
        summary:
          "Help authors generate and maintain links between inline graphics, text entities, and data.",
      },
      {
        label: "B",
        title: "Reading",
        summary:
          "Expose interaction so readers can inspect, follow, and interpret word-scale graphics in context.",
      },
      {
        label: "C",
        title: "Publishing",
        summary:
          "Reduce workflow restrictions that currently limit expressive inline graphics in publication systems.",
      },
    ],
  },
};
