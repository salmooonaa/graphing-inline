import type {
  ResultExplorerConnection,
  ResultExplorerDimension,
  ResultExplorerItem,
  ResultPattern,
  ResultsContent,
  ResultsDimensionId,
} from "@/types/content";

export type FocusTarget =
  | {
      type: "item";
      id: string;
    }
  | {
      type: "pattern";
      id: string;
    };

export type ExplorerItemMeta = ResultExplorerItem & {
  dimensionId: ResultsDimensionId;
  dimensionLabel: string;
  dimensionTitle: string;
};

export const dimensionTheme = {
  where: {
    accent: "var(--blue)",
    line: "var(--blue-line)",
    wash: "rgba(77, 101, 128, 0.08)",
    soft: "rgba(77, 101, 128, 0.05)",
  },
  why: {
    accent: "var(--amber)",
    line: "var(--amber-line)",
    wash: "rgba(155, 106, 40, 0.08)",
    soft: "rgba(155, 106, 40, 0.05)",
  },
  how: {
    accent: "var(--green)",
    line: "var(--green-line)",
    wash: "rgba(75, 105, 92, 0.08)",
    soft: "rgba(75, 105, 92, 0.05)",
  },
} as const;

export function sameFocus(a: FocusTarget | null, b: FocusTarget | null) {
  return a?.type === b?.type && a?.id === b?.id;
}

export function buildItemLookup(
  dimensions: ResultExplorerDimension[],
): Array<[string, ExplorerItemMeta]> {
  return dimensions.flatMap((dimension) =>
    dimension.items.map(
      (item): [string, ExplorerItemMeta] => [
        item.id,
        {
          ...item,
          dimensionId: dimension.id,
          dimensionLabel: dimension.label,
          dimensionTitle: dimension.title,
        },
      ],
    ),
  );
}

export function getRelatedStrengths(
  focus: FocusTarget | null,
  connections: ResultExplorerConnection[],
  patterns: ResultPattern[],
) {
  const related = new Map<string, "active" | "primary" | "secondary">();

  if (!focus) {
    return related;
  }

  if (focus.type === "pattern") {
    const pattern = patterns.find((entry) => entry.id === focus.id);

    pattern?.connectedItemIds.forEach((itemId) => {
      related.set(itemId, "primary");
    });

    return related;
  }

  related.set(focus.id, "active");

  connections.forEach((connection) => {
    if (connection.from !== focus.id && connection.to !== focus.id) {
      return;
    }

    const otherId = connection.from === focus.id ? connection.to : connection.from;
    const nextState = connection.strength === "primary" ? "primary" : "secondary";
    const currentState = related.get(otherId);

    if (currentState === "primary") {
      return;
    }

    related.set(otherId, nextState);
  });

  return related;
}

export function getPanelContent(
  content: ResultsContent,
  focus: FocusTarget | null,
  itemLookup: Map<string, ExplorerItemMeta>,
  connections: ResultExplorerConnection[],
  patterns: ResultPattern[],
) {
  const defaultPanel = {
    eyebrow: "Explorer guide",
    title: content.explorer.defaultTitle,
    summary: content.explorer.defaultSummary,
    detail: content.explorer.defaultDetail,
    definitions: content.explorer.definitions,
    facts: [] as string[],
    links: [] as string[],
  };

  if (!focus) {
    return defaultPanel;
  }

  if (focus.type === "pattern") {
    const pattern = patterns.find((entry) => entry.id === focus.id);

    if (!pattern) {
      return defaultPanel;
    }

    return {
      eyebrow: `Pattern ${pattern.rank}`,
      title: pattern.title,
      summary: pattern.summary,
      detail: pattern.evidence,
      definitions: [] as Array<{ term: string; description: string }>,
      facts: [pattern.share, pattern.qualifier],
      links: pattern.pills.map((pill) => pill.label),
    };
  }

  const item = itemLookup.get(focus.id);

  if (!item) {
    return defaultPanel;
  }

  return {
    eyebrow: `${item.dimensionLabel} · ${item.dimensionTitle}`,
    title: item.label,
    summary: item.summary,
    detail: item.detail,
    definitions: [] as Array<{ term: string; description: string }>,
    facts: [item.value, item.note].filter(Boolean) as string[],
    links: connections
      .filter((connection) => connection.from === item.id || connection.to === item.id)
      .map((connection) => connection.explanation),
  };
}
