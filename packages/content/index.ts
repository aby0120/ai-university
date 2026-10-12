import metadata from "./book.json";
import supplements from "./supplements.json";
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

export const bookStats = { chapters: book.chapters.length, lessons: lessons.length, examples: lessons.reduce((n,l)=>n+l.workedExamples.length,0), exercises: lessons.reduce((n,l)=>n+l.practice.length,0)+supplements.exam.length+supplements.reviews.reduce((n,r)=>n+r.questions.length,0) };
