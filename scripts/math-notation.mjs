import katex from 'katex';
import { splitMathText, assertMathText } from '../packages/content/math-text.mjs';
const metadata = new Set(['id','chapterId','lessonId','lessonIds','prerequisites','misconceptionTags','sources','provenance','kind','function','url','route','areaId','coverTitle','coverFormula','author','version','language']);
/** Validate authored notation; never rewrite or guess the mathematics. */
export function validateMathNotation(value, context = 'content') {
  if (Array.isArray(value)) return value.forEach((item,index) => validateMathNotation(item,`${context}[${index}]`));
  if (value && typeof value === 'object') {
    for (const [key,item] of Object.entries(value)) {
      if (metadata.has(key)) continue;
      if (key === 'latex' && typeof item === 'string') {
        katex.renderToString(item,{throwOnError:true,trust:false,strict:'ignore'});
      } else validateMathNotation(item,`${context}.${key}`);
    }
    return;
  }
  if (typeof value !== 'string') return;
  assertMathText(value,context);
  for (const part of splitMathText(value)) if (part.kind === 'math') {
    if (/[√²³⁴⁵⁶⁷⁸⁹ⁿˣ₀₁₂₃₄₅₆₇₈₉]/.test(part.value)) throw new Error(`${context}: use TeX roots and scripts`);
    katex.renderToString(part.value,{throwOnError:true,trust:false,strict:'ignore'});
  }
}
