import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import assert from "node:assert/strict";
import Ajv from "ajv";
import katex from "katex";
import { book, allLessons, walkStrings, root } from "./content-utils.mjs";
import { functions } from "../packages/visuals/math.mjs";
export function validateContent() {
  const schema = JSON.parse(
    fs.readFileSync(`${root}/schemas/learning-object.schema.json`, "utf8"),
  );
  const validate = new Ajv({ allErrors: true }).compile(schema),
    ids = new Set(),
    byId = Object.fromEntries(allLessons.map((l) => [l.id, l])),
    sourceIds = new Set(book.sources.map((s) => s.id));
  let mathCount = 0;
  for (const l of allLessons) {
    assert(validate(l), `${l.id}: ${JSON.stringify(validate.errors)}`);
    assert(
      l.learningCheck.correctIndex < l.learningCheck.choices.length,
      `${l.id}: invalid learning check answer`,
    );
    assert(!ids.has(l.id), `Duplicate lesson ${l.id}`);
    ids.add(l.id);
    assert(
      functions[l.interactiveVisual.function],
      `${l.id}: missing visual function`,
    );
    assert(
      l.prerequisites.every((id) => byId[id]),
      `${l.id}: unknown prerequisite`,
    );
    assert(
      l.sources.every((id) => sourceIds.has(id)),
      `${l.id}: unknown source`,
    );
    assert(
      l.practice.every((q) =>
        q.misconceptionTags.every((id) => l.misconceptionTags.includes(id)),
      ),
      `${l.id}: unknown misconception tag`,
    );
    assert(
      new Set(l.practice.map((q) => q.id)).size === l.practice.length,
      `${l.id}: duplicate question id`,
    );
    walkStrings(l, (s, key) => {
      assert(
        !/[\x00-\x08\x0b-\x1f]/.test(s),
        `${l.id}: control character in ${key}`,
      );
      if (key === "latex") {
        katex.renderToString(s, {
          throwOnError: true,
          strict: "ignore",
          trust: false,
        });
        mathCount++;
      }
      for (const m of s.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g)) {
        katex.renderToString(m[1] ?? m[2], {
          throwOnError: true,
          strict: "ignore",
          trust: false,
        });
        mathCount++;
      }
      assert(
        !/TODO|TBD|待补|lorem ipsum/i.test(s),
        `${l.id}: placeholder found`,
      );
    });
  }
  const sorted = book.chapters.flatMap((c, ci) =>
    c.lessonIds.map((id, li) => {
      const l = byId[id];
      assert(l && l.chapterId === c.id, `Broken chapter link ${id}`);
      assert.equal(l.number, `${ci + 1}.${li + 1}`);
      return id;
    }),
  );
  assert.deepEqual(sorted, book.lessonIds);
  assert.equal(new Set(sorted).size, sorted.length);
  const visiting = new Set(),
    visited = new Set();
  function visit(id) {
    assert(!visiting.has(id), `Prerequisite cycle at ${id}`);
    if (visited.has(id)) return;
    visiting.add(id);
    for (const p of byId[id].prerequisites) visit(p);
    visiting.delete(id);
    visited.add(id);
  }
  for (const id of ids) visit(id);
  for (const l of allLessons)
    for (const p of l.prerequisites)
      assert(
        book.lessonIds.indexOf(p) < book.lessonIds.indexOf(l.id),
        `Forward prerequisite ${p} -> ${l.id}`,
      );
  const onDisk = fs
    .readdirSync(`${root}/packages/content/lessons`)
    .filter((p) => p.endsWith(".json"))
    .map((p) => p.slice(0, -5))
    .sort();
  assert.deepEqual(onDisk, [...ids].sort(), "Unlisted lesson file");
  const extra = JSON.parse(
    fs.readFileSync(`${root}/packages/content/supplements.json`, "utf8"),
  );
  assert.deepEqual(
    extra.reviews.map((r) => r.chapterId),
    book.chapters.map((c) => c.id),
  );
  const more = [...extra.exam, ...extra.reviews.flatMap((r) => r.questions)];
  assert.equal(new Set(more.map((q) => q.id)).size, more.length);
  for (const q of more) {
    assert(
      q.problem && q.answer && q.hint && q.solution.length,
      "Incomplete review question",
    );
    assert(q.difficulty >= 1 && q.difficulty <= 6);
  }
  assert(
    extra.glossary.every((g) => byId[g.lessonId]),
    "Unlinked glossary term",
  );
  walkStrings(extra, (s) => {
    assert(!/[\x00-\x08\x0b-\x1f]/.test(s), "Control character in supplement");
    for (const m of s.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g)) {
      katex.renderToString(m[1] ?? m[2], {
        throwOnError: true,
        strict: "ignore",
        trust: false,
      });
      mathCount++;
    }
  });
  const library = JSON.parse(
    fs.readFileSync(`${root}/packages/content/library.json`, "utf8"),
  );
  const librarySchema = JSON.parse(
    fs.readFileSync(`${root}/schemas/library.schema.json`, "utf8"),
  );
  const validateLibrary = new Ajv({ allErrors: true }).compile(librarySchema);
  assert(
    validateLibrary(library),
    `Library: ${JSON.stringify(validateLibrary.errors)}`,
  );
  const areaIds = new Set(library.areas.map((a) => a.id));
  assert.equal(
    areaIds.size,
    library.areas.length,
    "Duplicate mathematics area",
  );
  assert.equal(
    new Set(library.volumes.map((v) => v.id)).size,
    library.volumes.length,
    "Duplicate catalog volume",
  );
  const published = library.volumes.filter((v) => v.status === "published");
  for (const volume of library.volumes)
    assert(areaIds.has(volume.areaId), `Unknown area: ${volume.id}`);
  // Publication requires a complete canonical book, not just a catalog card.
  assert.deepEqual(
    published.map((v) => v.id).sort(),
    [book.id],
    "Published catalog must match implemented books",
  );
  for (const volume of published) {
    assert.equal(volume.route, `book/${volume.id}`);
    assert.deepEqual(volume.stats, {
      chapters: book.chapters.length,
      lessons: allLessons.length,
      examples: allLessons.reduce((n, l) => n + l.workedExamples.length, 0),
      exercises:
        allLessons.reduce((n, l) => n + l.practice.length, 0) + more.length,
    });
    katex.renderToString(volume.coverFormula, {
      throwOnError: true,
      strict: "ignore",
      trust: false,
    });
  }
  return {
    mathematicsAreas: library.areas.length,
    catalogVolumes: library.volumes.length,
    publishedVolumes: published.length,
    chapters: book.chapters.length,
    sections: ids.size,
    examples: allLessons.reduce((n, l) => n + l.workedExamples.length, 0),
    exercises: allLessons.reduce((n, l) => n + l.practice.length, 0),
    reviewAndExamExercises: more.length,
    renderedFormulas: mathCount,
  };
}
if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url))
  console.log(JSON.stringify(validateContent(), null, 2));
