import metadata from "./book.json";
import type { Lesson } from "./types";
const modules = import.meta.glob("./lessons/*.json", {
  eager: true,
  import: "default",
}) as Record<string, Lesson>;
export const book = metadata;
export const lessons = book.lessonIds.map(
  (id) => modules[`./lessons/${id}.json`],
);
export const lessonById = Object.fromEntries(lessons.map((l) => [l.id, l]));
