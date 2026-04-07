import type { AuthorsContent } from "@/types/content";

export const authorsContent: AuthorsContent = {
  eyebrow: "Authors",
  title: "Authors and affiliations",
  description:
    "The paper is authored by researchers from Tongji University and an independent researcher based in Seattle.",
  items: [
    {
      title: "Tongji University",
      description:
        "Siyu Lu, Yanhan Liu, Ruishi Zou, and Chen Ye.",
      details: ["Shanghai, China"],
    },
    {
      title: "Independent Researcher",
      description:
        "Shiyu Xu.",
      details: ["Seattle, WA, USA"],
    },
    {
      title: "Corresponding author",
      description:
        "Chen Ye.",
      details: ["yechen@tongji.edu.cn"],
    },
  ],
};
