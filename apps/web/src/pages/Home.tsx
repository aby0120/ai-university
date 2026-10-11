import { ArrowRight, ArrowUpRight, Beaker, BookOpen } from "lucide-react";
import { HeroNotebook } from "../components/HeroNotebook";
import { Eyebrow, Link } from "../components/UI";
import {
  MathAreas,
  PublishedBook,
  SeriesPrinciples,
} from "../components/Series";
import { mathAreas, publishedVolumes, volumes } from "../lib/library";

export function Home() {
  return (
    <>
      <section className="home-hero series-home-hero">
        <div className="hero-copy">
          <Link to="library" className="release-pill">
            <span />
            开放数学教科书系列
            <ArrowUpRight size={14} />
          </Link>
          <Eyebrow>AI UNIVERSITY / MATHEMATICS</Eyebrow>
          <h1>
            数学，
            <br />
            <span>讲清楚。</span>
          </h1>
          <p>
            一本一本完成的开放数学教材。
            <br />
            简明讲解、完整推导、可操作的二维与三维图。
            <br className="desktop-break" />
            从一个问题出发，弄懂公式为什么成立。
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" to="library">
              探索数学教科书
              <ArrowRight size={18} />
            </Link>
            <Link to="lab" className="text-btn">
              体验互动演示
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-footnote">
            <BookOpen size={15} />
            系统教材<span>·</span>
            <Beaker size={15} />
            交互图示<span>·</span>免费与开源
          </div>
          <div className="series-hero-note">
            <span>{mathAreas.length} 个数学方向</span>
            <span>{publishedVolumes.length} 本已出版</span>
            <span>{volumes.length - publishedVolumes.length} 本规划中</span>
          </div>
        </div>
        <HeroNotebook />
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
            <Eyebrow>EXPLORE MATHEMATICS</Eyebrow>
            <h2>从变化到空间，再到结构。</h2>
          </div>
          <p>从一套系列出发，一本一本完成。</p>
        </div>
        <MathAreas />
        <p className="series-scope-note">
          目前专注数学。各方向持续扩展，教材完成后开放整本阅读。
        </p>
      </section>
      <section className="home-section published-section">
        <div className="section-title">
          <div>
            <Eyebrow>NOW ON THE SHELF</Eyebrow>
            <h2>开始读一本完整的书。</h2>
          </div>
          <Link
            to="library"
            params={{ status: "published" }}
            className="text-btn"
          >
            查看已出版教材
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="published-book-list">
          {publishedVolumes.map((volume) => (
            <PublishedBook key={volume.id} volume={volume} />
          ))}
        </div>
      </section>
      <SeriesPrinciples />
      <section className="open-banner">
        <Eyebrow>BUILT BY AI. OPEN TO EVERYONE.</Eyebrow>
        <h2>
          免费阅读。自由下载。
          <br />
          也欢迎你把它改得更好。
        </h2>
        <p>
          每本书有完整的目录、讲解、图示与练习。
          <br />
          随时打开，按自己的节奏理解，也可以下载与分享。
        </p>
        <Link to="about" className="secondary-btn">
          了解开放教科书计划
          <ArrowRight size={17} />
        </Link>
      </section>
    </>
  );
}
