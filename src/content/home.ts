import type { HomeContent } from "@/types/content";

        export const homeContent: HomeContent = {
          hero: {
            eyebrow: "Paper Project",
            title:
              "Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers",
            description:
              "A project site scaffold for a corpus study of how word-scale graphics appear, function, and communicate within scientific papers.",
            status: "Initial engineering scaffold for the public project site.",
            actions: [
              { label: "View Summary", href: "#summary", variant: "primary" },
              { label: "Browse Findings", href: "#findings", variant: "secondary" },
              { label: "Open Resources", href: "#resources", variant: "secondary" },
            ],
          },
          summary: {
            eyebrow: "Summary",
            title: "What this project studies",
            description:
              "This site will introduce the paper through a clear public narrative, with structure separated from final copy so the homepage can grow without rewriting layout code.",
            points: [
              {
                title: "Research scope",
                description:
                  "The paper studies real-world uses of word-scale graphics in scientific papers.",
              },
              {
                title: "Study design",
                description:
                  "The public homepage will present the corpus study, the analysis framework, and the core findings in a reader-friendly order.",
              },
              {
                title: "Public outputs",
                description:
                  "Paper resources, citation material, and project links will be exposed through dedicated sections instead of hard-coded page prose.",
              },
            ],
          },
          problem: {
            eyebrow: "Problem",
            title: "Why word-scale graphics deserve focused study",
            description:
              "The site will explain the motivation for examining tiny visual elements inside papers, the gap in understanding their use, and the research questions addressed by the study.",
            points: [
              {
                title: "Scholarly communication gap",
                description:
                  "Small inline graphics can influence how authors structure meaning, but their use is rarely documented at corpus scale.",
              },
              {
                title: "Need for explanation",
                description:
                  "Readers need a concise account of where these graphics appear, why authors use them, and how they are represented.",
              },
              {
                title: "Homepage role",
                description:
                  "This section will later host the final public research questions and motivation text drawn from the paper.",
              },
            ],
          },
          method: {
            eyebrow: "Method",
            title: "Four stages organize the corpus study",
            description:
              "The homepage skeleton already reserves a structured space for the study pipeline so the final site can explain process without dropping into paper-length prose.",
            phases: [
              {
                title: "Preparation",
                description:
                  "Define the paper corpus, the study scope, and the material prepared for downstream analysis.",
              },
              {
                title: "Extraction",
                description:
                  "Identify candidate word-scale graphics and collect the evidence needed for inspection.",
              },
              {
                title: "Annotation",
                description:
                  "Apply the study framework to characterize positioning, communicative function, and visual representation.",
              },
              {
                title: "Validation",
                description:
                  "Check the reliability of the coding process and confirm the consistency of the reported findings.",
              },
            ],
          },
          framework: {
            eyebrow: "Framework",
            title: "The public narrative centers on where, why, and how",
            description:
              "A dedicated framework section makes room for the core analytical lens from the paper before the final figures and captions are attached.",
            dimensions: [
              {
                value: "Where",
                title: "Positioning",
                description:
                  "Where the word-scale graphic appears within the surrounding document structure.",
              },
              {
                value: "Why",
                title: "Communicative function",
                description:
                  "What role the graphic plays in helping the paper communicate meaning.",
              },
              {
                value: "How",
                title: "Visual representation",
                description:
                  "How the graphic is visually encoded, including the forms authors use in practice.",
              },
            ],
          },
          findings: {
            eyebrow: "Findings",
            title: "Key quantitative findings can plug into this scaffold",
            description:
              "The section is ready for final charts, captions, and evidence cards. For now it preserves the public structure around the paper's main takeaways.",
            items: [
              {
                value: "718",
                title: "Unique papers",
                description:
                  "The study reports 718 unique papers that contain relevant use cases.",
              },
              {
                value: "909",
                title: "Distinct use cases",
                description:
                  "The corpus analysis identifies 909 distinct instances of word-scale graphics use.",
              },
              {
                value: "0.6%",
                title: "Observed prevalence",
                description:
                  "The current scaffold reserves space for the reported prevalence of word-scale graphics across the paper set.",
              },
              {
                title: "Dominant visual form",
                description:
                  "The final public copy will highlight that icons are a dominant representation in the observed corpus.",
              },
              {
                title: "Structured associations",
                description:
                  "The site will later explain the relationship between text or table contexts and communicative function.",
              },
            ],
          },
          implications: {
            eyebrow: "Implications",
            title: "Design implications stay connected to the paper",
            description:
              "This section holds the public-facing project implications that follow directly from the study rather than from internal planning material.",
            items: [
              {
                title: "Authoring support",
                description:
                  "Potential tools could help authors place and manage word-scale graphics more intentionally during paper writing.",
              },
              {
                title: "Interactive reading support",
                description:
                  "Reader-facing interfaces could make these compact graphics easier to notice, interpret, and connect to surrounding text.",
              },
              {
                title: "Publishing workflow support",
                description:
                  "Publication systems could better preserve and communicate the role of inline graphics in scholarly documents.",
              },
            ],
          },
          authors: {
            eyebrow: "Authors",
            title: "Author metadata will drop into a dedicated block",
            description:
              "The public site should expose authorship clearly, but this scaffold avoids inventing names before the final metadata is ready.",
            items: [
              {
                title: "Author list",
                description:
                  "Author names and affiliations will be populated from the official paper record.",
              },
              {
                title: "Corresponding contact",
                description:
                  "The final site will place contact ownership here once the public contact route is confirmed.",
              },
            ],
          },
          resources: {
            eyebrow: "Resources",
            title: "Resource slots are ready without dead public links",
            description:
              "The public repository can safely ship the section structure now and attach final files or external links later.",
            items: [
              {
                name: "Paper PDF",
                description:
                  "The final PDF will be linked from this section when the public file path is ready.",
                status: "Planned",
              },
              {
                name: "Poster",
                description:
                  "Poster materials can be attached here once the project files are finalized for release.",
                status: "Planned",
              },
              {
                name: "Code repository",
                description:
                  "Repository and implementation links can be surfaced here when the public code scope is ready.",
                status: "In Preparation",
              },
            ],
          },
          citation: {
            eyebrow: "Citation",
            title: "Citation content has a dedicated rendering block",
            description:
              "The final site should expose citation-ready text and BibTeX without mixing that material into the page layout code.",
            citationText:
              "Full citation details will be inserted here once the public publication metadata is finalized.",
            bibtex: `@misc{graphing-inline,
  title = {Graphing Inline: Understanding Word-scale Graphics Use in Scientific Papers},
  note = {Full citation metadata will be added here.}
}`,
          },
          contact: {
            eyebrow: "Contact",
            title: "Project contact remains a separate public section",
            description:
              "The homepage layout is prepared for a stable public contact block once the paper's final contact information is confirmed.",
            items: [
              {
                label: "Project contact",
                value: "To be added with the public author metadata.",
              },
              {
                label: "Repository",
                value: "Public repository links can be surfaced through the Resources section.",
                href: "#resources",
              },
            ],
          },
        };
