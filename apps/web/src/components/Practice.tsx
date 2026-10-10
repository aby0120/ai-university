import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Layers3,
  Lightbulb,
  List,
} from "lucide-react";
import { useRef, useState } from "react";
import type { Exercise, Lesson } from "../../../../packages/content/types";
import { MathText } from "./MathText";
export type Progress = Record<string, "understood" | "review">;
export function Practice({
  lesson,
  progress,
  onMark,
}: {
  lesson: Lesson;
  progress: Progress;
  onMark: (id: string, v: "understood" | "review") => void;
}) {
  return (
    <PracticeSet
      questions={lesson.practice}
      progress={progress}
      onMark={onMark}
    />
  );
}
export function PracticeSet({
  questions,
  progress,
  onMark,
}: {
  questions: Exercise[];
  progress: Progress;
  onMark: (id: string, v: "understood" | "review") => void;
}) {
  const [index, setIndex] = useState(0),
    [all, setAll] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const understood = questions.filter(
    (q) => progress[q.id] === "understood",
  ).length;
  function choose(i: number) {
    setIndex(i);
    heading.current?.focus({ preventScroll: true });
    heading.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }
  return (
    <section className="practice-set">
      <div className="section-heading">
        <span className="eyebrow">PRACTICE & REFLECT</span>
        <h2 ref={heading} tabIndex={-1} style={{ scrollMarginTop: 140 }}>
          先尝试，再看解答
        </h2>
        <p>数字题可检查数值；推导题请对照步骤自评。记录只保存在当前浏览器。</p>
      </div>
      <div className="practice-overview">
        <span>
          {questions.length} 道题 · {understood} 道已掌握
        </span>
        <button onClick={() => setAll(!all)}>
          {all ? <Layers3 size={14} /> : <List size={14} />}{" "}
          {all ? "逐题练习" : "连续查看"}
        </button>
      </div>
      <nav className="question-navigator" aria-label="练习题导航">
        {questions.map((q, i) => (
          <button
            key={q.id}
            aria-label={"第 " + (i + 1) + " 题"}
            aria-current={!all && i === index ? "step" : undefined}
            className={
              (i === index && !all ? "active " : "") +
              (progress[q.id] === "understood"
                ? "done"
                : progress[q.id] === "review"
                  ? "review"
                  : "")
            }
            onClick={() => {
              setAll(false);
              choose(i);
            }}
          >
            {i + 1}
          </button>
        ))}
      </nav>
      {questions.map((q, i) => (
        <div key={q.id} hidden={!all && i !== index}>
          <Question
            q={q}
            index={i}
            status={progress[q.id]}
            onMark={(v) => onMark(q.id, v)}
          />
        </div>
      ))}
      {!all && (
        <div className="question-pagination">
          <button disabled={index === 0} onClick={() => choose(index - 1)}>
            <ArrowLeft size={15} />
            上一题
          </button>
          <span>
            第 {index + 1} / {questions.length} 题
          </span>
          <button
            disabled={index === questions.length - 1}
            onClick={() => choose(index + 1)}
          >
            下一题
            <ArrowRight size={15} />
          </button>
        </div>
      )}
    </section>
  );
}
function parseNumeric(input: string) {
  const s = input.trim();
  if (/^[-+]?\d+(?:\.\d+)?\s*\/\s*[-+]?\d+(?:\.\d+)?$/.test(s)) {
    const [a, b] = s.split("/").map(Number);
    return b === 0 ? NaN : a / b;
  }
  if (/^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/i.test(s)) return Number(s);
  return NaN;
}
function Question({
  q,
  index,
  status,
  onMark,
}: {
  q: Exercise;
  index: number;
  status?: string;
  onMark: (v: "understood" | "review") => void;
}) {
  const [draft, setDraft] = useState(""),
    [hint, setHint] = useState(false),
    [reveal, setReveal] = useState(false),
    [feedback, setFeedback] = useState("");
  function check() {
    const value = parseNumeric(draft);
    if (!Number.isFinite(value)) {
      setFeedback("请输入有限数值，可使用小数或分数（如 1/3）。");
      return;
    }
    const ok =
      Math.abs(value - q.numericAnswer!) <
      Math.max(1e-5, Math.abs(q.numericAnswer!) * 1e-5);
    setFeedback(
      ok
        ? "数值正确。请继续检查单位与推导步骤。"
        : "数值暂不一致。试试提示，或展开解答检查步骤。",
    );
    onMark(ok ? "understood" : "review");
  }
  return (
    <article className="exercise">
      <header>
        <span className="exercise-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>难度 {q.difficulty}/6</span>
        {status && (
          <span className={"status " + status}>
            {status === "understood" ? "已掌握 · 自评/数值检查" : "需要回顾"}
          </span>
        )}
      </header>
      <h3>
        <MathText text={q.problem} />
      </h3>
      <label className="answer-label">
        {q.numericAnswer !== undefined ? "你的答案（小数或分数）" : "你的思路"}
        <textarea
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            setFeedback("");
          }}
          placeholder={
            q.numericAnswer !== undefined
              ? "输入数值，也可以先在纸上完成…"
              : "写下关键步骤，或先在纸上完成…"
          }
        />
      </label>
      <div className="exercise-actions">
        {q.numericAnswer !== undefined && (
          <button className="small-btn" onClick={check}>
            <Check size={14} />
            检查数值
          </button>
        )}
        <button
          className="small-btn"
          aria-expanded={hint}
          onClick={() => setHint(!hint)}
        >
          <Lightbulb size={14} />
          {hint ? "收起提示" : "给我一点提示"}
        </button>
        <button
          className="text-btn"
          aria-expanded={reveal}
          onClick={() => setReveal(!reveal)}
        >
          {reveal ? "收起解答" : "查看完整解答"}
          <ChevronDown size={14} />
        </button>
      </div>
      {feedback && (
        <p role="status" className="feedback">
          {feedback}
        </p>
      )}
      {hint && (
        <p className="hint">
          <MathText text={q.hint} />
        </p>
      )}
      {reveal && (
        <div className="solution">
          <strong>
            <MathText text={q.answer} />
          </strong>
          <ol>
            {q.solution.map((s, i) => (
              <li key={i}>
                <MathText text={s} />
              </li>
            ))}
          </ol>
          <div className="exercise-actions">
            <button
              className="small-btn"
              aria-pressed={status === "understood"}
              onClick={() => onMark("understood")}
            >
              <Check size={14} />
              自评：我已理解
            </button>
            <button
              className="small-btn"
              aria-pressed={status === "review"}
              onClick={() => onMark("review")}
            >
              自评：还需回顾
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
