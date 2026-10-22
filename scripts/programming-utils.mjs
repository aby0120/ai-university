import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
export const programmingBooks=read('packages/content/programming.json').map(entry=>{
  const directory=`packages/content/${entry.directory}`;
  const book=read(`${directory}/book.json`), extra=read(`${directory}/supplements.json`);
  const lessons=book.chapters.flatMap(c=>c.lessons.map(id=>read(`${directory}/lessons/${id}.json`)));
  return {...entry,directory,book,lessons,extra};
});
export const programmingStats=c=>({chapters:c.book.chapters.length,lessons:c.lessons.length,examples:c.lessons.reduce((n,l)=>n+l.workedExamples.length,0),exercises:c.lessons.reduce((n,l)=>n+l.practice.length,0)+c.extra.exam.length+c.extra.chapterReviews.reduce((n,r)=>n+r.questions.length,0)});
