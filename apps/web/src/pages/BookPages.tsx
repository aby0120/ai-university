import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  Download,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { book, lessonById } from "../../../../packages/content";

import {
  BookCover,
  BookStats,
  Breadcrumb,
  Eyebrow,
  LessonRow,
  Link,
  NotFound,
  PageTitle,
} from "../components/UI";
import { BOOK, chapterPath, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
export function Library() {
  return (
    <>
      <PageTitle
        tag="THE OPEN BOOKSHELF"
        title="教科书库"
        description="一本一本完成，沿着清楚的学习路径前进。"
      />
      <div className="library-filter">
        <span className="filter-pill active">
          全部教材 <b>1</b>
        </span>
        <span>当前出版 · 数学</span>
      </div>
      <div className="library-book">
        <Link to={BOOK} aria-label="打开微积分 I" className="cover-link">
          <BookCover />
        </Link>
        <div>
          <span className="badge">完整第一卷</span>
          <h2>微积分 I</h2>
          <p className="english-title">Calculus I</p>
          <p>{book.description}</p>
          <dl className="book-details">
            <div>
              <dt>适合读者</dt>
              <dd>有初等代数基础的自学者</dd>
            </div>
            <div>
              <dt>教材结构</dt>
              <dd>7 章 · 35 节 · 70 例题 · 175 练习</dd>
            </div>
            <div>
              <dt>学习范围</dt>
              <dd>函数 → 极限 → 导数 → 积分 → 应用</dd>
            </div>
            <div>
              <dt>阅读方式</dt>
              <dd>在线阅读 / 交互演示 / 下载与打印</dd>
            </div>
          </dl>
          <Link to={BOOK} className="primary-btn">
            进入教材
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
      <div className="quiet-note">
        <Layers3 size={24} />
        <div>
          <h3>完整之后，再开始下一本。</h3>
          <p>
            书库只展示已有完整内容的教材。后续卷会沿用相同的写作与交互规范，完成后再加入。
          </p>
        </div>
        <Link to="about/contribute">
          了解内容规范
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </>
  );
}

export function BookPage() {
  const { reading } = useApp();
  const resume = reading.recent[0];
  return (
    <>
      <Breadcrumb
        items={[{ label: "教科书库", to: "library" }, { label: "微积分 I" }]}
      />
      <section className="book-overview">
        <div>
          <Eyebrow>MATHEMATICS / VOLUME 01</Eyebrow>
          <h1>
            微积分 I<span>Calculus I</span>
          </h1>
          <p className="book-lead">
            把变化看清楚，
            <br />
            把累积想明白。
          </p>
          <p>{book.description}</p>
          <div className="hero-actions">
            <Link to={lessonPath(resume || "domain")} className="primary-btn">
              {resume ? "继续阅读" : "从第一节开始"}
              <ArrowRight size={17} />
            </Link>
            <Link to="guide" className="text-btn">
              阅读指南
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <BookStats />
        </div>
        <BookCover small />
      </section>
      <div className="book-meta-bar">
        <span>
          <GraduationCap size={17} />
          先修：初等代数与函数基础
        </span>
        <span>
          <CircleCheck size={17} />
          整卷内容可直接阅读
        </span>
        <Link to="downloads">
          <Download size={16} />
          整本下载
        </Link>
      </div>
      <section className="contents-section">
        <div className="section-title">
          <div>
            <Eyebrow>CONTENTS</Eyebrow>
            <h2>从函数到积分，七章连成一条路。</h2>
          </div>
          <span>{reading.read.length} / 35 节已读</span>
        </div>
        {book.chapters.map((ch, i) => (
          <div className="chapter-row" key={ch.id}>
            <Link to={chapterPath(ch.id)} className="chapter-number">
              {String(i + 1).padStart(2, "0")}
            </Link>
            <div className="chapter-summary">
              <Link to={chapterPath(ch.id)}>
                <h3>
                  {ch.title}
                  <ArrowUpRight size={19} />
                </h3>
              </Link>
              <p>{ch.intro}</p>
              <Link to={"practice/review/" + ch.id} className="chapter-review">
                章末回顾 · 3 题<ArrowRight size={14} />
              </Link>
            </div>
            <div className="chapter-lessons">
              {ch.lessonIds.map((id) => (
                <LessonRow key={id} lesson={lessonById[id]} />
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className="book-end-grid">
        <Link to="practice/exam">
          <GraduationCap />
          <h3>综合测试</h3>
          <p>用 14 道题连接整本书的知识。</p>
          <ArrowRight />
        </Link>
        <Link to="reference">
          <Layers3 />
          <h3>公式、术语与附录</h3>
          <p>查找定义，补全证明，回到正文。</p>
          <ArrowRight />
        </Link>
        <Link to="downloads">
          <Download />
          <h3>把整本书带走</h3>
          <p>Markdown、打印版与网站源码。</p>
          <ArrowRight />
        </Link>
      </div>
    </>
  );
}

export function ChapterPage() {
  const { route } = useApp();
  const ch = book.chapters.find((c) => chapterPath(c.id) === route.path);
  if (!ch) return <NotFound />;
  const num = book.chapters.indexOf(ch) + 1;
  return (
    <div className="chapter-page">
      <Breadcrumb
        items={[
          { label: "微积分 I", to: BOOK },
          { label: "第 " + num + " 章" },
        ]}
      />
      <div className="chapter-heading">
        <Eyebrow>CHAPTER {String(num).padStart(2, "0")}</Eyebrow>
        <h1>{ch.title}</h1>
        <p className="lede">{ch.subtitle}</p>
        <p>{ch.intro}</p>
        <Link to={lessonPath(ch.lessonIds[0])} className="primary-btn">
          开始本章
          <ArrowRight size={17} />
        </Link>
      </div>
      <section className="chapter-goals">
        <Eyebrow>AFTER THIS CHAPTER</Eyebrow>
        <h2>这一章，你会学到</h2>
        <ul>
          {ch.goals.map((g) => (
            <li key={g}>
              <CircleCheck size={18} />
              {g}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <div className="section-title">
          <h2>本章目录</h2>
          <span>5 节 · 10 例题 · 20 练习</span>
        </div>
        <div className="chapter-detail-list">
          {ch.lessonIds.map((id) => {
            const l = lessonById[id];
            return (
              <Link to={lessonPath(id)} key={id}>
                <span>{l.number}</span>
                <div>
                  <h3>{l.title}</h3>
                  <p>{l.subtitle}</p>
                </div>
                <span className="lesson-detail-meta">阅读 · 演示 · 练习</span>
                <ArrowRight size={19} />
              </Link>
            );
          })}
        </div>
      </section>
      <div className="quiet-note">
        <GraduationCap size={24} />
        <div>
          <h3>章末回顾</h3>
          <p>用三道题检查本章最重要的概念与条件。</p>
        </div>
        <Link to={"practice/review/" + ch.id} className="secondary-btn">
          开始回顾
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="pagination-chapter">
        {num > 1 && (
          <Link to={chapterPath(book.chapters[num - 2].id)}>
            <ArrowLeft size={16} />
            上一章
          </Link>
        )}
        <Link to={BOOK}>完整目录</Link>
        {num < 7 && (
          <Link to={chapterPath(book.chapters[num].id)}>
            下一章
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
const sections = [
  ["idea", "核心意思"],
  ["intuition", "建立直觉"],
  ["visual", "亲手探索"],
  ["explain", "展开理解"],
  ["definition", "定义与条件"],
  ["derivation", "一步步推导"],
  ["examples", "逐步例题"],
  ["mistakes", "常见误区"],
];
