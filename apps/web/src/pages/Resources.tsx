import {VolumeSwitcher} from "../components/VolumeSwitcher";
import {useCurriculum} from "../lib/curriculum";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Lightbulb,
  Printer,
  Search,
  Settings2,
} from "lucide-react";
import {lessonById, allLessons, collections} from "../../../../packages/content";

import { Formula, MathText, plainMathText } from "../components/MathText";
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
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { route } = useApp();
  const tab = route.params.get("tab") || "formulas";
  const query = route.params.get("q") || "";
  const list = lessons.filter((l) => plainMathText(`${l.title} ${l.concept}`).includes(query));
  const { start, end } = pageWindow(list.length, route.params.get("page"), 7);
  return (
    <>
      <PageTitle
        tag="QUICK REFERENCE"
        title="知识索引"
        description="公式是理解的索引。查到一个定义，再回到它的条件与推导。"
      />
      <VolumeSwitcher path={"reference"}/>
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
            aria-current={tab === id ? "page" : undefined}
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
                    <h2><MathText text={l.title} /></h2>
                    <ArrowUpRight size={17} />
                  </Link>
                </header>
                <Formula latex={l.formalDefinition.latex} display />
                <div className="reference-conditions">
                  <strong>条件</strong>
                  <span><MathText text={l.formalDefinition.conditions.join("；")} /></span>
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
              <h2><MathText text={g.term} /></h2>
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
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  const { reading, progress, route } = useApp();
  const tab = route.params.get("tab") || "recent";
  const reviewLessons = lessons.filter((l) =>
    l.practice.some((q) => progress[q.id] === "review"),
  );
  const selectedIds =
    tab === "saved"
      ? reading.saved
      : tab === "read"
        ? reading.read
        : tab === "review"
          ? reviewLessons.map((l) => l.id)
          : reading.recent;
  const ids=selectedIds.filter(id=>book.lessonIds.includes(id));
  const localProgress=Object.entries(progress).filter(([id])=>[...lessons.flatMap(l=>l.practice),...supplements.exam,...supplements.reviews.flatMap(r=>r.questions)].some(q=>q.id===id)).map(([,v])=>v);
  return (
    <>
      <PageTitle
        tag="YOUR LEARNING SPACE"
        title="我的学习"
        description="接着上次的地方读，把想回来的知识点留在这里。记录只属于当前浏览器。"
      />
      <VolumeSwitcher path={"learning"}/>
      <div className="learning-stats">
        {[
          [reading.read.filter(id=>book.lessonIds.includes(id)).length, "已读知识点"],
          [reading.saved.filter(id=>book.lessonIds.includes(id)).length, "收藏知识点"],
          [
            localProgress.filter((x) => x === "understood").length,
            "已掌握练习",
          ],
          [
            localProgress.filter((x) => x === "review").length,
            "待回顾练习",
          ],
        ].map(([n, s]) => (
          <div key={s}>
            <strong>
              {n}
              <small>{s === "已读知识点" ? " / "+lessons.length : ""}</small>
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
            aria-current={tab === id ? "page" : undefined}
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
                  <h2><MathText text={l.title} /></h2>
                  <p><MathText text={l.subtitle} /></p>
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
          label={"打开"+book.titleZh}
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
                  {collections.find(c=>c.book.lessonIds.includes(l.id))!.book.titleZh+" · "+collections.flatMap(c=>c.book.chapters).find(c=>c.id===l.chapterId)!.title}
                </small>
                <h2><MathText text={l.title} /></h2>
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
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  return (
    <>
      <PageTitle
        tag="A GUIDE TO UNDERSTANDING"
        title="怎样读这本教科书"
        description="每节都有讲解、图示、例题和练习，可以顺序阅读，也可以按需要查阅。"
      />
      <div className="guide-intro">
        <span>01 → 02 → 03</span>
        <h2>
          阅读讲解，操作图示，
          <br />
          完成练习。
        </h2>
        <p>
          你可以从第一节顺序阅读，也可以从一个不理解的概念进入。本书每一节都提供相同的学习结构。
        </p>
      </div>
      <div className="guide-steps">
        {[
          [
            "01",
            "阅读讲解",
            "先读概念和解释，不明白时可点“换个说法”。读定义时注意条件：公式在哪些输入和区间有效，什么时候不能用。",
          ],
          [
            "02",
            "操作图示",
            "点击演示步骤，图形会切换到对应参数；点“查看说明”可看结果的解释。也可以拖动滑块或输入数值，自行比较不同情况。",
          ],
          [
            "03",
            "完成练习",
            "先自己做，再对照例题步骤。练习卡住时可以查看提示或第一步；做对后，确认自己能说明过程，再标记为已掌握。",
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
      <div className="quiet-note teaching-transparency"><Lightbulb size={22}/><div><h3>教材与图示怎样制作？</h3><p>教材内容由 AI 编写，按固定版本发布。图形在浏览器中计算，可以随操作变化；文字和解答不会实时生成。</p></div></div>
      <section className="guide-faq">
        <h2>阅读中的几个问题</h2>
        {[
          [
            "不知道从哪里开始？",
            "从本卷第一章开始；已熟悉的部分可跳过。遇到先修概念不熟悉时，在“知识连接”里回到对应小节。",
          ],
          [
            "需要多久完成？",
            "按自己的节奏逐节前进。能用自己的话解释、独立完成一道题，比读过多少页更有用。",
          ],
          [
            "数字答案与符号答案怎么检查？",
            "部分标量题可以在本地检查数值。证明和表达式题通过完整解答自评；网站不会把简单文本匹配当成数学评分。",
          ],
          [
            "没有网络还能读吗？",
            "下载 Markdown 书稿可在本地阅读；下载网站发布包、解压后用本地静态服务打开，可以保留交互功能。离线阅读请提前下载，网页不会自动缓存整本书。",
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
      <div className="quiet-note">
        <Lightbulb size={21} />
        <div>
          <h3>这些学习方法依据什么？</h3>
          <p>查看参考教材、图解和学习研究，也可以用它们补充阅读。</p>
          <Link to="about/research" className="text-btn">
            学习方法与参考资料
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
      <div className="guide-cta">
        <h2>从第一节开始。</h2>
        <Link to={lessonPath(book.lessonIds[0])} className="primary-btn">
          {lessons[0].title}
          <ArrowRight size={16} />
        </Link>
        <Link to={chapterPath(book.chapters[1].id)} className="text-btn">
          跳到第二章
          <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}

export function DownloadsPage() {
  const {book,lessons,bookStats,supplements,BOOK,filename,printFile}=useCurriculum();
  return (
    <>
      <PageTitle
        tag="TAKE THE BOOK WITH YOU"
        title="下载与离线阅读"
        description="整本书可以带走。正文、练习与答案来自同一份固定教材内容。"
      />
      <VolumeSwitcher path={"downloads"}/>
      <div className="download-grid">
        <article>
          <Download size={28} />
          <span>TEXTBOOK / MARKDOWN</span>
          <h2>完整书稿</h2>
          <p>
            包含全部 {bookStats.lessons} 节正文、{bookStats.examples} 个例题、{bookStats.exercises}
            道练习与解答，以及术语和附录。适合本地阅读与编辑。
          </p>
          <a href={filename} download className="primary-btn">
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
            href={printFile}
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
