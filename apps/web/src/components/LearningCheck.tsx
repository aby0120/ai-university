import { useState } from "react";
import { ArrowRight, Check, Lightbulb } from "lucide-react";
import type { Lesson } from "../../../../packages/content/types";
import { MathText } from "./MathText";
export function LearningCheck({ check }: { check: Lesson["learningCheck"] }) {
  const [choice, setChoice] = useState<number | null>(null);
  const answered = choice !== null,
    correct = choice === check.correctIndex;
  return (
    <div className="learning-check">
      <div className="learning-check-label">
        <Lightbulb size={16} />
        <span>先想一下 · 不计分</span>
      </div>
      <h3>
        <MathText text={check.question} />
      </h3>
      <div className="check-choices" role="group" aria-label="概念检查选项">
        {check.choices.map((text, i) => (
          <button
            key={i}
            aria-pressed={choice === i}
            className={
              (choice === i ? "selected " : "") +
              (answered && i === check.correctIndex ? "correct" : "")
            }
            onClick={() => setChoice(i)}
          >
            <span>
              {answered && i === check.correctIndex ? (
                <Check size={14} />
              ) : (
                String.fromCharCode(65 + i)
              )}
            </span>
            <MathText text={text} />
            <ArrowRight size={14} />
          </button>
        ))}
      </div>
      {answered && (
        <div className="check-feedback" role="status">
          <strong>{correct ? "对。" : "再对照一下条件。"}</strong>
          <MathText text={check.explanation} />
        </div>
      )}
    </div>
  );
}
