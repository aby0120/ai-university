import {
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  Download,
  Lightbulb,
  RotateCcw,
} from "lucide-react";
import { useRef, useState } from "react";
import { book, lessonById } from "../../../../packages/content";
import { type Progress } from "../components/Practice";

import { Eyebrow, Link, NotFound, PageTitle } from "../components/UI";
import { REPO } from "../lib/catalog";
import { questionIds, useApp, type Reading } from "../lib/state";
export function AboutPage() {
  const { route } = useApp();
  const part = route.path.split("/")[1] || "project";
  const names: Record<string, string> = {
    project: "关于 AI University",
    contribute: "参与贡献",
    versions: "版本与勘误",
    privacy: "隐私与本地数据",
  };
  if (!names[part]) return <NotFound />;
  return (
    <>
      <PageTitle
        tag="THE OPEN TEXTBOOK PROJECT"
        title={names[part]}
        description={
          part === "project"
            ? "让 AI 写成完整教科书，让知识以清楚、开放的方式被阅读。"
            : part === "contribute"
              ? "修正一个错误，改善一道例题，或者让一张图更容易理解。"
              : part === "versions"
                ? "记录教材与网站的变化，让修订过程公开可追溯。"
                : "学习记录保存在你的浏览器中，可以随时导出或清空。"
        }
      />
      <nav className="page-tabs" aria-label="项目资料">
        {Object.entries(names).map(([id, name]) => (
          <Link
            key={id}
            to={id === "project" ? "about" : "about/" + id}
            className={part === id ? "active" : ""}
          >
            {name.replace(" AI University", "")}
          </Link>
        ))}
      </nav>
      {part === "project" ? (
        <div className="about-content">
          <div className="about-statement">
            <Eyebrow>CLARITY IS THE POINT.</Eyebrow>
            <h2>
              把完整的知识，
              <br />
              写成可以读懂的书。
            </h2>
            <p>
              AI University 是一套由 AI 制作的开放教科书。AI
              在制作阶段编写解释、定义、推导、例题、练习和可交互图示；发布后，读者直接阅读固定版本。
            </p>
          </div>
          <div className="about-values">
            {[
              [
                "完整，而不是摘选",
                "每一卷都沿着系统的课程结构完成。当前微积分 I 覆盖函数基础、极限、求导、积分与几何和物理应用。",
              ],
              [
                "清楚，也保留必要条件",
                "用直觉建立入口，用精确定义守住边界。简单讲解不等于省略数学成立所需要的前提。",
              ],
              [
                "开放，可以审查与修改",
                "固定教材内容、演示模型和生成流程都在 GitHub 中公开。所有修改都能追溯到具体文件与版本。",
              ],
            ].map(([h, p]) => (
              <section key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </section>
            ))}
          </div>
          <div className="provenance-note">
            <CircleCheck size={23} />
            <div>
              <strong>关于 AI 编写与复核</strong>
              <p>
                本书标记为
                AI-generated，尚未声称经过人工审校。结构、公式排版和部分数学模型经过程序检查；这些检查不等于证明整本教材绝无错误。
              </p>
              <Link to="about/versions">
                查看版本与勘误
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      ) : part === "contribute" ? (
        <div className="plain-section">
          <h2>从具体的改进开始</h2>
          <ol className="contribution-steps">
            <li>
              <span>01</span>
              <div>
                <h3>指出问题</h3>
                <p>
                  注明章节编号、原文或图示状态，写清楚错在哪里。数学问题尽量给出复算、反例或遗漏的适用条件。
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>修改固定教材源文件</h3>
                <p>
                  正文在 packages/content 中，每节使用统一
                  schema。网页、整本书稿、练习和先修关系保持一致。
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>检查后提交</h3>
                <p>
                  运行内容与构建检查，验证相关演示边界和手机页面。通过 Issue 或
                  Pull Request 提交可审查的改动。
                </p>
              </div>
            </li>
          </ol>
          <div className="contribution-links">
            <a
              href={REPO + "/issues/new"}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              报告问题
              <ArrowUpRight size={16} />
            </a>
            <a
              href={REPO + "/blob/main/CONTRIBUTING.md"}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              贡献指南
              <ArrowUpRight size={16} />
            </a>
            <a
              href={REPO + "/blob/main/docs/CONTENT_GUIDE.md"}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              教材写作规范
              <ArrowUpRight size={16} />
            </a>
          </div>
          <h2>许可证</h2>
          <p>
            网站代码采用 MIT；教材原始文本与题目采用
            CC0。第三方公式渲染和图标库使用各自的许可证，详见仓库中的第三方声明。
          </p>
        </div>
      ) : part === "versions" ? (
        <div className="versions-page">
          <div className="version-entry">
            <span className="badge">当前网站</span>
            <h2>v0.2.0 · 完整阅读体验</h2>
            <time>2026 年 10 月 10 日</time>
            <ul>
              <li>重建首页、书库、教材主页、7 个章节主页与 35 个小节页面。</li>
              <li>新增互动实验室、分页练习中心、全文搜索与学习记录。</li>
              <li>重做正文、推导、例题、误区、演示和练习的呈现方式。</li>
              <li>保持完整微积分 I 固定内容与纯静态运行方式。</li>
            </ul>
          </div>
          <div className="version-entry">
            <h2>v0.1.0 · 微积分 I 首版</h2>
            <time>2026 年 10 月 10 日</time>
            <p>
              7 章、35 节、70 个例题、140 节内练习、21 章末回顾题、14
              综合测试题。包含数学演示、术语索引与补充证明。
            </p>
          </div>
          <div className="quiet-note">
            <Lightbulb size={23} />
            <div>
              <h3>发现需要修正的地方？</h3>
              <p>
                请附章节编号、具体原文或图示状态。勘误以仓库 Issue
                和修订历史为准。
              </p>
            </div>
            <a href={REPO + "/issues"} target="_blank" rel="noreferrer">
              查看与提交勘误
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      ) : (
        <PrivacyPanel />
      )}
    </>
  );
}

export function PrivacyPanel() {
  const { reading, progress, update, mark, clear } = useApp();
  const [armed, setArmed] = useState(false);
  const [message, setMessage] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  function exportData() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            format: "ai-university-progress-v2",
            book: book.id,
            reading,
            progress,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-university-learning.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  async function importData(file?: File) {
    if (!file) return;
    try {
      if (file.size > 1000000) throw new Error();
      const data = JSON.parse(await file.text());
      if (data.book !== book.id || data.format !== "ai-university-progress-v2")
        throw new Error();
      const raw = data.reading;
      const valid = (v: unknown): string[] =>
        Array.isArray(v)
          ? [
              ...new Set(
                v.filter(
                  (id): id is string =>
                    typeof id === "string" && !!lessonById[id],
                ),
              ),
            ]
          : [];
      const next: Reading = {
        read: valid(raw?.read),
        saved: valid(raw?.saved),
        recent: valid(raw?.recent).slice(0, 8),
        large: raw?.large === true,
      };
      update(next);
      if (data.progress && typeof data.progress === "object") {
        const entries = Object.entries(data.progress).filter(
          ([id, v]) =>
            questionIds.has(id) && (v === "understood" || v === "review"),
        );
        const merged = {
          ...progress,
          ...Object.fromEntries(entries),
        } as Progress;
        try {
          localStorage.setItem(
            "ai-university-calculus-1-progress-v1",
            JSON.stringify(merged),
          );
        } catch {}
        for (const [id, v] of entries) mark(id, v as "understood" | "review");
      }
      setMessage("已导入阅读与收藏记录。练习记录已合并。");
    } catch {
      setMessage("无法导入这个文件。请选择从本网站导出的学习记录 JSON。");
    }
    if (fileInput.current) fileInput.current.value = "";
  }
  return (
    <div className="plain-section">
      <h2>哪些数据留在浏览器里？</h2>
      <p>
        最近阅读、已读小节、收藏、字号偏好和练习自评保存在本地。网站没有用户账户，也没有将这些记录上传到服务器的功能。不同设备和浏览器不会自动同步。
      </p>
      <p>
        托管服务可能保留常规访问日志；这是网站托管行为，和本地学习记录不同。本网站没有接入第三方行为分析。
      </p>
      <div className="data-controls">
        <h3>管理学习记录</h3>
        <p>
          {reading.read.length} 节已读 · {reading.saved.length} 个收藏 ·{" "}
          {Object.keys(progress).length} 道练习有记录
        </p>
        <div>
          <button className="secondary-btn" onClick={exportData}>
            <Download size={16} />
            导出学习记录
          </button>
          <button
            className="secondary-btn"
            onClick={() => fileInput.current?.click()}
          >
            导入记录
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            aria-label="导入学习记录文件"
            onChange={(e) => importData(e.target.files?.[0])}
          />
          <button
            className="text-btn danger"
            onClick={() => {
              if (!armed) {
                setArmed(true);
                return;
              }
              clear();
              setArmed(false);
              setMessage("本地学习记录已清空。");
            }}
          >
            <RotateCcw size={16} />
            {armed ? "确认清空本地记录" : "清空本地记录"}
          </button>
          {armed && (
            <button className="text-btn" onClick={() => setArmed(false)}>
              取消
            </button>
          )}
        </div>
        {message && <p role="status">{message}</p>}
      </div>
    </div>
  );
}
