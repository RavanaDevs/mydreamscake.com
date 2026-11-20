import type { ComponentProps } from "react";

/** A plain text link that opens another site in a new tab. */
export function ExternalLink(props: Omit<ComponentProps<"a">, "target" | "rel">) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
