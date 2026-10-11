import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Formula } from "./MathText";
import { BookCover, BookStats, Eyebrow, Link } from "./UI";
import {
  areaFor,
  mathAreas,
  publishedVolumes,
  type MathArea,
  type PublishedVolume,
  type Volume,
} from "../lib/library";

function AreaDrawing({ kind }: { kind: MathArea["symbol"] }) {
  return (
    <svg viewBox="0 0 240 105" className="area-drawing" aria-hidden="true">
      {kind === "calculus" ? (
        <>
          <path
            className="area-fill"
            d="M25 85 C75 85 72 45 112 54 S160 12 210 20 L210 85Z"
          />
          <path className="area-axis" d="M20 15V88H220" />
          <path d="M25 85 C75 85 72 45 112 54 S160 12 210 20" />
          <path className="area-soft" d="M105 72L190 5" />
          <circle cx="148" cy="39" r="4" />
        </>
      ) : kind === "linear" ? (
        <>
          <path className="area-axis" d="M120 95V10M25 65H220" />
          <path
            className="area-soft"
            d="M55 65V25H105V65ZM55 25L75 10M105 25L158 18M105 65L178 65"
          />
          <path className="area-fill" d="M75 10L158 18L178 65L95 57Z" />
          <path d="M75 10L158 18L178 65L95 57Z" />
          <path d="M120 65L178 35M120 65L92 15" />
          <circle cx="120" cy="65" r="3" />
        </>
      ) : kind === "dynamics" ? (
        <>
          <path className="area-axis" d="M20 12V88H220" />
          <path d="M25 82C90 82 85 28 132 25S186 20 215 20" />
          <path
            className="area-soft"
            d="M25 65C75 65 65 36 95 38S135 78 160 61S185 25 216 38"
          />
          {[35, 70, 105, 140, 175, 210].map((x, i) => (
            <path
              className="area-soft"
              key={x}
              d={`M${x} 85l9 -8M${x} 58l9 -${10 - i}M${x} 25l9 2`}
            />
          ))}
        </>
      ) : kind === "probability" ? (
        <>
          <path className="area-axis" d="M20 88H220" />
          {[9, 23, 44, 62, 72, 62, 44, 23, 9].map((h, i) => (
            <rect
              className="area-fill"
              key={i}
              x={30 + i * 20}
              y={88 - h}
              width="14"
              height={h}
            />
          ))}
          <path d="M23 85C65 85 75 17 117 17S170 85 215 85" />
        </>
      ) : kind === "discrete" ? (
        <>
          <path
            className="area-soft"
            d="M45 55L90 20L140 65L190 25L207 83L140 65L90 20L75 87L45 55L140 65"
          />
          {[
            [45, 55],
            [90, 20],
            [140, 65],
            [190, 25],
            [207, 83],
            [75, 87],
          ].map(([x, y], i) => (
            <circle className="area-node" key={i} cx={x} cy={y} r="7" />
          ))}
        </>
      ) : (
        <>
          <rect className="area-fill" x="20" y="29" width="200" height="40" />
          <path className="area-axis" d="M20 49H220" />
          <path className="area-soft" d="M20 29H220M20 69H220" />
          {[
            [35, 85],
            [59, 19],
            [83, 66],
            [108, 40],
            [137, 54],
            [169, 47],
            [207, 50],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.5" />
          ))}
        </>
      )}
    </svg>
  );
}

export function MathAreas() {
  return (
    <div className="math-area-grid">
      {mathAreas.map((area, i) => {
        const count = publishedVolumes.filter(
          (v) => v.areaId === area.id,
        ).length;
        return (
          <Link
            key={area.id}
            to="library"
            params={{ area: area.id }}
            className="math-area-card"
          >
            <div className="area-card-top">
              <span>
                {String(i + 1).padStart(2, "0")} / {area.english}
              </span>
              <ArrowUpRight size={18} />
            </div>
            <AreaDrawing kind={area.symbol} />
            <h3>{area.title}</h3>
            <p className="area-question">{area.question}</p>
            <p>{area.description}</p>
            <div className="area-card-bottom">
              <span>{count ? `${count} 本已出版` : "教材规划中"}</span>
              <span>
                查看系列 <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function PublishedBook({ volume }: { volume: PublishedVolume }) {
  return (
    <div className="featured-book">
      <Link
        to={volume.route}
        className="cover-link"
        aria-label={`查看${volume.title}教材`}
      >
        <BookCover volume={volume} />
      </Link>
      <div className="featured-book-copy">
        <span className="badge">已出版 / {areaFor(volume.areaId).title}</span>
        <h3>{volume.title}</h3>
        <span className="english-title">
          {volume.englishTitle} — {volume.tagline}
        </span>
        <p>{volume.description}</p>
        <BookStats volume={volume} />
        <div className="hero-actions">
          <Link to={volume.route} className="primary-btn">
            打开教材
            <ArrowRight size={17} />
          </Link>
          <Link to="downloads" className="text-btn">
            下载与打印
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <small>AI 编写 · 固定版本 · 含完整例题与练习解答</small>
      </div>
    </div>
  );
}

export function PlannedBooks({ items }: { items: Volume[] }) {
  return (
    <div className="planned-book-grid">
      {items.map((v) => (
        <article className="planned-book-card" key={v.id}>
          <div>
            <span>{areaFor(v.areaId).title}</span>
            <span className="planned-status">规划中</span>
          </div>
          <p className="planned-english">{v.englishTitle}</p>
          <h3>{v.title}</h3>
          <p>{v.description}</p>
          <div className="planned-scope">{v.scope}</div>
          <small>尚未出版 · 暂无正文</small>
        </article>
      ))}
    </div>
  );
}

export function SeriesPrinciples() {
  return (
    <section className="home-section series-principles">
      <div className="section-title">
        <div>
          <Eyebrow>ONE SERIES. A SHARED WAY TO LEARN.</Eyebrow>
          <h2>读懂、动手，再独立解题。</h2>
        </div>
        <Link to="guide" className="text-btn">
          阅读指南
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="series-principle-grid">
        <article>
          <span>01 / UNDERSTAND</span>
          <h3>先回答：它解决什么问题？</h3>
          <p>用直觉打开概念，再给出定义和成立条件。每个符号都有具体含义。</p>
          <Formula
            latex={String.raw`\text{直觉}\;\longrightarrow\;\text{定义}`}
            display
          />
        </article>
        <article>
          <span>02 / EXPLORE</span>
          <h3>先预测，再改变一个参数。</h3>
          <p>移动点、调整参数、播放变化。让图示和推导一起解释同一个概念。</p>
          <span className="principle-line" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </article>
        <article>
          <span>03 / CONNECT</span>
          <h3>遮住解答，独立做一次。</h3>
          <p>
            先试例题，再展开步骤。混合练习检查方法选择，先修关系帮你回到缺少的基础。
          </p>
          <div className="principle-chain" aria-hidden="true">
            <span>概念</span>
            <ArrowRight size={14} />
            <span>例题</span>
            <ArrowRight size={14} />
            <span>应用</span>
          </div>
        </article>
      </div>
    </section>
  );
}
