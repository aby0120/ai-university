import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { type ReactNode } from "react";
import { book } from "../../../../packages/content";
import type { Lesson } from "../../../../packages/content/types";
import { Formula } from "../components/MathText";
import { pageWindow, routeHref } from "../lib/navigation";

import { BOOK, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
import { firstVolume, type PublishedVolume, type Volume } from "../lib/library";
export function Link({
  to,
  params,
  children,
  className = "",
  ...props
}: {
  to: string;
  params?: Record<string, string | number | undefined>;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  "aria-current"?: "page" | "step";
}) {
  return (
    <a className={className} href={routeHref(to, params)} {...props}>
      {children}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function PageTitle({
  tag,
  title,
  description,
  children,
}: {
  tag: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-heading">
      <div>
        <Eyebrow>{tag}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="面包屑导航">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <ChevronRight size={13} />}{" "}
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function BookStats({
  volume = firstVolume,
}: {
  volume?: PublishedVolume;
}) {
  return (
    <div className="book-stats">
      {[
        [volume.stats.chapters, "章节"],
        [volume.stats.lessons, "知识点"],
        [volume.stats.examples, "逐步例题"],
        [volume.stats.exercises, "练习与解答"],
      ].map(([n, s]) => (
        <span key={s}>
          <strong>{n}</strong>
          {s}
        </span>
      ))}
    </div>
  );
}

export function BookCover({
  small = false,
  volume = firstVolume,
}: {
  small?: boolean;
  volume?: Volume;
}) {
  return (
    <div className={"book-cover " + (small ? "small" : "")}>
      <div className="cover-top">
        AI UNIVERSITY<span>MATHEMATICS</span>
      </div>
      <div>
        <span>MATHEMATICS</span>
        <h2>
          {volume.coverTitle.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {i === 1 && /^I+$/.test(line) ? <em>{line}</em> : line}
            </span>
          ))}
        </h2>
        <p>
          {volume.title}
          <br />
          {volume.tagline}
        </p>
      </div>
      <div className="cover-bottom">
        {volume.status === "published" && (
          <Formula latex={volume.coverFormula} />
        )}
        <span>OPEN TEXTBOOK</span>
      </div>
    </div>
  );
}

export function LessonRow({ lesson }: { lesson: Lesson }) {
  const { reading } = useApp();
  return (
    <Link to={lessonPath(lesson.id)} className="lesson-row">
      <span className="lesson-number">{lesson.number}</span>
      <span>{lesson.title}</span>
      {reading.read.includes(lesson.id) ? (
        <Check size={16} className="read-check" />
      ) : (
        <ArrowRight size={15} />
      )}
    </Link>
  );
}

export function Filters({
  path,
  values,
  chapter = true,
}: {
  path: string;
  values: Record<string, string>;
  chapter?: boolean;
}) {
  function change(key: string, value: string) {
    location.hash = routeHref(path, {
      ...values,
      [key]: value,
      page: undefined,
    });
  }
  return (
    <div className="filter-bar">
      <div>
        <SlidersHorizontal size={17} />
        <span>筛选</span>
        {chapter && (
          <label>
            <span className="sr-only">筛选章节</span>
            <select
              aria-label="筛选章节"
              value={values.chapter || ""}
              onChange={(e) => change("chapter", e.target.value)}
            >
              <option value="">全部章节</option>
              {book.chapters.map((ch, i) => (
                <option value={ch.id} key={ch.id}>
                  {i + 1}. {ch.title}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      <label className="filter-search">
        <Search size={17} />
        <input
          aria-label="筛选知识点"
          placeholder="搜索知识点…"
          value={values.q || ""}
          onChange={(e) => change("q", e.target.value)}
        />
      </label>
    </div>
  );
}

export function Pagination({
  total,
  size = 6,
  path,
  params = {},
}: {
  total: number;
  size?: number;
  path: string;
  params?: Record<string, string>;
}) {
  const { route } = useApp();
  const { page, pages, start, end } = pageWindow(
    total,
    route.params.get("page"),
    size,
  );
  return (
    <div className="pagination">
      <span>
        {total ? `${start + 1}–${end}` : "0"} / {total} 项
      </span>
      <nav aria-label="分页导航">
        {page > 1 ? (
          <Link
            to={path}
            params={{ ...params, page: page - 1 }}
            aria-label="上一页"
          >
            <ChevronRight className="flip" size={16} />
          </Link>
        ) : (
          <span className="disabled-page">
            <ChevronRight className="flip" size={16} />
          </span>
        )}
        {Array.from({ length: pages }, (_, i) => (
          <Link
            key={i}
            to={path}
            params={{ ...params, page: i + 1 }}
            className={page === i + 1 ? "active" : ""}
            aria-current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </Link>
        ))}
        {page < pages ? (
          <Link
            to={path}
            params={{ ...params, page: page + 1 }}
            aria-label="下一页"
          >
            <ChevronRight size={16} />
          </Link>
        ) : (
          <span className="disabled-page">
            <ChevronRight size={16} />
          </span>
        )}
      </nav>
    </div>
  );
}

export function Empty({
  title,
  text,
  to,
  label,
}: {
  title: string;
  text: string;
  to: string;
  label: string;
}) {
  return (
    <div className="empty-state">
      <BookOpen size={30} />
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={to} className="secondary-btn">
        {label}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export function NotFound() {
  return (
    <Empty
      title="这一页还没有找到"
      text="地址可能不完整。你可以通过目录或搜索继续阅读。"
      to={BOOK}
      label="回到教材目录"
    />
  );
}
