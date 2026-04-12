import type {
  ResultBoardAxis,
  ResultBoardConnection,
  ResultBoardNode,
  ResultsContent,
  ResultsDimensionId,
} from "@/types/content";

export type FocusTarget = {
  type: "item";
  id: string;
};

export type BoardNodeMeta = ResultBoardNode & {
  dimensionId: ResultsDimensionId;
  dimensionLabel: string;
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

export function buildNodeLookup(
  axes: ResultBoardAxis[],
): Array<[string, BoardNodeMeta]> {
  return axes.flatMap((axis) =>
    axis.items.map(
      (item): [string, BoardNodeMeta] => [
        item.id,
        {
          ...item,
          dimensionId: axis.id,
          dimensionLabel: axis.label,
        },
      ],
    ),
  );
}

export function getRelatedStrengths(
  focus: FocusTarget | null,
  connections: ResultBoardConnection[],
) {
  const related = new Map<string, "active" | "primary" | "secondary">();

  if (!focus) {
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
  nodeLookup: Map<string, BoardNodeMeta>,
  connections: ResultBoardConnection[],
) {
  const defaultPanel = {
    eyebrow: "Default view",
    title: content.defaultPanel.title,
    definition: content.defaultPanel.definition,
    metric: "",
    count: "",
    strongestLink: content.defaultPanel.strongestLink,
    insight: content.defaultPanel.insight,
  };

  if (!focus) {
    return defaultPanel;
  }

  const node = nodeLookup.get(focus.id);

  if (!node) {
    return defaultPanel;
  }

  const strongestConnection =
    connections.find(
      (connection) =>
        (connection.from === node.id || connection.to === node.id) &&
        connection.strength === "primary",
    ) ??
    connections.find(
      (connection) => connection.from === node.id || connection.to === node.id,
    );
  const relatedId = strongestConnection
    ? strongestConnection.from === node.id
      ? strongestConnection.to
      : strongestConnection.from
    : "";
  const relatedLabel = relatedId ? nodeLookup.get(relatedId)?.label ?? "" : "";

  return {
    eyebrow: node.dimensionLabel,
    title: node.label,
    definition: node.definition,
    metric: node.value,
    count: node.count ?? "",
    strongestLink: relatedLabel || strongestConnection?.summary || "",
    insight: node.insight,
  };
}
