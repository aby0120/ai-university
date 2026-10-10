import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { book, lessons } from "../../../../packages/content";
import supplements from "../../../../packages/content/supplements.json";
import type { Exercise } from "../../../../packages/content/types";
import { PracticeSet } from "../components/Practice";
import { VisualPreview } from "../components/Visual";
import { pageWindow } from "../lib/navigation";

import {
  Breadcrumb,
  Empty,
  Filters,
  Link,
  NotFound,
  PageTitle,
  Pagination,
} from "../components/UI";
import { chapterPath, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
export function ExplorePage({ mode }: { mode: "lab" | "practice" }) {
  const { route, progress } = useApp();
  const params = Object.fromEntries(route.params);
  const query = (params.q || "").toLowerCase();
  const list = lessons.filter(
    (l) =>
      (!params.chapter || l.chapterId === params.chapter) &&
      `${l.title} ${l.subtitle} ${l.concept}`.toLowerCase().includes(query),
  );
  const { start, end } = pageWindow(list.length, route.params.get("page"), 6);
  return (
    <>
      <PageTitle
        tag={mode === "lab" ? "THE INTERACTIVE LAB" : "PRACTICE & REFLECT"}
        title={mode === "lab" ? "互动实验室" : "练习中心"}
        description={
          mode === "lab"
            ? "移动一个点，改变一个参数。让抽象概念在眼前发生。"
            : "先独立尝试，再对照完整解答。按知识点练习，也可以回顾整章。"
        }
      >
        <span className="page-count">
          {mode === "lab" ? "35 个演示" : "175 道练习"}
          <small>Calculus I</small>
        </span>
      </PageTitle>
      {mode === "practice" && (
        <div className="practice-feature">
          <GraduationCap size={32} />
          <div>
            <h2>整本书 · 综合测试</h2>
            <p>14 道题，从函数与极限到积分应用，连接整本知识。</p>
          </div>
          <Link to="practice/exam" className="primary-btn">
            开始测试
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
      <Filters path={mode} values={params} />
      {list.length ? (
        <div className={mode === "lab" ? "lab-grid" : "practice-grid"}>
          {list.slice(start, end).map((l) => {
            const done = l.practice.filter(
              (q) => progress[q.id] === "understood",
            ).length;
            return (
              <Link
                key={l.id}
                to={lessonPath(l.id)}
                params={{ view: mode === "lab" ? "visual" : "practice" }}
                className={mode === "lab" ? "lab-card" : "practice-card"}
              >
                {mode === "lab" ? (
                  <div className="lab-preview">
                    <VisualPreview lesson={l} />
                    <span>可调参数 · 交互图示</span>
                  </div>
                ) : (
                  <div className="practice-card-top">
                    <span>SECTION {l.number}</span>
                    <span>{done} / 4 已掌握</span>
                  </div>
                )}
                <div className="explore-card-body">
                  <small>
                    {l.number} /{" "}
                    {book.chapters.find((c) => c.id === l.chapterId)!.title}
                  </small>
                  <h3>{l.title}</h3>
                  <p>
                    {mode === "lab" ? l.interactiveVisual.caption : l.subtitle}
                  </p>
                  <div>
                    <span>
                      {mode === "lab" ? "打开互动演示" : "开始本节练习"}
                    </span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <Empty
          title="没有匹配的知识点"
          text="换一个关键词，或者选择全部章节。"
          to={mode}
          label="清除筛选"
        />
      )}
      <Pagination total={list.length} path={mode} params={params} />
      {mode === "practice" && (
        <section className="chapter-reviews">
          <div className="section-title">
            <h2>章末回顾</h2>
            <span>每章 3 道题</span>
          </div>
          {book.chapters.map((ch, i) => (
            <Link key={ch.id} to={"practice/review/" + ch.id}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {ch.title}
              <ArrowRight size={17} />
            </Link>
          ))}
        </section>
      )}
    </>
  );
}

export function ReviewPage() {
  const { route, progress, mark } = useApp();
  const chId = route.path.replace("practice/review/", "");
  const review = supplements.reviews.find((r) => r.chapterId === chId);
  if (route.path !== "practice/exam" && !review) return <NotFound />;
  return (
    <>
      <Breadcrumb
        items={[
          { label: "练习中心", to: "practice" },
          { label: review ? "章末回顾" : "综合测试" },
        ]}
      />
      <PageTitle
        tag="REVIEW & CONNECT"
        title={review?.title || "整本书 · 综合测试"}
        description="先独立完成，再展开解答对照思路。每一道题都有提示和完整答案。"
      />
      <PracticeSet
        key={route.path}
        questions={(review?.questions || supplements.exam) as Exercise[]}
        progress={progress}
        onMark={mark}
      />
      <div className="back-row">
        <Link to="practice" className="text-btn">
          <ArrowLeft size={16} />
          回到练习中心
        </Link>
        {review && (
          <Link to={chapterPath(review.chapterId)} className="text-btn">
            回到本章
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </>
  );
}
