import type { HomeContent } from "@/types/content";

import { authorsContent } from "./authors";
import { citationContent } from "./citation";
import { contactContent } from "./contact";
import { findingsContent } from "./findings";
import { frameworkContent } from "./framework";
import { heroContent } from "./hero";
import { implicationsContent } from "./implications";
import { methodContent } from "./method";
import { problemContent } from "./problem";
import { resourcesContent } from "./resources";
import { summaryContent } from "./summary";

export const homeContent: HomeContent = {
  hero: heroContent,
  summary: summaryContent,
  problem: problemContent,
  method: methodContent,
  framework: frameworkContent,
  findings: findingsContent,
  implications: implicationsContent,
  authors: authorsContent,
  resources: resourcesContent,
  citation: citationContent,
  contact: contactContent,
};
