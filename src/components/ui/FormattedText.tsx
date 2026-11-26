import type { ReactNode } from "react";

/**
 * Lightweight inline formatter for **bold**, *italic*, and `code` spans
 * without pulling in a full markdown parser dependency.
 */
export function FormattedText({ text }: { text: string }) {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g);

  return (
    <>
      {tokens.map((token, idx): ReactNode => {
        if (token.startsWith("**") && token.endsWith("**")) {
          return (
            <strong key={idx} className="font-semibold text-primary">
              {token.slice(2, -2)}
            </strong>
          );
        }
        if (token.startsWith("`") && token.endsWith("`")) {
          return (
            <code
              key={idx}
              className="rounded bg-subtle px-1.5 py-0.5 font-mono text-[0.875em] text-primary"
            >
              {token.slice(1, -1)}
            </code>
          );
        }
        if (token.startsWith("*") && token.endsWith("*") && token.length > 2) {
          return (
            <em key={idx} className="italic">
              {token.slice(1, -1)}
            </em>
          );
        }
        return token;
      })}
    </>
  );
}
