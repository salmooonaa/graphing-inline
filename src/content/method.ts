import type { MethodContent } from "@/types/content";

export const methodContent: MethodContent = {
  eyebrow: "Method",
  title: "A four-stage corpus study pipeline",
  description:
    "The paper studies word-scale graphics through four linked stages that move from heuristic formation to corpus-scale extraction, coding, and framework validation.",
  phases: [
    {
      title: "Preparation",
      input: ["1,080 IEEE VIS papers published between 2017 and 2025."],
      process: [
        "One author manually browsed the VIS papers and identified 103 papers containing word-scale graphics.",
        "The team used this smaller corpus to observe how word-scale graphics were rendered in HTML, including graphic-related tags nested inside inline containers.",
        "The team also derived a practical size heuristic for candidate retrieval.",
      ],
      output: [
        "A VIS corpus of 103 valid papers.",
        "Initial HTML retrieval rules, including a height threshold of under 70px.",
      ],
    },
    {
      title: "Extraction",
      input: [
        "The HTML retrieval rules from Preparation.",
        "125,577 arXiv Computer Science papers from 2024.",
      ],
      process: [
        "An automated script crawled the HTML renders of all arXiv CS papers in scope.",
        "The script applied two filters derived from Stage 1: a tag filter centered on inline containers and a size filter enforcing height under 70px.",
        "The extraction pass also accounted for the fact that graphics embedded in text and tables share the same HTML structure.",
      ],
      output: ["5,006 candidate papers likely containing word-scale graphics."],
    },
    {
      title: "Annotation",
      input: [
        "The VIS corpus and 5,006 extracted arXiv candidates.",
        "An initial inductive codebook seeded from the VIS analysis.",
      ],
      process: [
        "Three coders independently coded the VIS corpus and synthesized an initial codebook through discussion.",
        "Two authors partitioned the arXiv candidates, annotated them independently, and regularly resolved ambiguous cases together.",
        "After finalizing the valid arXiv corpus, the team combined VIS and arXiv materials to refine the visual representation dimension alongside positioning and communicative function.",
      ],
      output: [
        "585 valid arXiv papers containing word-scale graphics.",
        "A where-why-how framework covering positioning, communicative function, and visual representation.",
      ],
    },
    {
      title: "Validation",
      input: ["140 papers from the Beck and Weiskopf corpus."],
      process: [
        "Two coders deductively applied the resulting framework to the validation corpus.",
        "The team measured interrater reliability to test whether the framework held up beyond the original annotation set.",
      ],
      output: [
        "A validated framework with Cohen's kappa of 0.91.",
        "Evidence that the coding scheme is reliable for describing word-scale graphics in scientific papers.",
      ],
    },
  ],
  note:
    "The paper’s final integrated results combine the VIS, arXiv, and validation corpora into 718 unique papers and 909 distinct use cases.",
};
