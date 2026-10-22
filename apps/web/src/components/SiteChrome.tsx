import {collectionForLesson} from "../../../../packages/content";
import { MathText } from "./MathText";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { routeHref } from "../lib/navigation";

import { Link } from "../components/UI";
import { REPO, lessonPath, searchTextbooks as searchLessons } from "../lib/catalog";
import { useApp } from "../lib/state";
export function Footer() {
  return (
    <footer
      className={
        "site-footer immersive-footer"
      }
    >
      <div className="footer-top">
        <div>
          <Link to="home" className="footer-brand">
            AI University<span>•</span>
          </Link>
          <p>
            清楚的解释，可以动手的知识。
            <br />由 AI 编写，向所有人开放。
          </p>
        </div>
        <div>
          <strong>开始学习</strong>
          <Link to="library">教科书库</Link>
          <Link to="lab">互动实验室</Link>
          <Link to="practice">练习中心</Link>
          <Link to="guide">阅读指南</Link>
        </div>
        <div>
          <strong>阅读资源</strong>
          <Link to="about/research">学习方法与参考资料</Link>
          <Link to="reference">公式与术语</Link>
          <Link to="downloads">下载与打印</Link>
          <Link to="learning">我的学习</Link>
        </div>
        <div>
          <strong>开放计划</strong>
          <Link to="about">关于项目</Link>
          <Link to="about/contribute">参与贡献</Link>
          <Link to="about/versions">版本与勘误</Link>
          <a href={REPO} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>AI University · 2026 · 代码 MIT / 教材 CC0</span>
        <Link to="about/privacy">隐私与本地数据</Link>
        <span>无需账户，随时开始。</span>
      </div>
    </footer>
  );
}

export function SearchDialog({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  const [query, setQuery] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const { search } = useApp();
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        search();
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [search]);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      input.current?.focus();
    } else dialog.current?.close();
  }, [open]);
  const results = searchLessons(query).slice(0, 5);
  function allResults() {
    if (!query.trim()) return;
    location.hash = routeHref("search", { q: query.trim() });
    close();
  }
  return (
    <dialog
      ref={dialog}
      className="search-dialog"
      aria-label="搜索教材"
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="search-dialog-input">
        <Search size={22} />
        <input
          ref={input}
          aria-label="搜索全文"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索概念、公式、例题…"
          onKeyDown={(e) => {
            if (e.key === "Enter") allResults();
          }}
        />
        <button className="icon-btn" aria-label="关闭搜索" onClick={close}>
          <X size={19} />
        </button>
      </div>
      <div className="search-dialog-body">
        {query.trim() ? (
          <>
            <span className="search-caption">
              找到 {searchLessons(query).length} 个知识点
            </span>
            {results.map((l) => (
              <Link key={l.id} to={l.route}>
                <span>{l.number}</span>
                <div>
                  <strong>{l.isMath?<MathText text={l.title}/>:l.title}</strong>
                  <p>{l.bookTitle} · {l.isMath?<MathText text={l.subtitle}/>:l.subtitle}</p>
                </div>
                <ArrowUpRight size={18} />
              </Link>
            ))}
            {!results.length && (
              <p className="no-result">
                没有匹配结果。试试“极限”“面积”或“链式”。
              </p>
            )}
            {results.length > 0 && (
              <button className="all-results" onClick={allResults}>
                查看全部结果
                <ArrowRight size={16} />
              </button>
            )}
          </>
        ) : (
          <>
            <span className="search-caption">常用入口</span>
            {["极限", "导数", "Python", "Git"].map((q) => (
              <button
                className="search-suggestion"
                key={q}
                onClick={() => setQuery(q)}
              >
                <Search size={15} />
                {q}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </>
        )}
      </div>
      <div className="search-dialog-footer">
        <span>搜索完整教材正文与例题</span>
        <span>
          <kbd>Enter</kbd> 查看全部 <kbd>Esc</kbd> 关闭
        </span>
      </div>
    </dialog>
  );
}
