import katex from "katex";
import { Fragment } from "react";
export function Formula({
  latex,
  display = false,
}: {
  latex: string;
  display?: boolean;
}) {
  const html = katex.renderToString(latex, {
    displayMode: display,
    throwOnError: false,
    trust: false,
    strict: "ignore",
  });
  return (
    <span
      className={display ? "formula display" : "formula"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
export function MathText({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(\$\$[\s\S]*?\$\$|\$[^$]+\$)/g)
        .map((part, i) =>
          part.startsWith("$$") ? (
            <Formula key={i} display latex={part.slice(2, -2)} />
          ) : part.startsWith("$") ? (
            <Formula key={i} latex={part.slice(1, -1)} />
          ) : (
            <Fragment key={i}>{part}</Fragment>
          ),
        )}
    </>
  );
}
