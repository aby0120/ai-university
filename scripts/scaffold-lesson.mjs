import fs from "node:fs";
import path from "node:path";
import { root, allLessons } from "./content-utils.mjs";
const id = process.argv[2];
if (!id || !/^[a-z][a-z0-9-]*$/.test(id))
  throw Error("Usage: npm run content:scaffold -- new-concept-id");
const draft = structuredClone(allLessons[0]);
draft.id = id;
draft.title = "TODO: title";
draft.chapterId = "TODO";
draft.number = "1.1";
draft.prerequisites = [];
draft.workedExamples.forEach((e) => {
  e.problem = "TODO";
  e.answer = "TODO";
  e.steps = ["TODO", "TODO"];
});
draft.commonMistakes.forEach((m, i) => {
  m.id = `${id}-m${i + 1}`;
  m.claim = "TODO";
  m.correction = "TODO";
});
draft.misconceptionTags = draft.commonMistakes.map((m) => m.id);
draft.practice.forEach((q, i) => {
  q.id = `${id}-p${i + 1}`;
  q.problem = "TODO";
  q.answer = "TODO";
  q.solution = ["TODO"];
  q.hint = "TODO";
  q.misconceptionTags = [draft.misconceptionTags[0]];
  delete q.numericAnswer;
});
for (const key of ["subtitle", "concept", "intuition"]) draft[key] = "TODO";
draft.objectives = ["TODO", "TODO"];
draft.body = [
  { title: "TODO", text: "TODO" },
  { title: "TODO", text: "TODO" },
  { title: "TODO", text: "TODO" },
];
draft.formalDefinition = { text: "TODO", latex: "TODO", conditions: ["TODO"] };
draft.derivation = [
  { text: "TODO", latex: null },
  { text: "TODO", latex: null },
  { text: "TODO", latex: null },
];
draft.interactiveVisual.caption = "TODO";
draft.interactiveVisual.prediction = "TODO";
draft.learningCheck = {
  question: "TODO",
  choices: ["TODO A", "TODO B", "TODO C"],
  correctIndex: 0,
  explanation: "TODO",
};
fs.mkdirSync(path.join(root, "drafts"), { recursive: true });
const file = path.join(root, "drafts", `${id}.json`);
fs.writeFileSync(file, JSON.stringify(draft, null, 2) + "\n", { flag: "wx" });
console.log(
  `Draft scaffold created: ${file}. Fill every field; then register in book.json. TODO is rejected by the content validator.`,
);
