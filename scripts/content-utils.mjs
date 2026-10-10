import fs from "node:fs";
import path from "node:path";
export const root = path.resolve(import.meta.dirname, "..");
export const book = JSON.parse(
  fs.readFileSync(path.join(root, "packages/content/book.json"), "utf8"),
);
export const allLessons = book.lessonIds.map((id) =>
  JSON.parse(
    fs.readFileSync(
      path.join(root, `packages/content/lessons/${id}.json`),
      "utf8",
    ),
  ),
);
export function walkStrings(value, fn, key = "") {
  if (typeof value === "string") fn(value, key);
  else if (value && typeof value === "object")
    for (const [k, v] of Object.entries(value)) walkStrings(v, fn, k);
}
