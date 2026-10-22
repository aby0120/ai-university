import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import { allLessons, book, root } from './content-utils.mjs';
import { splitMathText, plainMathText, assertMathText, mathDisplayMode } from '../packages/content/math-text.mjs';
import { validateMathNotation } from './math-notation.mjs';
import { functions } from '../packages/visuals/math.mjs';

test('unmarked notation and damaged delimiters cannot enter canonical content', () => {
  for (const text of ['f(x)=1/√(x−2)','x ≥ 2','f′(x)','求 $x^2','答案 $\\sqrt{x}']) {
    assert.throws(() => assertMathText(text), /unmarked|unmatched/);
  }
  assert.throws(() => validateMathNotation({question:'$\\sqrt{$'}), /ParseError/);
  assert.throws(() => validateMathNotation({answer:'$2%$'}), /unescaped percent/);
  assert.throws(() => validateMathNotation({latex:'2%+3'}), /unescaped percent/);
  assert.doesNotThrow(() => validateMathNotation({answer:'$2\\%$'}));
  assert.doesNotThrow(() => validateMathNotation({question:'$f(x)=\\frac{1}{\\sqrt{x-2}}$，哪些 $x$ 可以代入？'}));
});
test('inline and multiline display notation use the same explicit token contract', () => {
  const parts = splitMathText('令 $x>2$。\n$$\n\\frac{1}{\\sqrt{x-2}}\n$$\n再检查。');
  assert.deepEqual(parts.filter(p=>p.kind==='math').map(p=>p.display),[false,true]);
  assert.equal(parts.map(p=>p.kind==='text'?p.value:(p.display?'$$'+p.value+'$$':'$'+p.value+'$')).join(''),'令 $x>2$。\n$$\n\\frac{1}{\\sqrt{x-2}}\n$$\n再检查。');
  assert.equal(plainMathText('$\\varepsilon$–$\\delta$：把靠近说精确'),'ε–δ：把靠近说精确');
  assert.equal(plainMathText('$\\frac{1}{x}$'),'1/x');
  assert.equal(plainMathText('$\\frac{1}{\\sqrt{x-2}}$'),'1/√(x-2)');
  assert.equal(mathDisplayMode('x'),false);
  assert.equal(mathDisplayMode('x',true),true);
  assert.equal(mathDisplayMode('x+'.repeat(50)+'1'),true);
});
test('the reported question contains a real fraction, square root, and mathematical choices', () => {
  const check = allLessons.find(l=>l.id==='domain').learningCheck;
  const latex = splitMathText(check.question).filter(p=>p.kind==='math')[0].value;
  const html = katex.renderToString(latex,{throwOnError:true,trust:false});
  assert.match(html, /<mfrac>/);
  assert.match(html, /<msqrt>/);
  assert.equal(check.correctIndex,1);
  check.choices.forEach(choice=>assert.equal(splitMathText(choice).filter(p=>p.kind==='math').length,1));
});
test('all textbook surfaces and visualization labels obey the notation contract', () => {
  allLessons.forEach(l=>validateMathNotation(l,l.id));
  const supplements=JSON.parse(fs.readFileSync(`${root}/packages/content/supplements.json`));
  validateMathNotation(supplements,'supplements');
  validateMathNotation(book.chapters,'chapters');
  Object.entries(functions).forEach(([id,f])=>validateMathNotation({label:f.label},id));
  const formulas=allLessons.find(l=>l.id==='antiderivatives').body.flatMap(b=>splitMathText(b.text)).filter(p=>p.kind==='math');
  const integral=formulas.find(p=>p.value.includes('\\int'));
  assert.match(integral.value,/\\int\\frac\{1\}\{x\}.*\\mathrm\{d\}x/);
  assert.doesNotMatch(integral.value,/\\frac\{\\int/);
});
