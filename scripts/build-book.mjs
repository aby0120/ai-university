import fs from "node:fs";
import katex from "katex";
import { root, book, allLessons } from "./content-utils.mjs";
const extra = JSON.parse(
  fs.readFileSync(`${root}/packages/content/supplements.json`, "utf8"),
);
const esc = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const math = (s, display = false) =>
  katex.renderToString(s, {
    displayMode: display,
    throwOnError: true,
    strict: "ignore",
    trust: false,
  });
const rich = (s) =>
  s
    .split(/(\$\$[\s\S]*?\$\$|\$[^$]+\$)/g)
    .map((p) =>
      p.startsWith("$$")
        ? math(p.slice(2, -2), true)
        : p.startsWith("$")
          ? math(p.slice(1, -1))
          : esc(p),
    )
    .join("");
const p = (s) => `<p>${rich(s)}</p>`,
  list = (items) =>
    `<ol>${items.map((s) => `<li>${rich(s)}</li>`).join("")}</ol>`;
let md = `# AI University · ${book.title}\n\n## ${book.titleZh}：${book.subtitle}\n\nv${book.version} · AI 编写的固定第一版 · 内容 CC0 · 尚未逐节人工审校\n\n${book.description}\n\n范围：${book.scope}\n\n阅读方法：先读直觉，再检查定义条件，跟随推导与例题，最后做练习。互动图位于网站同名知识点中；有限图像采样不是证明。\n\n## 目录\n\n`;
let html = `<header class="cover"><p class="kicker">AI UNIVERSITY / OPEN TEXTBOOKS</p><h1>Calculus I</h1><h2>${book.titleZh}：${book.subtitle}</h2>${p(book.description)}${p(book.scope)}<p>v${book.version} · 7 章 35 节 · 70 例题 · 140 节内练习 + 35 回顾与综合题</p><p>AI 编写的固定第一版；尚未逐节人工审校。内容 CC0，代码 MIT。</p><p><a href="./">进入交互阅读网站</a> · <a href="Calculus-I.md" download>下载 Markdown</a> · <button onclick="window.print()">打印 / 保存为 PDF</button></p></header><nav class="toc"><h2>目录</h2>`;
for (const c of book.chapters) {
  md += `\n### ${c.title}\n\n`;
  html += `<h3>${esc(c.title)}</h3><ol>`;
  for (const id of c.lessonIds) {
    const l = allLessons.find((l) => l.id === id);
    md += `- ${l.number} ${l.title}\n`;
    html += `<li><a href="#${id}">${l.number} ${esc(l.title)}</a></li>`;
  }
  html += `<li><a href="#review-${c.id}">章末回顾</a></li></ol>`;
}
html += `<p><a href="#final-exam">综合测试</a> · <a href="#glossary">术语索引</a> · <a href="#appendices">证明补充</a></p></nav>`;
function questions(items) {
  let h = "";
  items.forEach((q, i) => {
    md += `\n**${i + 1}. ${q.problem}**\n\n提示：${q.hint}\n\n答案：${q.answer}\n\n${q.solution.map((s) => `- ${s}`).join("\n")}\n`;
    h += `<article class="problem"><h4>${i + 1}. ${rich(q.problem)}</h4><p class="hint">提示：${rich(q.hint)}</p><div class="answer"><strong>答案：${rich(q.answer)}</strong>${list(q.solution)}</div></article>`;
  });
  return h;
}
for (const [ci, c] of book.chapters.entries()) {
  md += `\n# 第 ${ci + 1} 章 · ${c.title}\n\n${c.intro}\n\n学习目标：\n${c.goals.map((s) => `- ${s}`).join("\n")}\n`;
  html += `<section class="chapter-intro"><p class="kicker">CHAPTER ${ci + 1}</p><h1>${esc(c.title)}</h1>${p(c.intro)}${list(c.goals)}</section>`;
  for (const id of c.lessonIds) {
    const l = allLessons.find((l) => l.id === id);
    md += `\n## ${l.number} ${l.title}\n\n*${l.subtitle}*\n\n### 核心意思\n\n${l.concept}\n\n### 先建立直觉\n\n${l.intuition}\n`;
    html += `<section class="lesson" id="${id}"><p class="kicker">SECTION ${l.number}</p><h2>${l.title}</h2><p class="subtitle">${l.subtitle}</p><div class="idea">${p(l.concept)}</div><h3>先建立直觉</h3>${p(l.intuition)}`;
    for (const s of l.body) {
      md += `\n### ${s.title}\n\n${s.text}\n`;
      html += `<h3>${s.title}</h3>${p(s.text)}`;
    }
    md += `\n### 精确定义与条件\n\n${l.formalDefinition.text}\n\n$$\n${l.formalDefinition.latex}\n$$\n\n${l.formalDefinition.conditions.map((s) => `- ${s}`).join("\n")}\n\n### 推导\n`;
    html += `<div class="definition"><h3>精确定义与条件</h3>${p(l.formalDefinition.text)}${math(l.formalDefinition.latex, true)}${list(l.formalDefinition.conditions)}</div><h3>公式是怎么来的？</h3>`;
    for (const d of l.derivation) {
      md += `\n${d.text}\n${d.latex ? `\n$$\n${d.latex}\n$$\n` : ""}`;
      html += p(d.text) + (d.latex ? math(d.latex, true) : "");
    }
    md += `\n### 交互演示\n\n${l.interactiveVisual.caption}\n\n在网站打开知识点：#${l.id}。图像用于探索，不替代数学证明。\n\n### 例题\n`;
    html += `<div class="visual-link"><strong>交互演示</strong>${p(l.interactiveVisual.caption)}<a href="./#${l.id}">打开 ${l.number} 的互动图 →</a></div><h3>例题</h3>`;
    for (const [i, e] of l.workedExamples.entries()) {
      md += `\n#### 例 ${i + 1}：${e.title}\n\n${e.problem}\n\n${e.steps.map((s) => `- ${s}`).join("\n")}\n\n**答案：${e.answer}**\n`;
      html += `<article class="example"><h4>例 ${i + 1}：${e.title}</h4>${p(e.problem)}${list(e.steps)}<div class="answer">${p(e.answer)}</div></article>`;
    }
    md += `\n### 常见错误\n`;
    html += "<h3>常见错误</h3>";
    for (const m of l.commonMistakes) {
      md += `\n- **${m.claim}** ${m.correction}\n`;
      html += `<div class="mistake"><strong>${rich(m.claim)}</strong>${p(m.correction)}</div>`;
    }
    md += `\n### 练习与解答\n`;
    html += `<h3>练习与解答</h3>${questions(l.practice)}`;
    md += `\n前置知识：${l.prerequisites.map((id) => allLessons.find((x) => x.id === id).title).join("、") || "初等代数"}。\n`;
    html += `<p class="prerequisites">前置知识：${l.prerequisites.map((id) => `<a href="#${id}">${allLessons.find((x) => x.id === id).title}</a>`).join("、") || "初等代数"}。</p></section>`;
  }
  const review = extra.reviews.find((r) => r.chapterId === c.id);
  md += `\n## 章末回顾\n\n请先独立作答，再与解答核对。\n`;
  html += `<section class="review" id="review-${c.id}"><h2>${review.title}</h2>${questions(review.questions)}</section>`;
}
md +=
  "\n# 综合测试\n\n建议先遮住解答，独立完成。该测试连接本书全部七章，解答用于自评，不代表认证成绩。\n";
html += `<section class="review" id="final-exam"><h1>综合测试</h1>${p("建议先遮住解答，独立完成。解答用于自评，不代表认证成绩。")}${questions(extra.exam)}</section>`;
md += "\n# 术语索引\n";
html += '<section id="glossary"><h1>术语索引</h1><dl>';
for (const g of extra.glossary) {
  md += `\n- **${g.term}**：${g.meaning}\n`;
  html += `<dt><a href="#${g.lessonId}">${g.term}</a></dt><dd>${g.meaning}</dd>`;
}
html += "</dl></section>";
md += "\n# 证明补充与范围说明\n";
html += '<section id="appendices"><h1>证明补充与范围说明</h1>';
for (const a of extra.appendices) {
  md += `\n## ${a.title}\n\n${a.text}\n`;
  html += `<h2>${a.title}</h2>${p(a.text)}`;
}
html += "</section>";
md +=
  "\n# 来源与版本\n\n本书的解释、推导、例题、解答与可视化为 AI 重新编写。参考来源用于课程范围与数学条件核对，不复制参考教材的正文或图像。\n\n";
html +=
  "<section><h1>来源与版本</h1><p>本书内容与图像重新编写，参考来源用于范围与定理条件核对；尚未逐节人工审校。</p>";
for (const s of book.sources) {
  md += `- [${s.title}](${s.url})：${s.usage}\n`;
  html += `<p><a href="${s.url}">${s.title}</a>：${s.usage}</p>`;
}
html += "</section>";
const css = `*{box-sizing:border-box}body{margin:0;font:16px/1.95 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;color:#314a3a;background:#fafbf6}main{max-width:850px;margin:40px auto;background:white;padding:65px 65px;box-shadow:0 2px 25px #23402009}a{color:#436d46}button{font:inherit;border:1px solid #aaba9b;background:#f4f7e9;padding:5px 14px;color:#476142;cursor:pointer}h1,h2,h3,h4{line-height:1.5}h1{font-family:Georgia,"Songti SC",serif;font-size:38px;font-weight:500}h2{font-size:26px;margin-top:35px}h3{font-size:19px;margin-top:28px}h4{font-size:16px;margin-top:20px}.cover h1{font-size:65px}.kicker{letter-spacing:2px;font-size:10px;color:#91a17d}.subtitle{color:#899776}.toc,.lesson,.review,.chapter-intro{margin:50px 0;padding:30px 0;border-top:1px solid #e3e8db}.toc ol{padding-left:25px}.idea,.definition,.visual-link,.answer{background:#f2f6e8;padding:18px 22px;margin:23px 0;border-radius:4px}.definition{background:#fafbf6;border:1px solid #e3e8db}.example,.problem{margin:25px 0;padding:20px;border:1px solid #e4e9dc}.hint,.prerequisites{font-size:13px;color:#8a9978}.mistake{border-left:2px solid #ccb189;padding-left:18px;margin:24px 0}.katex-display{overflow:auto;font-size:.9em}dt{font-weight:600}dd{margin:5px 0 18px;color:#82916f}@media(max-width:700px){main{padding:28px 22px;margin:0}body{font-size:15px}.cover h1{font-size:50px}h1{font-size:30px}.example,.problem{padding:15px}}@media print{body{background:white;color:black;font-size:10.5pt;line-height:1.75}main{max-width:none;margin:0;padding:0;box-shadow:none}button,.visual-link{display:none}.cover,.toc,.chapter-intro,.lesson,.review{break-before:page;border:0;padding:0;margin:0}.cover{break-before:auto}.definition,.example,.mistake{break-inside:avoid}.problem{border:0;padding:0;break-inside:avoid}.answer{background:#f6f6f6}.katex-display{overflow:visible}a{color:inherit;text-decoration:none}@page{size:A4;margin:19mm 18mm}}`;
const publicDir = `${root}/apps/web/public`;
fs.mkdirSync(`${root}/book`, { recursive: true });
fs.writeFileSync(`${root}/book/Calculus-I.md`, md);
fs.writeFileSync(`${publicDir}/Calculus-I.md`, md);
fs.writeFileSync(
  `${publicDir}/book.html`,
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Calculus I · AI University · 完整书稿</title><link rel="stylesheet" href="book-assets/katex.min.css"><style>${css}</style></head><body><main>${html}</main></body></html>`,
);
fs.mkdirSync(`${publicDir}/book-assets`, { recursive: true });
fs.copyFileSync(
  `${root}/node_modules/katex/dist/katex.min.css`,
  `${publicDir}/book-assets/katex.min.css`,
);
fs.cpSync(
  `${root}/node_modules/katex/dist/fonts`,
  `${publicDir}/book-assets/fonts`,
  { recursive: true },
);
console.log(
  `Built full manuscript: ${md.length} characters, ${allLessons.length} sections, 175 exercises with solutions.`,
);
