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
export const contentBooks = [
  {
    book,
    allLessons,
    extra: JSON.parse(
      fs.readFileSync(`${root}/packages/content/supplements.json`),
    ),
    directory: "packages/content/lessons",
    filename: "Calculus-I.md",
    printFile: "book.html",
  },
];
const book2 = JSON.parse(
  fs.readFileSync(`${root}/packages/content/calculus-2/book.json`),
);
contentBooks.push({
  book: book2,
  allLessons: book2.lessonIds.map((id) =>
    JSON.parse(
      fs.readFileSync(`${root}/packages/content/calculus-2/lessons/${id}.json`),
    ),
  ),
  extra: JSON.parse(
    fs.readFileSync(`${root}/packages/content/calculus-2/supplements.json`),
  ),
  directory: "packages/content/calculus-2/lessons",
  filename: "Calculus-II.md",
  printFile: "calculus-2.html",
});
const book3 = JSON.parse(
  fs.readFileSync(root + "/packages/content/calculus-3/book.json"),
);
contentBooks.push({
  book: book3,
  allLessons: book3.lessonIds.map((id) =>
    JSON.parse(
      fs.readFileSync(
        root + "/packages/content/calculus-3/lessons/" + id + ".json",
      ),
    ),
  ),
  extra: JSON.parse(
    fs.readFileSync(root + "/packages/content/calculus-3/supplements.json"),
  ),
  directory: "packages/content/calculus-3/lessons",
  filename: "Calculus-III.md",
  printFile: "calculus-3.html",
});
const book4 = JSON.parse(fs.readFileSync(root + '/packages/content/linear-algebra/book.json'));
contentBooks.push({book:book4,
  allLessons:book4.lessonIds.map(id=>JSON.parse(fs.readFileSync(root+'/packages/content/linear-algebra/lessons/'+id+'.json'))),
  extra:JSON.parse(fs.readFileSync(root+'/packages/content/linear-algebra/supplements.json')),
  directory:'packages/content/linear-algebra/lessons',filename:'Linear-Algebra.md',printFile:'linear-algebra.html'});
export const libraryLessons = contentBooks.flatMap((c) => c.allLessons);
export function walkStrings(value, fn, key = "") {
  if (typeof value === "string") fn(value, key);
  else if (value && typeof value === "object")
    for (const [k, v] of Object.entries(value)) walkStrings(v, fn, k);
}
