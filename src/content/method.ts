import type { MethodContent } from "@/types/content";

export const methodContent: MethodContent = {
  eyebrow: "Method",
  title: "A four-stage corpus study pipeline",
  description:
    "The paper uses a four-stage pipeline to define the corpus, locate candidate graphics, annotate them, and validate the study results.",
  phases: [
    {
      title: "Preparation",
      description:
        "Define the paper corpus, study scope, and the materials prepared for downstream analysis.",
    },
    {
      title: "Extraction",
      description:
        "Identify candidate word-scale graphics and collect the evidence needed for inspection.",
    },
    {
      title: "Annotation",
      description:
        "Characterize use cases through positioning, communicative function, and visual representation.",
    },
    {
      title: "Validation",
      description:
        "Check the reliability of the coding process and the consistency of the reported observations.",
    },
  ],
};
