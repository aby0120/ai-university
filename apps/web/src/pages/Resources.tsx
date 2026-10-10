import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Printer,
  Search,
  Settings2,
} from "lucide-react";
import { book, lessonById, lessons } from "../../../../packages/content";
import supplements from "../../../../packages/content/supplements.json";
import { Formula, MathText } from "../components/MathText";
import { pageWindow, routeHref } from "../lib/navigation";

import {
  Empty,
  Eyebrow,
  Filters,
  Link,
  NotFound,
  PageTitle,
  Pagination,
} from "../components/UI";
import {
  BOOK,
  REPO,
  chapterPath,
  lessonPath,
  searchLessons,
} from "../lib/catalog";
import { useApp } from "../lib/state";
export function ReferencePage() {
  const { route } = useApp();
  const tab = route.params.get("tab") || "formulas";
  const query = route.params.get("q") || "";
  const list = lessons.filter((l) => `${l.title} ${l.concept}`.includes(query));
  const { start, end } = pageWindow(list.length, route.params.get("page"), 7);
  return (
    <>
      <PageTitle
        tag="QUICK REFERENCE"
        title="知识索引"
        description="公式是理解的索引。查到一个定义，再回到它的条件与推导。"
      />
      <nav className="page-tabs" aria-label="索引分类">
        {[
          ["formulas", "公式与定义"],
          ["glossary", "术语索引"],
          ["appendix", "证明与附录"],
        ].map(([id, name]) => (
          <Link
            key={id}
            to="reference"
            params={{ tab: id }}
            className={tab === id ? "active" : ""}
          >
            {name}
          </Link>
        ))}
      </nav>
      {tab === "formulas" ? (
        <>
          <Filters
            path="reference"
            chapter={false}
            values={{ ...Object.fromEntries(route.params), tab }}
          />
          <div className="reference-list">
            {list.slice(start, end).map((l) => (
              <article key={l.id}>
                <header>
                  <Link to={lessonPath(l.id)}>
                    <span>{l.number}</span>
                    <h2>{l.title}</h2>
                    <ArrowUpRight size={17} />
                  </Link>
                </header>
                <Formula latex={l.formalDefinition.latex} display />
                <div className="reference-conditions">
                  <strong>条件</strong>
                  <span>{l.formalDefinition.conditions.join("；")}</span>
                </div>
              </article>
            ))}
          </div>
          {!list.length && (
            <Empty
              title="没有找到相关公式"
              text="试试更短的关键词。"
              to="reference"
              label="返回全部公式"
            />
          )}
          <Pagination
            total={list.length}
            size={7}
            path="reference"
            params={{ tab, q: query }}
          />
        </>
      ) : tab === "glossary" ? (
        <div className="glossary-list">
          {supplements.glossary.map((g) => (
            <article key={g.term}>
              <h2>{g.term}</h2>
              <p>
                <MathText text={g.meaning} />
              </p>
              <Link to={lessonPath(g.lessonId)}>
                查看完整讲解
                <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      ) : tab === "appendix" ? (
        <div className="appendix-list">
          {supplements.appendices.map((a, i) => (
            <article key={i}>
              <Eyebrow>APPENDIX {String(i + 1).padStart(2, "0")}</Eyebrow>
              <h2>{a.title}</h2>
              <p>
                <MathText text={a.text} />
              </p>
            </article>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export function LearningPage() {
  const { reading, progress, route } = useApp();
  const tab = route.params.get("tab") || "recent";
  const reviewLessons = lessons.filter((l) =>
    l.practice.some((q) => progress[q.id] === "review"),
  );
  const ids =
    tab === "saved"
      ? reading.saved
      : tab === "read"
        ? reading.read
        : tab === "review"
          ? reviewLessons.map((l) => l.id)
          : reading.recent;
  return (
    <>
      <PageTitle
        tag="YOUR LEARNING SPACE"
        title="我的学习"
        description="接着上次的地方读，把想回来的知识点留在这里。记录只属于当前浏览器。"
      />
      <div className="learning-stats">
        {[
          [reading.read.length, "已读知识点"],
          [reading.saved.length, "收藏知识点"],
          [
            Object.values(progress).filter((x) => x === "understood").length,
            "已掌握练习",
          ],
          [
            Object.values(progress).filter((x) => x === "review").length,
            "待回顾练习",
          ],
        ].map(([n, s]) => (
          <div key={s}>
            <strong>
              {n}
              <small>{s === "已读知识点" ? " / 35" : ""}</small>
            </strong>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <nav className="page-tabs" aria-label="学习记录分类">
        {[
          ["recent", "最近阅读"],
          ["saved", "我的收藏"],
          ["read", "已读完"],
          ["review", "需要回顾"],
        ].map(([id, name]) => (
          <Link
            key={id}
            to="learning"
            params={{ tab: id }}
            className={tab === id ? "active" : ""}
          >
            {name}
          </Link>
        ))}
      </nav>
      {ids.length ? (
        <div className="learning-list">
          {ids.map((id) => {
            const l = lessonById[id];
            return (
              <div key={id}>
                <span>{l.number}</span>
                <Link to={lessonPath(id)}>
                  <h2>{l.title}</h2>
                  <p>{l.subtitle}</p>
                </Link>
                <Link
                  to={lessonPath(id)}
                  params={tab === "review" ? { view: "practice" } : undefined}
                  className="secondary-btn"
                >
                  {tab === "review" ? "回顾练习" : "继续阅读"}
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Empty
          title={
            tab === "saved"
              ? "还没有收藏"
              : tab === "read"
                ? "还没有标记读完"
                : tab === "review"
                  ? "暂时没有需要回顾的练习"
                  : "从一节清楚的讲解开始"
          }
          text={
            tab === "saved"
              ? "阅读时点一下书签按钮，就能在这里找到它。"
              : "打开教材，阅读和练习记录会留在这个浏览器。"
          }
          to={BOOK}
          label="打开微积分 I"
        />
      )}
      <div className="quiet-note">
        <Settings2 size={23} />
        <div>
          <h3>记录由你掌握</h3>
          <p>不需要账户。你可以导出、导入或清空本地学习记录。</p>
        </div>
        <Link to="about/privacy">
          管理本地数据
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </>
  );
}

export function SearchPage() {
  const { route } = useApp();
  const query = route.params.get("q") || "";
  const list = searchLessons(query);
  const { start, end } = pageWindow(list.length, route.params.get("page"), 8);
  return (
    <>
      <PageTitle
        tag="SEARCH THE TEXTBOOK"
        title="搜索教材"
        description="在解释、定义、例题与练习中寻找你想理解的概念。"
      />
      <form
        className="full-search"
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          location.hash = routeHref("search", {
            q: String(form.get("q") || ""),
          });
        }}
      >
        <Search size={22} />
        <input
          key={query}
          name="q"
          defaultValue={query}
          placeholder="输入关键词…"
          aria-label="搜索关键词"
        />
        <button className="primary-btn">
          搜索
          <ArrowRight size={16} />
        </button>
      </form>
      <p className="search-result-count">
        {query ? `“${query}” · ${list.length} 个知识点` : "输入关键词开始搜索"}
      </p>
      {list.length ? (
        <div className="search-results">
          {list.slice(start, end).map((l) => (
            <Link key={l.id} to={lessonPath(l.id)}>
              <span>{l.number}</span>
              <div>
                <small>
                  微积分 I /{" "}
                  {book.chapters.find((c) => c.id === l.chapterId)!.title}
                </small>
                <h2>{l.title}</h2>
                <p>
                  <MathText text={l.concept} />
                </p>
              </div>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      ) : (
        query && (
          <Empty
            title="没有匹配结果"
            text="可以缩短关键词，或通过知识索引查找。"
            to="reference"
            label="打开知识索引"
          />
        )
      )}
      <Pagination
        total={list.length}
        size={8}
        path="search"
        params={{ q: query }}
      />
    </>
  );
}

export function GuidePage() {
  return (
    <>
      <PageTitle
        tag="A GUIDE TO UNDERSTANDING"
        title="怎样读这本教科书"
        description="不急着记住全部公式。先知道它解决什么问题，再一步步建立自己的理解。"
      />
      <div className="guide-intro">
        <span>01 → 02 → 03</span>
        <h2>
          读懂意思，亲手探索，
          <br />
          独立完成一次。
        </h2>
        <p>
          你可以从第一节顺序阅读，也可以从一个不理解的概念进入。本书每一节都提供相同的学习结构。
        </p>
      </div>
      <div className="guide-steps">
        {[
          [
            "01",
            "先读直觉，再看定义",
            "先用核心意思和直觉建立一个具体图景。随后认真读定义的条件：公式在什么范围有效，什么时候不能用。",
          ],
          [
            "02",
            "移动图形，观察变化",
            "先猜会发生什么，再拖动滑块验证。观察两个极端值，也注意图形的显示范围。演示帮助理解，推导解释为什么成立。",
          ],
          [
            "03",
            "跟做例题，独立练习",
            "例题按步骤读；练习先自己完成，再开提示。对照解答检查遗漏的条件、单位和符号，最后给自己一个诚实的记录。",
          ],
        ].map(([n, h, p]) => (
          <section key={n}>
            <span>{n}</span>
            <div>
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
          </section>
        ))}
      </div>
      <section className="guide-faq">
        <h2>阅读中的几个问题</h2>
        {[
          [
            "不知道从哪里开始？",
            "如果函数与代数已经熟悉，可以从第二章极限开始；遇到先修概念不熟悉时，在“知识连接”里回到对应小节。",
          ],
          [
            "需要多久完成？",
            "按自己的节奏逐节前进。页面显示的阅读时间只是估算，完成例题、演示和练习通常需要更多时间。",
          ],
          [
            "数字答案与符号答案怎么检查？",
            "部分标量题可以在本地检查数值。证明和表达式题通过完整解答自评；网站不会把简单文本匹配当成数学评分。",
          ],
          [
            "没有网络还能读吗？",
            "下载 Markdown 书稿可在本地阅读；下载网站发布包、解压后用本地静态服务打开，可以保留交互功能。在线页面不承诺自动离线缓存。",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <ChevronDown size={17} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <div className="guide-cta">
        <h2>从第一节开始。</h2>
        <Link to={lessonPath("domain")} className="primary-btn">
          函数与定义域
          <ArrowRight size={16} />
        </Link>
        <Link to={chapterPath("limits")} className="text-btn">
          已熟悉函数？直接进入极限
          <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}

export function DownloadsPage() {
  return (
    <>
      <PageTitle
        tag="TAKE THE BOOK WITH YOU"
        title="下载与离线阅读"
        description="整本书可以带走。正文、练习与答案来自同一份固定教材内容。"
      />
      <div className="download-grid">
        <article>
          <Download size={28} />
          <span>TEXTBOOK / MARKDOWN</span>
          <h2>完整书稿</h2>
          <p>
            包含全部 35 节正文、70 个例题、175
            道练习与解答，以及术语和附录。适合本地阅读与编辑。
          </p>
          <a href="Calculus-I.md" download className="primary-btn">
            下载 Markdown
            <Download size={16} />
          </a>
        </article>
        <article>
          <Printer size={28} />
          <span>TEXTBOOK / PRINT</span>
          <h2>整本阅读与打印</h2>
          <p>
            公式已经排版，可以连续阅读，或通过浏览器“打印 → 另存为
            PDF”保存。交互演示请使用网站。
          </p>
          <a
            href="book.html"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            打开打印版
            <ExternalLink size={16} />
          </a>
        </article>
        <article>
          <Github size={28} />
          <span>WEBSITE / OPEN SOURCE</span>
          <h2>网站与教材源码</h2>
          <p>
            下载网站发布包或完整源码。网站在浏览器中完成演示计算，无需配置模型
            API。
          </p>
          <a
            href={REPO + "/releases"}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            查看发布包
            <ArrowUpRight size={16} />
          </a>
        </article>
      </div>
      <section className="plain-section">
        <h2>怎样在本地运行？</h2>
        <p>
          从 GitHub Releases
          下载网站压缩包，解压后启动任意静态文件服务，并在浏览器打开。源码的安装、运行和部署说明都在
          README 中。
        </p>
        <p>
          教材文本采用 CC0，网站代码采用
          MIT；第三方库保留各自的许可证。欢迎复制、修改与重新发布。
        </p>
        <Link to="about/contribute" className="text-btn">
          查看贡献与许可证说明
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
