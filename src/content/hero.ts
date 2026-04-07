import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Paper Project",
  title:
    "Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers",
  description:
    "A corpus study of how word-scale graphics appear, function, and communicate within scientific papers.",
  status: "Public paper resources will appear here as they become available.",
  actions: [
    { label: "View Summary", href: "#summary", variant: "primary" },
    { label: "Browse Findings", href: "#findings", variant: "secondary" },
    { label: "Open Resources", href: "#resources", variant: "secondary" },
  ],
};
