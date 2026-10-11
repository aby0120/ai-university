import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Beaker,
  BookOpen,
  Bookmark,
  Check,
  CircleCheck,
  Lightbulb,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { book, lessonById, lessons } from "../../../../packages/content";
import type { Lesson } from "../../../../packages/content/types";
import { Formula, MathText } from "../components/MathText";
import { Practice } from "../components/Practice";
import { LearningCheck } from "../components/LearningCheck";
import { Visual } from "../components/Visual";

import {
  Breadcrumb,
  Eyebrow,
  LessonRow,
  Link,
  NotFound,
} from "../components/UI";
import { BOOK, chapterPath, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";

const sections = [
  ["idea", "先看结论"],
  ["intuition", "怎么理解"],
  ["visual", "亲手探索"],
  ["explain", "关键问题"],
  ["definition", "定义与条件"],
  ["derivation", "一步步推导"],
  ["examples", "逐步例题"],
  ["mistakes", "常见误区"],
];

export function LessonPage({ lesson: l }: { lesson: Lesson }) {
  const { route, reading, update, progress, mark } = useApp();
  const view = route.params.get("view") || "read";
  const index = lessons.indexOf(l);
  const ch = book.chapters.find((c) => c.id === l.chapterId)!;
  const [active, setActive] = useState("idea");
  const [scrollProgress, setScrollProgress] = useState(0);
  const saved = reading.saved.includes(l.id),
    read = reading.read.includes(l.id);
  useEffect(() => {
    if (view !== "read") return;
    const onScroll = () => {
      const article = document.getElementById("lesson-article");
      if (!article) return;
      const top = article.getBoundingClientRect().top + window.scrollY;
      const available = article.offsetHeight - window.innerHeight + 140;
      setScrollProgress(
        Math.max(
          0,
          Math.min(
            100,
            ((window.scrollY - top + 140) / Math.max(1, available)) * 100,
          ),
        ),
      );
      let last = "idea";
      for (const [id] of sections) {
        const e = document.getElementById("section-" + id);
        if (e && e.getBoundingClientRect().top < 200) last = id;
      }
      setActive(last);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [view, l.id]);
  function jump(id: string) {
    document.getElementById("section-" + id)?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }
  return (
    <div className={"lesson-page " + (reading.large ? "large-text" : "")}>
      <div
        className="reading-progress"
        style={{ width: scrollProgress + "%" }}
      />
      <Breadcrumb
        items={[
          { label: "微积分 I", to: BOOK },
          { label: ch.title, to: chapterPath(ch.id) },
          { label: l.number },
        ]}
      />
      <header className="lesson-heading">
        <Eyebrow>
          SECTION {l.number} / {ch.subtitle}
        </Eyebrow>
        <h1>{l.title}</h1>
        <p>{l.subtitle}</p>
        <div className="lesson-tools">
          <span>
            <BookOpen size={15} /> {l.body.length} 个关键问题
          </span>
          <span>2 例题 · 4 练习</span>
          <div>
            <button
              className={"icon-btn " + (saved ? "selected" : "")}
              aria-label={saved ? "取消收藏本节" : "收藏本节"}
              aria-pressed={saved}
              onClick={() =>
                update({
                  ...reading,
                  saved: saved
                    ? reading.saved.filter((id) => id !== l.id)
                    : [l.id, ...reading.saved],
                })
              }
            >
              <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
            </button>
            <button
              className="text-size-btn"
              aria-label="切换较大字号"
              aria-pressed={reading.large}
              onClick={() => update({ ...reading, large: !reading.large })}
            >
              A<span>A</span>
            </button>
          </div>
        </div>
      </header>
      <nav className="lesson-tabs" aria-label="知识点内容">
        {[
          ["read", "阅读与理解"],
          ["visual", "交互演示"],
          ["practice", "练习与解答"],
          ["connections", "知识连接"],
        ].map(([id, name]) => (
          <Link
            key={id}
            to={lessonPath(l.id)}
            params={{ view: id === "read" ? undefined : id }}
            className={view === id ? "active" : ""}
            aria-current={view === id ? "page" : undefined}
          >
            {name}
            {id === "practice" && <span>4</span>}
          </Link>
        ))}
      </nav>
      <div className="lesson-content-grid">
        <div className="lesson-content">
          {view === "read" ? (
            <article id="lesson-article" className="textbook-article">
              <section id="section-idea" className="essential-idea">
                <Eyebrow>THE ESSENTIAL IDEA</Eyebrow>
                <p>
                  <MathText text={l.concept} />
                </p>
              </section>
              <section id="section-intuition">
                <SectionTitle num="01" title="怎么理解？" />
                <p>
                  <MathText text={l.intuition} />
                </p>
              </section>
              <LearningCheck key={l.id} check={l.learningCheck} />
              <section id="section-visual" className="embedded-visual">
                <div className="visual-section-heading">
                  <span>
                    <Beaker size={18} />
                    亲手探索
                  </span>
                  <Link to={lessonPath(l.id)} params={{ view: "visual" }}>
                    专注演示
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
                <Visual lesson={l} compact />
              </section>
              <section id="section-explain">
                <SectionTitle num="02" title="三个关键问题" />
                {l.body.map((b) => (
                  <div className="body-part" key={b.title}>
                    <h3>{b.title}</h3>
                    <p>
                      <MathText text={b.text} />
                    </p>
                  </div>
                ))}
              </section>
              <section id="section-definition">
                <SectionTitle num="03" title="定义与条件" />
                <div className="definition-block">
                  <Eyebrow>DEFINITION / THEOREM</Eyebrow>
                  <p>
                    <MathText text={l.formalDefinition.text} />
                  </p>
                  <Formula latex={l.formalDefinition.latex} display />
                  <div className="conditions">
                    <strong>使用条件</strong>
                    <ul>
                      {l.formalDefinition.conditions.map((s, i) => (
                        <li key={i}>
                          <MathText text={s} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <section id="section-derivation">
                <SectionTitle num="04" title="为什么成立？" />
                <ol className="derivation-steps">
                  {l.derivation.map((s, i) => (
                    <li key={i}>
                      <span>{i + 1}</span>
                      <div>
                        <p>
                          <MathText text={s.text} />
                        </p>
                        {s.latex && <Formula latex={s.latex} display />}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
              <section id="section-examples">
                <SectionTitle num="05" title="两道例题" />
                {l.workedExamples.map((ex, i) => (
                  <div className="worked-example" key={i}>
                    <header>
                      <span>例题 {i + 1}</span>
                      <h3>{ex.title}</h3>
                    </header>
                    <p className="example-problem">
                      <MathText text={ex.problem} />
                    </p>
                    <details className="example-solution">
                      <summary>查看解题步骤</summary>
                      <ol>
                        {ex.steps.map((s, j) => (
                          <li key={j}>
                            <MathText text={s} />
                          </li>
                        ))}
                      </ol>
                      <div className="example-answer">
                        <Check size={18} />
                        <MathText text={ex.answer} />
                      </div>
                    </details>
                  </div>
                ))}
              </section>
              <section id="section-mistakes">
                <SectionTitle num="06" title="常见误区" />
                {l.commonMistakes.map((m) => (
                  <div className="misconception" key={m.id}>
                    <div>
                      <X size={17} />
                      <span>
                        <MathText text={m.claim} />
                      </span>
                    </div>
                    <p>
                      <Lightbulb size={18} />
                      <span>
                        <MathText text={m.correction} />
                      </span>
                    </p>
                  </div>
                ))}
              </section>
              <div className="lesson-finish">
                <div>
                  <Eyebrow>NOW, TRY IT YOURSELF</Eyebrow>
                  <h2>用四道题检验理解。</h2>
                  <p>四道练习，检查概念、计算与适用条件。</p>
                </div>
                <Link
                  to={lessonPath(l.id)}
                  params={{ view: "practice" }}
                  className="primary-btn"
                >
                  开始练习
                  <ArrowRight size={16} />
                </Link>
              </div>
              <button
                className={"read-complete " + (read ? "completed" : "")}
                onClick={() =>
                  update({
                    ...reading,
                    read: read
                      ? reading.read.filter((id) => id !== l.id)
                      : [...reading.read, l.id],
                  })
                }
              >
                <CircleCheck size={20} />
                {read ? "已标记为读完 · 点击撤销" : "标记本节已读完"}
              </button>
            </article>
          ) : view === "visual" ? (
            <div className="focus-visual">
              <div className="focus-visual-intro">
                <Eyebrow>EXPLORE THE IDEA</Eyebrow>
                <h2>{l.title} · 交互演示</h2>
                <p>
                  <MathText text={l.concept} />
                </p>
              </div>
              <Visual lesson={l} />
              <div className="observation">
                <Lightbulb size={20} />
                <div>
                  <h3>观察任务</h3>
                  <p>
                    先说出你的预测，再改变一个参数。数值与图像是否支持它？回到推导解释原因。
                  </p>
                  <Link to={lessonPath(l.id)}>
                    回到定义与推导
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ) : view === "practice" ? (
            <Practice lesson={l} progress={progress} onMark={mark} />
          ) : view === "connections" ? (
            <Connections lesson={l} />
          ) : (
            <NotFound />
          )}
        </div>
        <aside className="lesson-toc" aria-label="本页目录">
          {view === "read" ? (
            <>
              <Eyebrow>ON THIS PAGE</Eyebrow>
              <nav>
                {sections.map(([id, name]) => (
                  <button
                    key={id}
                    className={active === id ? "active" : ""}
                    onClick={() => jump(id)}
                  >
                    {name}
                  </button>
                ))}
              </nav>
            </>
          ) : (
            <>
              <Eyebrow>THIS SECTION</Eyebrow>
              <p>{l.concept}</p>
            </>
          )}
          <div className="toc-objectives">
            <strong>本节目标</strong>
            {l.objectives.map((o) => (
              <p key={o}>
                <Check size={13} />
                {o}
              </p>
            ))}
          </div>
          <Link
            to={lessonPath(l.id)}
            params={{ view: "connections" }}
            className="toc-prereq"
          >
            查看前置知识
            <ArrowUpRight size={14} />
          </Link>
        </aside>
      </div>
      <nav className="lesson-pagination" aria-label="章节翻页">
        {index > 0 ? (
          <Link to={lessonPath(lessons[index - 1].id)}>
            <ArrowLeft size={18} />
            <div>
              <small>上一节 · {lessons[index - 1].number}</small>
              <strong>{lessons[index - 1].title}</strong>
            </div>
          </Link>
        ) : (
          <Link to={BOOK}>
            <ArrowLeft size={18} />
            教材目录
          </Link>
        )}
        {index < lessons.length - 1 ? (
          <Link to={lessonPath(lessons[index + 1].id)}>
            <div>
              <small>下一节 · {lessons[index + 1].number}</small>
              <strong>{lessons[index + 1].title}</strong>
            </div>
            <ArrowRight size={18} />
          </Link>
        ) : (
          <Link to="practice/exam">
            <div>
              <small>完成阅读后</small>
              <strong>整本书综合测试</strong>
            </div>
            <ArrowRight size={18} />
          </Link>
        )}
      </nav>
      <p className="content-provenance">
        固定版本教材 · AI 编写 · 本节难度 {l.difficulty}/6 ·{" "}
        <Link to="about/versions">版本与勘误</Link>
      </p>
    </div>
  );
}

export function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="reading-section-title">
      <span>{num}</span>
      {title}
    </h2>
  );
}

export function Connections({ lesson }: { lesson: Lesson }) {
  const next = lessons.filter((l) => l.prerequisites.includes(lesson.id));
  return (
    <section className="connections">
      <Eyebrow>KNOWLEDGE CONNECTIONS</Eyebrow>
      <h2>从哪里来，通向哪里？</h2>
      <p>
        这些连接来自教材的先修关系。遇到不熟悉的概念，可以沿着连接回去补齐。
      </p>
      <div className="knowledge-flow">
        <div>
          <span>前置知识</span>
          {lesson.prerequisites.length ? (
            lesson.prerequisites.map((id) => (
              <LessonRow key={id} lesson={lessonById[id]} />
            ))
          ) : (
            <p>具备初等代数即可开始。</p>
          )}
        </div>
        <div className="current-concept">
          <BookOpen size={23} />
          <span>{lesson.number}</span>
          <strong>{lesson.title}</strong>
          <small>你在这里</small>
        </div>
        <div>
          <span>后续会用到</span>
          {next.length ? (
            next.map((l) => <LessonRow key={l.id} lesson={l} />)
          ) : (
            <p>已到达本卷应用路径的末端，可进入综合测试。</p>
          )}
        </div>
      </div>
      <h3>这节需要避开的误解</h3>
      {lesson.commonMistakes.map((m) => (
        <p className="connection-mistake" key={m.id}>
          <Lightbulb size={18} />
          <MathText text={m.correction} />
        </p>
      ))}
    </section>
  );
}
