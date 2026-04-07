import type { ProblemContent } from "@/types/content";

export const problemContent: ProblemContent = {
  eyebrow: "Problem",
  title: "The study starts from a reading problem and a corpus gap",
  description:
    "The paper argues that word-scale graphics matter because scholarly reading often separates prose from evidence, while real-world use in scientific writing remains under-documented.",
  points: [
    {
      label: "01",
      title: "Standalone figures create split attention",
      description:
        "Scientific papers often place figures and charts away from the sentence that references them. Readers must alternate between prose and standalone graphics to reconstruct the author’s intended connection.",
      evidence:
        "The introduction frames this as the split-attention effect: a division of attention that adds extraneous cognitive load and hinders comprehension.",
    },
    {
      label: "02",
      title: "Word-scale graphics can keep visual evidence inside the reading flow",
      description:
        "Prior work shows that typographically sized graphics can be embedded directly in text or tables, making the surrounding sentence more expressive without forcing readers to leave the local context.",
      evidence:
        "The paper positions word-scale graphics as compact visuals that range from letter height to sentence or paragraph size and support multiple visual encodings.",
    },
    {
      label: "03",
      title: "Scholarly communication lacks an in-the-wild account",
      description:
        "Earlier work largely studied design spaces, applications, or data-driven examples, but left open how both data-driven and non-data-driven word-scale graphics are actually used in published scientific papers.",
      evidence:
        "This motivates the paper’s research question: how do researchers apply word-scale graphics in scientific papers?",
    },
  ],
};
