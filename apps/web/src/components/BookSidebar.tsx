import { MathText } from "./MathText";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Download,
  GraduationCap,
  Layers3,
  Search,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { book, lessonById } from "../../../../packages/content";
import type { Lesson } from "../../../../packages/content/types";

import { Link } from "../components/UI";
import { BOOK, chapterPath, lessonPath } from "../lib/catalog";
import { useApp } from "../lib/state";
export function BookSidebar({
  current,
  drawer,
  close,
}: {
  current?: Lesson;
  drawer: boolean;
  close: () => void;
}) {
  const { route, reading, search } = useApp();
  const activeChapter = current?.chapterId || route.path.slice(8);
  const [expanded, setExpanded] = useState<string[]>([activeChapter]);
  const [mobile, setMobile] = useState(
    () => matchMedia("(max-width:1000px)").matches,
  );
  useEffect(() => {
    const m = matchMedia("(max-width:1000px)");
    const change = () => setMobile(m.matches);
    m.addEventListener("change", change);
    return () => m.removeEventListener("change", change);
  }, []);
  useEffect(() => setExpanded([activeChapter]), [activeChapter]);
  const side = useRef<HTMLElement>(null);
  useEffect(() => {
    if (drawer) side.current?.querySelector<HTMLElement>("button")?.focus();
  }, [drawer]);
  return (
    <aside
      ref={side}
      id="book-sidebar"
      className={"book-sidebar " + (drawer ? "open" : "")}
      aria-label="教材目录"
      inert={mobile && !drawer}
      onKeyDown={(e) => {
        if (!drawer || e.key !== "Tab") return;
        const items = side.current?.querySelectorAll<HTMLElement>("a,button");
        if (!items?.length) return;
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }}
    >
      <div className="sidebar-top">
        <Link to={BOOK}>
          <BookOpen size={20} />
          <span>
            Calculus I<small>微积分 I</small>
          </span>
        </Link>
        <button
          className="icon-btn sidebar-close"
          onClick={close}
          aria-label="关闭教材目录"
        >
          <X size={20} />
        </button>
      </div>
      <button className="sidebar-search" onClick={search}>
        <Search size={16} />
        搜索教材内容<kbd>⌘K</kbd>
      </button>
      <div className="sidebar-progress">
        <span>
          阅读进度<b>{reading.read.length} / 35</b>
        </span>
        <progress max={35} value={reading.read.length} />
      </div>
      <nav aria-label="章节目录">
        {book.chapters.map((ch, i) => (
          <div key={ch.id} className="sidebar-chapter">
            <button
              aria-expanded={expanded.includes(ch.id)}
              onClick={() =>
                setExpanded((e) =>
                  e.includes(ch.id)
                    ? e.filter((id) => id !== ch.id)
                    : [...e, ch.id],
                )
              }
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {ch.title}
              <ChevronDown size={14} />
            </button>
            {expanded.includes(ch.id) && (
              <div className="sidebar-lessons">
                <Link to={chapterPath(ch.id)} className="chapter-intro-link">
                  本章概览
                  <ArrowUpRight size={12} />
                </Link>
                {ch.lessonIds.map((id) => (
                  <Link
                    to={lessonPath(id)}
                    key={id}
                    className={current?.id === id ? "active" : ""}
                    aria-current={current?.id === id ? "page" : undefined}
                  >
                    <span>{lessonById[id].number}</span>
                    {lessonById[id].title}
                    {reading.read.includes(id) && <Check size={12} />}
                  </Link>
                ))}
                <Link
                  to={"practice/review/" + ch.id}
                  className="chapter-intro-link"
                >
                  章末回顾
                  <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <Link to="reference">
          <Layers3 size={16} />
          公式与术语
        </Link>
        <Link to="practice/exam">
          <GraduationCap size={16} />
          综合测试
        </Link>
        <Link to="downloads">
          <Download size={16} />
          下载整本教材
        </Link>
      </div>
    </aside>
  );
}
