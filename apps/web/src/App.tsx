import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  ExternalLink,
  GraduationCap,
  Menu,
  Search,
  Sparkles,
  X,
  Printer,
  Github,
  Compass,
} from "lucide-react";
import { book, lessons, lessonById } from "../../../packages/content";
import type { Exercise, Lesson } from "../../../packages/content/types";
import { Visual } from "./components/Visual";
import { Formula, MathText } from "./components/MathText";
import { Practice, PracticeSet, type Progress } from "./components/Practice";
import supplements from "../../../packages/content/supplements.json";
const reviewQuestions = [
  ...supplements.exam,
  ...supplements.reviews.flatMap((r) => r.questions),
];
const STORAGE = "ai-university-calculus-1-progress-v1";
function getProgress(): Progress {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE) || "{}");
    return data && typeof data === "object" && !Array.isArray(data)
      ? (Object.fromEntries(
          Object.entries(data).filter(
            ([k, v]) =>
              (lessons.some((l) => l.practice.some((q) => q.id === k)) ||
                reviewQuestions.some((q) => q.id === k)) &&
              (v === "understood" || v === "review"),
          ),
        ) as Progress)
      : {};
  } catch {
    return {};
  }
}
type Tab = "read" | "visual" | "practice" | "connections";
export default function App() {
  const [route, setRoute] = useState(() => {
      try {
        return decodeURIComponent(location.hash.slice(1));
      } catch {
        return "invalid";
      }
    }),
    [tab, setTab] = useState<Tab>("read"),
    [query, setQuery] = useState(""),
    [expanded, setExpanded] = useState<string[]>(["functions"]),
    [menu, setMenu] = useState(false),
    [progress, setProgress] = useState<Progress>(getProgress),
    [storageOk, setStorageOk] = useState(true);
  const pendingTab = useRef<Tab | null>(null);
  const [clearArmed, setClearArmed] = useState(false);
  const [mobile, setMobile] = useState(
    () => matchMedia("(max-width:760px)").matches,
  );
  useEffect(() => {
    const media = matchMedia("(max-width:760px)");
    const change = () => setMobile(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  const current = lessonById[route] as Lesson | undefined,
    index = current ? lessons.indexOf(current) : -1;
  const done = lessons.filter((l) =>
    l.practice.every((q) => progress[q.id] === "understood"),
  ).length;
  useEffect(() => {
    const handler = () => {
      let id = "";
      try {
        id = decodeURIComponent(location.hash.slice(1));
      } catch {}
      setRoute(id);
      setTab(pendingTab.current ?? "read");
      pendingTab.current = null;
      setMenu(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  useEffect(() => {
    if (current)
      setExpanded((e) =>
        e.includes(current.chapterId) ? e : [...e, current.chapterId],
      );
  }, [current]);
  function navigate(id: string, nextTab: Tab = "read") {
    if (location.hash === `#${id}`) {
      setRoute(id);
      setTab(nextTab);
      window.scrollTo(0, 0);
    } else {
      pendingTab.current = nextTab;
      location.hash = id;
    }
  }
  function mark(id: string, value: "understood" | "review") {
    const next = { ...progress, [id]: value };
    setProgress(next);
    try {
      localStorage.setItem(STORAGE, JSON.stringify(next));
    } catch {
      setStorageOk(false);
    }
  }
  function exportProgress() {
    const blob = new Blob(
      [
        JSON.stringify(
          { book: book.id, version: book.version, progress },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "calculus-1-progress.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }
  function clearProgress() {
    if (!clearArmed) { setClearArmed(true); return; }
    setProgress({});
    setClearArmed(false);
    try { localStorage.removeItem(STORAGE); } catch {}
  }
  const matching = (l: Lesson) =>
    `${l.title} ${l.subtitle} ${l.concept} ${l.number}`
      .toLowerCase()
      .includes(query.toLowerCase());
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
          document.getElementById("main")?.scrollIntoView();
        }}
      >
        跳到正文
      </a>
      <header className="topbar">
        <button
          id="directory-toggle"
          aria-controls="book-sidebar"
          aria-expanded={menu}
          className="mobile-menu icon-btn"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "关闭目录" : "打开目录"}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <button className="brand" onClick={() => navigate("")}>
          <span className="brand-mark">
            A<span>U</span>
          </span>
          <span>
            AI University<small>OPEN TEXTBOOKS</small>
          </span>
        </button>
        <nav aria-label="网站导航">
          <button
            className={!current && route === "" ? "active" : ""}
            onClick={() => navigate("")}
          >
            教科书
          </button>
          <a href="book.html" target="_blank" rel="noreferrer">
            整本阅读 <ExternalLink size={12} />
          </a>
          <button
            className={route === "about" ? "active" : ""}
            onClick={() => navigate("about")}
          >
            关于项目
          </button>
          <a
            aria-label="查看 GitHub 源码"
            className="github-link"
            href="https://github.com/b1n9ui/ai-university"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            <span>源码</span>
          </a>
        </nav>
      </header>
      <div className="workspace">
        <aside
          id="book-sidebar"
          inert={mobile && !menu}
          className={`sidebar ${menu ? "open" : ""}`}
          aria-label="教材目录"
        >
          <button className="book-card" onClick={() => navigate("")}>
            <span className="book-icon">
              <BookOpen size={21} />
            </span>
            <div>
              <strong>Calculus I</strong>
              <small>微积分 I · 完整第一版</small>
            </div>
            <ChevronRight size={16} />
          </button>
          <div className="book-progress">
            <div>
              <span>学习进度 · 按练习自评</span>
              <strong>{done}/35 节</strong>
            </div>
            <div className="progress-track">
              <span style={{ width: `${(done / 35) * 100}%` }} />
            </div>
          </div>
          <label className="search">
            <Search size={16} />
            <input
              aria-label="搜索章节"
              placeholder="搜索知识点…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button aria-label="清除搜索" onClick={() => setQuery("")}>
                <X size={14} />
              </button>
            )}
          </label>
          <div className="contents-heading">
            CONTENTS <span>7 CHAPTERS</span>
          </div>
          <nav className="chapter-list">
            {book.chapters.map((ch, ci) => {
              const filtered = ch.lessonIds
                .map((id) => lessonById[id])
                .filter(matching);
              if (query && !filtered.length) return null;
              const open = expanded.includes(ch.id) || !!query;
              return (
                <div className="chapter" key={ch.id}>
                  <button
                    className="chapter-button"
                    onClick={() =>
                      setExpanded((e) =>
                        e.includes(ch.id)
                          ? e.filter((x) => x !== ch.id)
                          : [...e, ch.id],
                      )
                    }
                    aria-expanded={open}
                  >
                    <span className="chapter-index">
                      {String(ci + 1).padStart(2, "0")}
                    </span>
                    <span>{ch.title}</span>
                    {open ? (
                      <ChevronDown size={14} />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                  </button>
                  {open && (
                    <div className="lesson-links">
                      {filtered.map((l) => (
                        <button
                          key={l.id}
                          className={route === l.id ? "selected" : ""}
                          onClick={() => navigate(l.id)}
                        >
                          <span>{l.number}</span>
                          {l.title}
                          {l.practice.every(
                            (q) => progress[q.id] === "understood",
                          ) && <Check size={13} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {query && !lessons.some(matching) && (
              <p className="empty">没有匹配的知识点。试试“极限”或“积分”。</p>
            )}
          </nav>
          <div className="sidebar-footer">
            <button onClick={() => navigate("about")}>
              <BookOpen size={16} />
              关于教材与开源
            </button>
            <button onClick={() => navigate("exam")}>
              <GraduationCap size={16} />
              综合测试 · 14 题
            </button>
            <button onClick={() => navigate("reference")}>
              <Compass size={16} />
              公式与术语索引
            </button>
            <a href="Calculus-I.md" download>
              <Download size={16} />
              下载整本书稿
            </a>
            <span>
              <Sparkles size={13} />
              AI 编写 · 纯静态 · 无需 API
            </span>
          </div>
        </aside>
        {menu && (
          <button
            className="menu-scrim"
            aria-label="收起目录"
            onClick={() => setMenu(false)}
          />
        )}
        <main
          inert={mobile && menu}
          tabIndex={-1}
          id="main"
          className={current ? "reading-page" : "overview-page"}
        >
          {current ? (
            <>
              <div className="breadcrumb">
                <button onClick={() => navigate("")}>Calculus I</button>
                <ChevronRight size={12} />
                <span>第 {current.number.split(".")[0]} 章</span>
                <ChevronRight size={12} />
                <span>{current.number}</span>
              </div>
              <div className="lesson-heading">
                <span className="eyebrow">
                  CHAPTER {current.number.split(".")[0]} / SECTION{" "}
                  {current.number}
                </span>
                <h1>{current.title}</h1>
                <p>{current.subtitle}</p>
                <div className="lesson-meta">
                  <span>
                    <BookOpen size={14} />
                    固定教材内容
                  </span>
                  <span>难度 {current.difficulty}/6</span>
                  <span>2 例题 · 4 练习</span>
                </div>
              </div>
              <div className="tabs" role="tablist" aria-label="知识点内容">
                {(
                  [
                    ["read", "阅读与理解"],
                    ["visual", "交互演示"],
                    ["practice", "练习与解答"],
                    ["connections", "知识连接"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    id={`tab-${id}`}
                    role="tab"
                    aria-selected={tab === id}
                    aria-controls={`panel-${id}`}
                    tabIndex={tab === id ? 0 : -1}
                    key={id}
                    onClick={() => setTab(id)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                        const ids: Tab[] = [
                          "read",
                          "visual",
                          "practice",
                          "connections",
                        ];
                        const next =
                          ids[
                            (ids.indexOf(tab) +
                              (e.key === "ArrowRight" ? 1 : 3)) %
                              4
                          ];
                        setTab(next);
                        document.getElementById(`tab-${next}`)?.focus();
                      }
                    }}
                  >
                    {label}
                    {id === "practice" && <span>4</span>}
                  </button>
                ))}
              </div>
              <div
                className={tab === "read" ? "lesson-layout" : "single-panel"}
                role="tabpanel"
                id={`panel-${tab}`}
                aria-labelledby={`tab-${tab}`}
              >
                {tab === "read" ? (
                  <>
                    <article className="lesson-text">
                      <div className="idea-box">
                        <span className="eyebrow">THE ESSENTIAL IDEA</span>
                        <p>
                          <MathText text={current.concept} />
                        </p>
                      </div>
                      <section>
                        <h2>先建立直觉</h2>
                        <p>
                          <MathText text={current.intuition} />
                        </p>
                      </section>
                      {current.body.map((s, i) => (
                        <section key={i}>
                          <h2>{s.title}</h2>
                          <p>
                            <MathText text={s.text} />
                          </p>
                        </section>
                      ))}
                      <section className="definition">
                        <span className="eyebrow">DEFINITION / THEOREM</span>
                        <h2>精确地说</h2>
                        <p>
                          <MathText text={current.formalDefinition.text} />
                        </p>
                        <Formula
                          latex={current.formalDefinition.latex}
                          display
                        />
                        {current.formalDefinition.conditions.map((t, i) => (
                          <p className="condition" key={i}>
                            <MathText text={t} />
                          </p>
                        ))}
                      </section>
                      <section>
                        <h2>公式是怎么来的？</h2>
                        <ol className="derivation">
                          {current.derivation.map((d, i) => (
                            <li key={i}>
                              <p>
                                <MathText text={d.text} />
                              </p>
                              {d.latex && <Formula latex={d.latex} display />}
                            </li>
                          ))}
                        </ol>
                      </section>
                      <section>
                        <h2>跟着做两道例题</h2>
                        {current.workedExamples.map((ex, i) => (
                          <article className="example" key={i}>
                            <span className="eyebrow">
                              WORKED EXAMPLE {i + 1}
                            </span>
                            <h3>{ex.title}</h3>
                            <p>
                              <MathText text={ex.problem} />
                            </p>
                            <ol>
                              {ex.steps.map((s, j) => (
                                <li key={j}>
                                  <MathText text={s} />
                                </li>
                              ))}
                            </ol>
                            <div className="example-answer">
                              <MathText text={ex.answer} />
                            </div>
                          </article>
                        ))}
                      </section>
                      <section>
                        <h2>容易卡住的地方</h2>
                        {current.commonMistakes.map((m) => (
                          <div className="misconception" key={m.id}>
                            <h3>
                              <MathText text={m.claim} />
                            </h3>
                            <p>
                              <MathText text={m.correction} />
                            </p>
                          </div>
                        ))}
                      </section>
                      <button
                        className="primary-btn"
                        onClick={() => {
                          setTab("practice");
                          document
                            .querySelector(".tabs")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        现在试一试 <ArrowRight size={17} />
                      </button>
                    </article>
                    <aside className="visual-aside">
                      <Visual key={current.id} lesson={current} compact />
                      <div className="learning-goals">
                        <span className="eyebrow">AFTER THIS SECTION</span>
                        <h3>你将能够</h3>
                        {current.objectives.map((s, i) => (
                          <p key={i}>
                            <Check size={15} />
                            {s}
                          </p>
                        ))}
                        <button
                          className="text-btn"
                          onClick={() => setTab("connections")}
                        >
                          查看前置知识 <ArrowRight size={14} />
                        </button>
                      </div>
                    </aside>
                  </>
                ) : tab === "visual" ? (
                  <div className="large-visual">
                    <Visual key={current.id} lesson={current} />
                    <div className="observe-box">
                      <h2>带着问题探索</h2>
                      <p>
                        <MathText text={current.interactiveVisual.caption} />
                      </p>
                      <p>
                        <MathText text={current.concept} />
                      </p>
                      <button
                        className="text-btn"
                        onClick={() => setTab("read")}
                      >
                        回到完整推导 <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ) : tab === "practice" ? (
                  <Practice
                    key={current.id}
                    lesson={current}
                    progress={progress}
                    onMark={mark}
                  />
                ) : (
                  <Connections lesson={current} navigate={navigate} />
                )}
              </div>
              <div className="lesson-pagination">
                <button
                  disabled={index === 0}
                  onClick={() => navigate(lessons[index - 1].id)}
                >
                  <ArrowLeft size={17} />
                  <span>
                    <small>上一节</small>
                    {lessons[index - 1]?.title || "这是第一节"}
                  </span>
                </button>
                <button
                  disabled={index === lessons.length - 1}
                  onClick={() => navigate(lessons[index + 1].id)}
                >
                  <span>
                    <small>下一节</small>
                    {lessons[index + 1]?.title || "本书已读完"}
                  </span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </>
          ) : route === "about" ? (
            <>
              <span className="eyebrow">ABOUT AI UNIVERSITY</span>
              <h1>让知识清楚，也让知识开放。</h1>
              <p className="lede">
                教材由 AI
                编写，以固定版本发布。你读到的每句话、公式与解答都能查看、下载、修改和追踪。
              </p>
              <div className="about-grid">
                <section>
                  <h2>我们正在做什么</h2>
                  <p>
                    按整本书推进开放教材系列。第一本是 Calculus I：7 章 35
                    节，覆盖一元微积分的完整入门路径。下一本将在这本的内容和体验稳定后开始。
                  </p>
                </section>
                <section>
                  <h2>纯静态的学习空间</h2>
                  <p>
                    没有聊天室、登录系统或模型调用。所有互动图、数值计算与练习操作都在浏览器本地完成。学习记录只保存在此设备上；浏览器禁止存储时仍可阅读。
                  </p>
                </section>
                <section>
                  <h2>内容如何形成</h2>
                  <p>
                    先建立整本课程边界与依赖图，再逐节编写直觉、定义、推导、例题、误区和解答。程序检查结构与公式，选定数值用独立计算复核；修订通过版本与勘误公开记录。
                  </p>
                </section>
                <section>
                  <h2>第一版的透明说明</h2>
                  <p>
                    本书为 AI
                    生成的第一版，尚未逐节人工审校。自动检查能发现部分错误，不能证明整本教材完全无误。源码附有贡献规范与勘误入口，欢迎附上具体章节与推导提交修正。
                  </p>
                </section>
              </div>
              <div className="download-row">
                <a
                  className="primary-btn"
                  href="https://github.com/b1n9ui/ai-university"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  查看开源项目
                </a>
                <a
                  className="secondary-btn"
                  href="book.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Printer size={17} />
                  阅读 / 打印整本
                </a>
              </div>
              <h2>你的学习记录</h2>
              <p>
                已自评或数值检查掌握 {done} 节；每节四题全部标记掌握才计为完成。
              </p>
              <div className="download-row">
                <button className="secondary-btn" onClick={exportProgress}>
                  <Download size={16} />
                  导出记录
                </button>
                <button className="text-btn" onClick={clearProgress}>
                  {clearArmed ? "确认清空本地记录" : "清空本地记录"}
                </button>
                {clearArmed && <button className="text-btn" onClick={() => setClearArmed(false)}>取消</button>}
              </div>
            </>
          ) : route === "reference" ? (
            <Reference navigate={navigate} />
          ) : route === "exam" || route.startsWith("review-") ? (
            <Review
              route={route}
              navigate={navigate}
              progress={progress}
              onMark={mark}
            />
          ) : route && !current ? (
            <>
              <h1>没有找到这一节</h1>
              <p>地址中的知识点不存在。可以通过目录搜索，或回到教材首页。</p>
              <button className="primary-btn" onClick={() => navigate("")}>
                返回首页
              </button>
            </>
          ) : (
            <Overview navigate={navigate} done={done} />
          )}
          <footer className="main-footer">
            <span>AI University · Calculus I · v{book.version}</span>
            <span>AI 编写的固定教材 · 内容 CC0 · 代码 MIT</span>
          </footer>
          {!storageOk && (
            <p role="status">浏览器无法持久保存记录，本次阅读仍可继续。</p>
          )}
        </main>
      </div>
    </>
  );
}
function Overview({
  navigate,
  done,
}: {
  navigate: (id: string, tab?: Tab) => void;
  done: number;
}) {
  return (
    <>
      <div className="book-hero">
        <div>
          <span className="edition">
            <span />
            THE FIRST OPEN VOLUME · 完整第一版
          </span>
          <h1>
            Calculus <em>I</em>
          </h1>
          <h2>把变化看清楚。</h2>
          <p>
            从一个点的靠近，到无数小块的累积。
            <br />
            用清楚的解释与可交互的图，走完一元微积分。
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => navigate("domain")}>
              开始阅读 <ArrowRight size={18} />
            </button>
            <button
              className="text-btn"
              onClick={() => navigate("limit-intuition", "visual")}
            >
              先看看极限动画 <ArrowRight size={16} />
            </button>
          </div>
          <div className="hero-stats">
            <span>
              <strong>7</strong> 章
            </span>
            <span>
              <strong>35</strong> 节
            </span>
            <span>
              <strong>70</strong> 例题
            </span>
            <span>
              <strong>140</strong> 练习与解答
            </span>
          </div>
        </div>
        <div className="hero-illustration" aria-hidden="true">
          <div className="cover-tag">
            A SMALL CHANGE.
            <br />A CLEARER IDEA.
          </div>
          <svg viewBox="0 0 380 300">
            <defs>
              <pattern
                id="grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M30 0H0V30"
                  fill="none"
                  stroke="#d7e0d2"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="380" height="300" fill="url(#grid)" />
            <path d="M30 240H350 M75 275V30" stroke="#a4b5a2" />
            <path
              d="M35 228 C110 234 153 218 200 165 S265 70 337 37"
              fill="none"
              stroke="#234f40"
              strokeWidth="3"
            />
            <path
              d="M103 247 294 66"
              stroke="#b99047"
              strokeWidth="2"
              strokeDasharray="6 5"
            />
            <circle cx="200" cy="165" r="7" fill="#234f40" />
            <circle
              cx="264"
              cy="91"
              r="6"
              fill="#f2f4df"
              stroke="#486aa2"
              strokeWidth="2"
            />
            <path
              d="M200 165H264V91"
              fill="none"
              stroke="#486aa2"
              strokeDasharray="4 4"
            />
            <text x="224" y="184">
              Δx
            </text>
            <text x="279" y="130">
              Δy
            </text>
          </svg>
          <Formula latex="\frac{\Delta y}{\Delta x}\longrightarrow f\prime(a)" />
        </div>
      </div>
      <div className="book-note">
        <GraduationCap size={22} />
        <div>
          <strong>一本书，一条完整的学习路径。</strong>
          <p>
            先懂意思，再看定义与推导。每节都配有互动演示、例题和可展开的练习解答。
            {done > 0 && `你已完成 ${done} 节练习。`}
          </p>
        </div>
        <a href="book.html" target="_blank" rel="noreferrer">
          整本阅读 <ArrowRight size={16} />
        </a>
      </div>
      <div className="section-heading">
        <span className="eyebrow">THE LEARNING PATH</span>
        <h2>从函数，一路走到积分应用</h2>
        <p>建议按顺序阅读；已经熟悉某一部分，也可以直接进入下一章。</p>
      </div>
      <div className="chapter-grid">
        {book.chapters.map((ch, i) => (
          <article key={ch.id}>
            <div className="chapter-card-top">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <small>5 节 · 10 例题 · 20 练习</small>
            </div>
            <h3>
              <button onClick={() => navigate(ch.lessonIds[0])}>
                {ch.title}
                <ArrowRight size={16} />
              </button>
            </h3>
            <p>{ch.intro}</p>
            <div className="chapter-topic-list">
              {ch.lessonIds.map((id) => (
                <button key={id} onClick={() => navigate(id)}>
                  <span>{lessonById[id].number}</span>
                  {lessonById[id].title}
                </button>
              ))}
            </div>
            <button
              className="text-btn"
              onClick={() => navigate("review-" + ch.id)}
            >
              章末回顾 · 3 题 <ArrowRight size={12} />
            </button>
          </article>
        ))}
      </div>
      <section className="endnote">
        <span className="eyebrow">READ. EXPLORE. UNDERSTAND.</span>
        <h2>知识没有入口限制。</h2>
        <p>
          没有账户，没有 API，没有等待生成。
          <br />
          固定内容与本地互动，让你按自己的节奏理解每一步。
        </p>
        <div className="download-row">
          <a className="secondary-btn" href="Calculus-I.md" download>
            <Download size={16} />
            下载 Markdown 书稿
          </a>
          <a
            className="secondary-btn"
            href="book.html"
            target="_blank"
            rel="noreferrer"
          >
            <Printer size={16} />
            整本阅读 / 打印
          </a>
        </div>
      </section>
    </>
  );
}
function Connections({
  lesson,
  navigate,
}: {
  lesson: Lesson;
  navigate: (id: string) => void;
}) {
  const next = lessons.filter((l) => l.prerequisites.includes(lesson.id));
  return (
    <section className="connections">
      <span className="eyebrow">KNOWLEDGE CONNECTIONS</span>
      <h2>这一节从哪里来，又通向哪里？</h2>
      <p>
        这里展示明确的先修关系。随时回到一个基础概念，不需要重新读完前面的所有章节。
      </p>
      <div className="connection-columns">
        <div>
          <h3>前置知识</h3>
          {lesson.prerequisites.length ? (
            lesson.prerequisites.map((id) => (
              <button key={id} onClick={() => navigate(id)}>
                <small>{lessonById[id].number}</small>
                {lessonById[id].title}
                <ArrowRight size={15} />
              </button>
            ))
          ) : (
            <p>具备初等代数即可从这里开始。</p>
          )}
        </div>
        <div className="current-node">
          <BookOpen size={24} />
          <strong>{lesson.title}</strong>
          <span>你在这里</span>
        </div>
        <div>
          <h3>后续会用到</h3>
          {next.length ? (
            next.map((l) => (
              <button key={l.id} onClick={() => navigate(l.id)}>
                <small>{l.number}</small>
                {l.title}
                <ArrowRight size={15} />
              </button>
            ))
          ) : (
            <p>已到达本书应用路径的末端。继续用综合练习连接整本知识。</p>
          )}
        </div>
      </div>
      <h3>要避免的误解</h3>
      {lesson.commonMistakes.map((m) => (
        <div className="misconception" key={m.id}>
          <p>
            <MathText text={m.correction} />
          </p>
        </div>
      ))}
    </section>
  );
}
function Reference({ navigate }: { navigate: (id: string) => void }) {
  const rows = [
    [
      "极限与连续",
      "limit-intuition",
      String.raw`\lim_{x\to a}f(x)=f(a)\quad\text{(continuity)}`,
    ],
    [
      "导数定义",
      "derivative-definition",
      String.raw`f\prime(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h`,
    ],
    [
      "积与商",
      "derivative-rules",
      String.raw`(uv)\prime=u\prime v+uv\prime,\quad(u/v)\prime=(u\prime v-uv\prime)/v^2`,
    ],
    [
      "链式法则",
      "chain-rule",
      String.raw`(f\circ g)\prime(x)=f\prime(g(x))g\prime(x)`,
    ],
    [
      "指数与对数",
      "exp-log-derivatives",
      String.raw`(e^x)\prime=e^x,\quad(\ln x)\prime=1/x`,
    ],
    ["中值定理", "mean-value", String.raw`f\prime(c)=\frac{f(b)-f(a)}{b-a}`],
    ["基本定理", "fundamental-theorem", String.raw`\int_a^bf(x)dx=F(b)-F(a)`],
    ["换元", "substitution", String.raw`\int f(g(x))g\prime(x)dx=\int f(u)du`],
    ["旋转体", "disk-washer", String.raw`V=\pi\int(R^2-r^2)dx`],
    ["弧长", "arc-length", String.raw`L=\int_a^b\sqrt{1+(f\prime)^2}dx`],
  ];
  return (
    <>
      <span className="eyebrow">QUICK REFERENCE</span>
      <h1>公式不是起点，是理解的索引。</h1>
      <p className="lede">
        这里帮你快速返回完整解释。每条公式的条件与推导都在对应章节。
      </p>
      {rows.map(([title, id, latex]) => (
        <section className="reference-row" key={id}>
          <button onClick={() => navigate(id)}>
            {title}
            <ArrowRight size={16} />
          </button>
          <Formula latex={latex} display />
        </section>
      ))}
      <h2>全部知识点索引</h2>
      <div className="index-links">
        {lessons.map((l) => (
          <button key={l.id} onClick={() => navigate(l.id)}>
            <span>{l.number}</span>
            {l.title}
          </button>
        ))}
      </div>
      <h2>术语索引</h2>
      <div className="glossary-grid">
        {supplements.glossary.map((g) => (
          <article key={g.term}>
            <button onClick={() => navigate(g.lessonId)}>{g.term}</button>
            <p>{g.meaning}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function Review({
  route,
  navigate,
  progress,
  onMark,
}: {
  route: string;
  navigate: (id: string) => void;
  progress: Progress;
  onMark: (id: string, v: "understood" | "review") => void;
}) {
  const r = supplements.reviews.find((x) => "review-" + x.chapterId === route);
  if (route !== "exam" && !r)
    return (
      <>
        <h1>未找到这组回顾题</h1>
        <button onClick={() => navigate("")}>返回教材</button>
      </>
    );
  return (
    <>
      <span className="eyebrow">REVIEW & CONNECT</span>
      <h1>{r?.title || "整本书 · 综合测试"}</h1>
      <p className="lede">
        先独立完成，再对照解答自评。这些题目用于巩固理解，不提供认证成绩。
      </p>
      <PracticeSet
        key={route}
        questions={(r?.questions || supplements.exam) as Exercise[]}
        progress={progress}
        onMark={onMark}
      />
      <button className="secondary-btn" onClick={() => navigate("")}>
        回到整本目录
      </button>
    </>
  );
}
