import {
  ArrowRight,
  ArrowUpRight,
  Beaker,
  BookOpen,
  Download,
} from "lucide-react";
import { lessonById } from "../../../../packages/content";
import { Formula } from "../components/MathText";
import { Visual } from "../components/Visual";

import { BookCover, BookStats, Eyebrow, Link } from "../components/UI";
import { BOOK, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
export function Home() {
  const { reading } = useApp();
  const resume = reading.recent[0];
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <Link to={BOOK} className="release-pill">
            <span /> 第一部完整教材 · Calculus I <ArrowUpRight size={14} />
          </Link>
          <Eyebrow>KNOWLEDGE, MADE CLEAR.</Eyebrow>
          <h1>
            让知识，
            <br />
            真正变得<span>清楚。</span>
          </h1>
          <p>
            从一句听得懂的解释开始。
            <br />
            用可以亲手探索的图，理解公式背后的意思。
          </p>
          <div className="hero-actions">
            <Link
              className="primary-btn"
              to={resume ? lessonPath(resume) : BOOK}
            >
              {resume ? "继续上次阅读" : "打开微积分 I"}
              <ArrowRight size={18} />
            </Link>
            <Link to="lab" className="text-btn">
              探索互动演示
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-footnote">
            <BookOpen size={15} /> 完整教科书 <span>·</span>
            <Beaker size={15} /> 亲手探索 <span>·</span> 免费与开源
          </div>
        </div>
        <div className="hero-demo">
          <div className="demo-window-bar">
            <span className="demo-status" />
            INTERACTIVE NOTEBOOK<span>01 / CHANGE</span>
          </div>
          <div className="demo-title">
            <h2>瞬时变化，是什么？</h2>
            <p>在 a = 1 缩小 h，看割线如何变成切线。</p>
          </div>
          <Visual lesson={lessonById["derivative-definition"]} compact />
          <Link
            to={lessonPath("derivative-definition")}
            className="demo-bottom"
          >
            从导数的定义读起
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <div className="manifesto-strip">
        <span>理解优先，符号随后。</span>
        <p>直觉 → 定义 → 推导 → 演示 → 练习</p>
        <Link to="guide">
          如何阅读
          <ArrowRight size={15} />
        </Link>
      </div>
      <section className="home-section">
        <div className="section-title">
          <div>
            <Eyebrow>THE OPEN BOOKSHELF</Eyebrow>
            <h2>一本书，一条完整的路。</h2>
          </div>
          <Link to="library" className="text-btn">
            进入书库
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="featured-book">
          <Link to={BOOK} className="cover-link" aria-label="查看微积分 I 教材">
            <BookCover />
          </Link>
          <div className="featured-book-copy">
            <span className="badge">数学 / 大学入门</span>
            <h3>微积分 I</h3>
            <span className="english-title">
              Calculus I — From change to accumulation
            </span>
            <p>
              函数怎样变化？瞬间的速度怎么算？无数小块又怎样积成一个整体？从函数基础出发，走完极限、导数、积分与应用。
            </p>
            <BookStats />
            <div className="hero-actions">
              <Link to={BOOK} className="primary-btn">
                查看完整目录
                <ArrowRight size={17} />
              </Link>
              <Link to="downloads" className="text-btn">
                <Download size={16} />
                下载整本教材
              </Link>
            </div>
            <small>AI 编写 · 35 节完整内容 · 含章末回顾与综合测试</small>
          </div>
        </div>
      </section>
      <section className="home-section questions-section">
        <div className="section-title">
          <div>
            <Eyebrow>START WITH A QUESTION</Eyebrow>
            <h2>先从一个好奇开始。</h2>
          </div>
          <p>三个问题，通向微积分的三个核心概念。</p>
        </div>
        <div className="question-grid">
          {[
            {
              id: "limit-intuition",
              n: "01",
              name: "靠近，却不到达。",
              q: "一个点没有值，为什么还能有极限？",
              formula: String.raw`\lim_{x\to 1}\frac{x^2-1}{x-1}=2`,
              tag: "极限 / LIMITS",
            },
            {
              id: "derivative-definition",
              n: "02",
              name: "这一刻，变化多快？",
              q: "从平均速度，到一个点的变化率。",
              formula: String.raw`f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h`,
              tag: "导数 / DERIVATIVES",
            },
            {
              id: "riemann-sums",
              n: "03",
              name: "无限小，积成整体。",
              q: "曲线下面的面积，怎样由小矩形得到？",
              formula: String.raw`\int_a^b f(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^n f(x_i)\Delta x`,
              tag: "积分 / INTEGRALS",
            },
          ].map((x) => (
            <Link to={lessonPath(x.id)} key={x.id} className="question-card">
              <div>
                <span>{x.tag}</span>
                <ArrowUpRight size={20} />
              </div>
              <h3>{x.name}</h3>
              <p>{x.q}</p>
              <Formula latex={x.formula} display />
              <span className="card-bottom">
                阅读讲解与互动演示 <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="open-banner">
        <Eyebrow>BUILT BY AI. OPEN TO EVERYONE.</Eyebrow>
        <h2>
          随时打开，
          <br />
          按自己的节奏理解。
        </h2>
        <p>
          所有讲解、例题和练习已经写在书里。
          <br />
          阅读无需注册，图示可以反复探索，整本教材可以带走。
        </p>
        <Link to="about" className="secondary-btn">
          了解开放教科书计划
          <ArrowRight size={17} />
        </Link>
      </section>
    </>
  );
}
