import type { SummaryContent } from "@/types/content";

export const summaryContent: SummaryContent = {
  eyebrow: "Summary",
  title: "The paper contributes a corpus, a framework, and a validated reading of the design space",
  description:
    "Instead of reproducing the paper section by section, this page foregrounds the study’s main evidence, framing devices, and public reference materials.",
  points: [
    {
      value: "126,797",
      title: "Corpus scale",
      description:
        "Computer Science papers screened to identify real uses of word-scale graphics in the wild.",
    },
    {
      value: "where–why–how",
      title: "Analytical frame",
      description:
        "A three-part language for positioning, communicative function, and visual representation.",
    },
    {
      value: "κ = 0.91",
      title: "Validation",
      description:
        "High interrater reliability for the framework on the external validation corpus.",
    },
  ],
};
