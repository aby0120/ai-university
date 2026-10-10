import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Play, Pause, RotateCcw, MoveHorizontal } from "lucide-react";
import {
  functions,
  integrate,
  newton,
  secant,
  arcLength,
  epsilonDelta,
} from "../../../../packages/visuals/math.mjs";
import type { Lesson } from "../../../../packages/content/types";
import { Formula } from "./MathText";
const fmt = (v: number) =>
  Number.isFinite(v) ? Number(v.toFixed(5)).toString() : "无有限值";
function Slider({
  label,
  value,
  min,
  max,
  step = 0.01,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="slider">
      <span>
        {label}
        <output>{fmt(value)}</output>
      </span>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </label>
  );
}
type PlotContext = {
  X: (x: number) => number;
  Y: (y: number) => number;
  path: (f: (x: number) => number, from?: number, to?: number) => string;
  line: (f: (x: number) => number, color?: string, dash?: boolean) => ReactNode;
  point: (x: number, y: number, color?: string, open?: boolean) => ReactNode;
  area: (
    top: (x: number) => number,
    bottom: (x: number) => number,
    a: number,
    b: number,
  ) => string;
};
function Plot({
  fn,
  range,
  title,
  onX,
  children,
}: {
  fn: (x: number) => number;
  range: number[];
  title: string;
  onX?: (x: number) => void;
  children?: (p: PlotContext) => ReactNode;
}) {
  const clip = useId().replace(/:/g, "");
  const [x0, x1, y0, y1] = range;
  const W = 560,
    H = 330,
    P = 36;
  const X = (x: number) => P + ((x - x0) / (x1 - x0)) * (W - 2 * P),
    Y = (y: number) => H - P - ((y - y0) / (y1 - y0)) * (H - 2 * P);
  const path = (f: (x: number) => number, from = x0, to = x1) => {
    let s = "",
      last = NaN;
    for (let i = 0; i <= 420; i++) {
      const x = from + ((to - from) * i) / 420,
        y = f(x),
        yp = Y(y);
      if (!Number.isFinite(y) || Math.abs(yp) > H * 12) {
        last = NaN;
        continue;
      }
      const cmd = Number.isFinite(last) && Math.abs(yp - last) < H ? "L" : "M";
      s += `${cmd}${X(x).toFixed(2)},${yp.toFixed(2)} `;
      last = yp;
    }
    return s;
  };
  const point = (x: number, y: number, color = "#2861ba", open = false) =>
    Number.isFinite(y) ? (
      <circle
        cx={X(x)}
        cy={Y(y)}
        r={open ? 5 : 4.5}
        fill={open ? "#fafbf7" : color}
        stroke={color}
        strokeWidth="2"
      />
    ) : null;
  const line = (f: (x: number) => number, color = "#2861ba", dash = false) => (
    <path
      d={path(f)}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeDasharray={dash ? "7 5" : undefined}
    />
  );
  const area = (
    top: (x: number) => number,
    bottom: (x: number) => number,
    a: number,
    b: number,
  ) => {
    const pts = [];
    for (let i = 0; i <= 70; i++) {
      const x = a + ((b - a) * i) / 70;
      pts.push(`${X(x)},${Y(top(x))}`);
    }
    for (let i = 70; i >= 0; i--) {
      const x = a + ((b - a) * i) / 70;
      pts.push(`${X(x)},${Y(bottom(x))}`);
    }
    return `M${pts.join(" L")} Z`;
  };
  const xticks = Array.from({ length: 7 }, (_, i) => x0 + ((x1 - x0) * i) / 6),
    yticks = Array.from({ length: 5 }, (_, i) => y0 + ((y1 - y0) * i) / 4);
  const axisX = Math.max(y0, Math.min(y1, 0)),
    axisY = Math.max(x0, Math.min(x1, 0));
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={title}
      className={onX ? "plot interactive" : "plot"}
      onPointerDown={(e) => {
        if (!onX) return;
        const r = e.currentTarget.getBoundingClientRect();
        onX(
          Math.max(
            x0,
            Math.min(
              x1,
              x0 +
                ((((e.clientX - r.left) / r.width) * W - P) / (W - 2 * P)) *
                  (x1 - x0),
            ),
          ),
        );
      }}
    >
      <title>{title}</title>
      <desc>
        横轴输入、纵轴输出。图像采用有限显示窗口，超出窗口的曲线被裁切。可用下面的滑块进行精确操作。
      </desc>
      <defs>
        <clipPath id={clip}>
          <rect x={P} y={P} width={W - 2 * P} height={H - 2 * P} />
        </clipPath>
      </defs>
      {xticks.map((x, i) => (
        <g key={`x${i}`}>
          <line x1={X(x)} x2={X(x)} y1={P} y2={H - P} stroke="#e4e9e3" />
          <text x={X(x)} y={H - 14} textAnchor="middle">
            {Number(x.toFixed(1))}
          </text>
        </g>
      ))}
      {yticks.map((y, i) => (
        <g key={`y${i}`}>
          <line x1={P} x2={W - P} y1={Y(y)} y2={Y(y)} stroke="#e4e9e3" />
          <text x={P - 7} y={Y(y) + 4} textAnchor="end">
            {Number(y.toFixed(1))}
          </text>
        </g>
      ))}
      <line x1={P} x2={W - P} y1={Y(axisX)} y2={Y(axisX)} stroke="#a4b1a5" />
      <line x1={X(axisY)} x2={X(axisY)} y1={P} y2={H - P} stroke="#a4b1a5" />
      <text x={W - 10} y={H - 14}>
        x
      </text>
      <text x={P - 5} y={19}>
        y
      </text>
      <g clipPath={`url(#${clip})`}>
        {line(fn, "#214f40")}
        {children?.({ X, Y, path, line, point, area })}
      </g>
    </svg>
  );
}
export function Visual({
  lesson,
  compact = false,
}: {
  lesson: Lesson;
  compact?: boolean;
}) {
  const spec = lesson.interactiveVisual,
    k = spec.kind,
    F = functions[spec.function];
  const initialA = spec.a ?? (k === "derivative" ? 1 : 0);
  const initialX =
    k === "linearization"
      ? 4.1
      : k === "optimization"
        ? 6
        : k === "related"
          ? 3
          : [
                "chain",
                "substitution",
                "accumulation",
                "area-between",
                "disk",
                "shell",
              ].includes(k)
            ? 0.5
            : 1.8;
  const [a, setA] = useState(initialA),
    [x, setX] = useState(initialX),
    [h, setH] = useState(1),
    [side, setSide] = useState(1),
    [eps, setEps] = useState(0.5),
    [n, setN] = useState(8),
    [b, setB] = useState(1),
    [c, setC] = useState(0),
    [method, setMethod] = useState("right"),
    [playing, setPlaying] = useState(false);
  const clock = useRef(0);
  useEffect(() => {
    if (!playing) return;
    let id = 0,
      last = 0;
    clock.current = 0;
    const tick = (now: number) => {
      if (document.hidden) {
        setPlaying(false);
        return;
      }
      const dt = last ? Math.min(100, now - last) / 1000 : 0;
      last = now;
      clock.current += dt;
      if (k === "limit" || k === "derivative")
        setH((z) => Math.max(0.0001, z * Math.exp(-dt * 0.8)));
      else if (k === "riemann" || k === "arc")
        setN(Math.min(80, Math.floor(4 + clock.current * 9)));
      else setX((z) => (z + dt * 0.25 > 1 ? 0 : z + dt * 0.25));
      if (clock.current >= 8) setPlaying(false);
      else id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing, k]);
  function reset() {
    setPlaying(false);
    setA(initialA);
    setX(initialX);
    setH(1);
    setN(8);
    setB(1);
    setC(0);
    setEps(0.5);
    setSide(1);
  }
  const stats: { label: string; value: string }[] = [];
  let controls: ReactNode = null,
    overlay: ((p: PlotContext) => ReactNode) | undefined,
    fn = F.f,
    range = [...F.range],
    extra: ReactNode = null;
  const isTangent = ["derivative", "linearization"].includes(k);
  if (k === "graph") {
    stats.push(
      { label: "输入 x", value: fmt(x) },
      { label: "f(x)", value: fmt(fn(x)) },
    );
    controls = (
      <Slider
        label="输入 x"
        value={x}
        min={range[0]}
        max={range[1]}
        onChange={setX}
      />
    );
    overlay = (p) => p.point(x, fn(x));
  }
  if (k === "transform") {
    fn = (z) => (z - a) ** 2 + c;
    range = [-5, 5, -3, 12];
    stats.push({ label: "顶点", value: `(${fmt(a)}, ${fmt(c)})` });
    controls = (
      <>
        <Slider label="水平平移 h" value={a} min={-3} max={3} onChange={setA} />
        <Slider label="竖直平移 k" value={c} min={-2} max={5} onChange={setC} />
      </>
    );
    overlay = (p) => (
      <>
        {p.line(F.f, "#b4c1b4", true)}
        {p.point(a, c)}
      </>
    );
  }
  if (k === "limit") {
    const at = spec.a ?? 0,
      xx = at + side * h;
    stats.push(
      { label: "x", value: fmt(xx) },
      { label: "f(x)", value: fmt(fn(xx)) },
      { label: "距离 |x−a|", value: fmt(h) },
    );
    controls = (
      <>
        <Slider
          label="距离 |x−a|"
          value={h}
          min={0.0001}
          max={1.5}
          step={0.0001}
          onChange={setH}
        />
        <label className="select-label">
          靠近方向
          <select value={side} onChange={(e) => setSide(+e.target.value)}>
            <option value={-1}>从左侧</option>
            <option value={1}>从右侧</option>
          </select>
        </label>
      </>
    );
    overlay = (p) => (
      <line
        x1={p.X(xx)}
        x2={p.X(xx)}
        y1={p.Y(0)}
        y2={p.Y(fn(xx))}
        stroke="#2861ba"
        strokeDasharray="5 4"
      />
    );
    const old = overlay;
    overlay = (p) => (
      <>
        {old?.(p)}
        {p.point(xx, fn(xx))}
        {F.hole && p.point(F.hole[0], F.hole[1], "#214f40", true)}
      </>
    );
  }
  if (k === "epsilon") {
    const delta = epsilonDelta(eps);
    range = [0, 4, 0, 9];
    stats.push(
      { label: "允许误差 ε", value: fmt(eps) },
      { label: "保证距离 δ", value: fmt(delta) },
    );
    controls = (
      <Slider
        label="输出误差 ε"
        value={eps}
        min={0.05}
        max={2}
        onChange={setEps}
      />
    );
    overlay = (p) => (
      <>
        <rect
          x={p.X(0)}
          y={p.Y(4 + eps)}
          width={p.X(4) - p.X(0)}
          height={p.Y(4 - eps) - p.Y(4 + eps)}
          fill="#82af75"
          opacity="0.18"
        />
        <rect
          x={p.X(2 - delta)}
          y={p.Y(9)}
          width={p.X(2 + delta) - p.X(2 - delta)}
          height={p.Y(0) - p.Y(9)}
          fill="#4573c0"
          opacity="0.16"
        />
        {p.line(F.f, "#214f40")}
        {p.point(2, 4)}
      </>
    );
    extra = (
      <Formula latex="\delta=\min(1,\varepsilon/5),\quad |x^2-4|<\varepsilon" />
    );
  }
  if (isTangent) {
    const tangent = (z: number) => fn(a) + F.d(a) * (z - a),
      maxH =
        spec.function === "circle"
          ? Math.max(0.0001, (side === 1 ? 2 - a : a + 2) * 0.99)
          : 1.5,
      hh = Math.min(h, maxH),
      s = secant(fn, a, side * hh);
    stats.push({ label: "精确导数 f′(a)", value: fmt(F.d(a)) });
    if (k === "derivative") {
      stats.push({ label: "割线斜率", value: fmt(s) });
      controls = (
        <>
          <Slider
            label="切点 a"
            value={a}
            min={
              spec.function === "circle"
                ? -1.95
                : Math.max(
                    range[0],
                    spec.function === "sqrt" ? 0.2 : range[0] + 0.1,
                  )
            }
            max={spec.function === "circle" ? 1.95 : range[1] - 0.1}
            onChange={setA}
          />
          <Slider
            label="两点距离 h"
            value={hh}
            min={0.0001}
            max={maxH}
            step={0.0001}
            onChange={setH}
          />
          <label className="select-label">
            第二点方向
            <select value={side} onChange={(e) => setSide(+e.target.value)}>
              <option value={1}>右侧</option>
              <option value={-1}>左侧</option>
            </select>
          </label>
        </>
      );
      overlay = (p) => (
        <>
          {p.line(tangent, "#bf8b38", true)}
          {p.line((z) => fn(a) + s * (z - a), "#2861ba")}
          {p.point(a, fn(a), "#bf8b38")}
          {p.point(a + side * hh, fn(a + side * hh))}
        </>
      );
    } else {
      stats.push(
        { label: "真实值", value: fmt(fn(x)) },
        { label: "切线估计", value: fmt(tangent(x)) },
        { label: "真实误差", value: fmt(tangent(x) - fn(x)) },
      );
      controls = (
        <>
          <Slider label="中心 a" value={a} min={0.3} max={5} onChange={setA} />
          <Slider
            label="估计位置 x"
            value={x}
            min={0.01}
            max={6}
            onChange={setX}
          />
        </>
      );
      overlay = (p) => (
        <>
          {p.line(tangent, "#bf8b38", true)}
          {p.point(x, tangent(x), "#bf8b38")}
          {p.point(x, fn(x))}
          {p.point(a, fn(a), "#214f40")}
        </>
      );
    }
  }
  if (k === "chain" || k === "substitution") {
    range = [-2, 2, -1, 5];
    fn = (z) => z * z + 1;
    const u = x * x + 1;
    stats.push(
      { label: "内层 u=x²+1", value: fmt(u) },
      { label: "du/dx", value: fmt(2 * x) },
    );
    if (k === "chain")
      stats.push(
        { label: "外层 dy/du=3u²", value: fmt(3 * u * u) },
        { label: "总导数 dy/dx", value: fmt(6 * x * u * u) },
      );
    else
      stats.push(
        { label: "x=0 → u", value: "1" },
        { label: "x=1 → u", value: "2" },
      );
    controls = (
      <Slider
        label="输入 x"
        value={x}
        min={k === "substitution" ? 0 : -1.5}
        max={k === "substitution" ? 1 : 1.5}
        onChange={setX}
      />
    );
    overlay = (p) => p.point(x, fn(x));
    extra = (
      <div className="flow-equation">
        x <span>→ 平方 + 1 →</span> u{" "}
        {k === "chain" && (
          <>
            <span>→ 三次方 →</span> y
          </>
        )}
      </div>
    );
  }
  if (k === "related") {
    range = [0, 5, 0, 5.5];
    fn = (z) => Math.sqrt(25 - z * z);
    const xx = Math.min(4.9, Math.max(0.1, x)),
      yy = fn(xx);
    stats.push(
      { label: "高度 y", value: fmt(yy) },
      { label: "若 dx/dt=1，dy/dt", value: fmt(-xx / yy) },
    );
    controls = (
      <Slider
        label="底端距离 x"
        value={xx}
        min={0.1}
        max={4.9}
        onChange={setX}
      />
    );
    overlay = (p) => (
      <>
        <line
          x1={p.X(0)}
          y1={p.Y(yy)}
          x2={p.X(xx)}
          y2={p.Y(0)}
          stroke="#bf8b38"
          strokeWidth="4"
        />
        {p.point(xx, 0)}
        {p.point(0, yy)}
      </>
    );
  }
  if (k === "mvt") {
    const end = Math.max(0.3, b * 3),
      mid = end / 2;
    range = [0, 3.5, 0, 11];
    stats.push(
      { label: "区间 [0,b]", value: `[0,${fmt(end)}]` },
      { label: "保证点 c", value: fmt(mid) },
      { label: "共同斜率", value: fmt(end) },
    );
    controls = (
      <Slider
        label="终点 b"
        value={end}
        min={0.3}
        max={3.2}
        onChange={(z) => setB(z / 3)}
      />
    );
    overlay = (p) => (
      <>
        {p.line((z) => end * z, "#2861ba")}
        {p.line((z) => mid * mid + 2 * mid * (z - mid), "#bf8b38", true)}
        {p.point(mid, mid * mid, "#bf8b38")}
        {p.point(0, 0)}
        {p.point(end, end * end)}
      </>
    );
  }
  if (k === "optimization") {
    const xx = Math.max(0.1, Math.min(11.9, x)),
      yy = 12 - xx;
    stats.push(
      { label: "边长 x / y", value: `${fmt(xx)} / ${fmt(yy)}` },
      { label: "周长", value: "24" },
      { label: "面积", value: fmt(xx * yy) },
    );
    controls = (
      <Slider
        label="矩形边长 x"
        value={xx}
        min={0.1}
        max={11.9}
        onChange={setX}
      />
    );
    overlay = (p) => p.point(xx, fn(xx));
    extra = (
      <svg
        viewBox="0 0 260 90"
        className="small-diagram"
        role="img"
        aria-label={`矩形边长 ${fmt(xx)} 与 ${fmt(yy)}`}
      >
        <rect
          x="30"
          y="12"
          width={xx * 14}
          height={yy * 5}
          fill="#e9edd3"
          stroke="#214f40"
          strokeWidth="2"
        />
        <text x="30" y="84">
          x={fmt(xx)}，y={fmt(yy)}
        </text>
      </svg>
    );
  }
  if (k === "newton") {
    const result = newton(F.f, F.d, x, n > 6 ? 6 : n),
      rows = result.rows,
      row = rows.at(-1);
    stats.push(
      { label: "初值", value: fmt(x) },
      { label: "最近近似", value: row ? fmt(row.next) : "无法计算" },
      { label: "残差", value: row ? fmt(Math.abs(fn(row.next))) : "—" },
    );
    controls = (
      <>
        <Slider
          label="初值 x₀"
          value={x}
          min={-1.8}
          max={2.8}
          onChange={setX}
        />
        <Slider
          label="迭代步数"
          value={Math.min(6, n)}
          min={1}
          max={6}
          step={1}
          onChange={setN}
        />
      </>
    );
    overlay = (p) => (
      <>
        {rows.map((r, i) => (
          <g key={i}>
            {p.line(
              (z) => r.y + r.s * (z - r.x),
              i === rows.length - 1 ? "#bf8b38" : "#bed0e2",
              true,
            )}
            {p.point(r.next, 0)}
          </g>
        ))}
      </>
    );
    extra = result.error ? (
      <p className="warning">{result.error}</p>
    ) : (
      <p className="visual-note">
        这是 x²−2 的演示；一般函数与初值可能不收敛。
      </p>
    );
  }
  if (k === "antiderivative") {
    range = [-2, 2, -5, 5];
    fn = (z) => z ** 3 / 3 + c;
    stats.push(
      { label: "积分常数 C", value: fmt(c) },
      { label: "F′(1)=1²", value: "1" },
    );
    controls = (
      <Slider label="积分常数 C" value={c} min={-2} max={2} onChange={setC} />
    );
    overlay = (p) => p.line((z) => z * z, "#2861ba", true);
    extra = (
      <div className="legend">
        <span>绿色：原函数</span>
        <span>蓝色虚线：导函数</span>
      </div>
    );
  }
  if (k === "riemann") {
    range = [0, 1.05, 0, 1.15];
    const val = integrate(fn, 0, 1, n, method),
      dx = 1 / n;
    stats.push(
      { label: "近似和", value: fmt(val) },
      { label: "精确积分", value: "1/3 ≈ 0.33333" },
      { label: "近似误差", value: fmt(val - 1 / 3) },
    );
    controls = (
      <>
        <Slider
          label="分割数 n"
          value={n}
          min={1}
          max={80}
          step={1}
          onChange={setN}
        />
        <label className="select-label">
          近似方法
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="left">左端矩形</option>
            <option value="right">右端矩形</option>
            <option value="midpoint">中点矩形</option>
            <option value="trapezoid">梯形</option>
          </select>
        </label>
      </>
    );
    overlay = (p) => (
      <>
        {Array.from({ length: n }, (_, i) => {
          const l = i * dx,
            r = l + dx,
            z = method === "left" ? l : method === "right" ? r : (l + r) / 2,
            top = method === "trapezoid" ? fn : () => fn(z);
          return (
            <path
              key={i}
              d={p.area(top, () => 0, l, r)}
              fill="#6083bd"
              fillOpacity="0.23"
              stroke="#6083bd"
              strokeWidth="0.7"
            />
          );
        })}
        {p.line(fn, "#214f40")}
      </>
    );
  }
  if (k === "signed-area") {
    const lo = spec.function === "velocity" ? 0 : -1,
      hi =
        spec.function === "velocity" ? Math.max(0, b * 3) : Math.max(-0.95, b),
      zero = spec.function === "velocity" ? 1 : 0;
    const signed = integrate(fn, lo, hi),
      distance = integrate((z) => Math.abs(fn(z)), lo, hi);
    stats.push(
      {
        label: spec.function === "velocity" ? "位移" : "定积分",
        value: fmt(signed),
      },
      {
        label: spec.function === "velocity" ? "总路程" : "几何面积",
        value: fmt(distance),
      },
    );
    controls = (
      <Slider
        label="积分上限 b"
        value={hi}
        min={lo + 0.01}
        max={spec.function === "velocity" ? 3 : 2}
        onChange={(z) => setB(spec.function === "velocity" ? z / 3 : z)}
      />
    );
    overlay = (p) => (
      <>
        <path
          d={p.area(fn, () => 0, lo, Math.min(hi, zero))}
          fill="#cc9b73"
          fillOpacity="0.3"
        />
        {hi > zero && (
          <path
            d={p.area(fn, () => 0, zero, hi)}
            fill="#85ac81"
            fillOpacity="0.3"
          />
        )}
        {p.line(fn, "#214f40")}
      </>
    );
  }
  if (k === "accumulation") {
    const xx = Math.max(0, Math.min(1, x));
    range = [0, 1.1, 0, 1.15];
    stats.push(
      { label: "累积 A(x)=x³/3", value: fmt(xx ** 3 / 3) },
      { label: "A′(x)=f(x)", value: fmt(xx * xx) },
    );
    controls = (
      <Slider label="累积上限 x" value={xx} min={0} max={1} onChange={setX} />
    );
    overlay = (p) => (
      <>
        <path
          d={p.area(fn, () => 0, 0, xx)}
          fill="#84aa79"
          fillOpacity="0.23"
        />
        <rect
          x={p.X(xx)}
          y={p.Y(fn(xx))}
          width={6}
          height={p.Y(0) - p.Y(fn(xx))}
          fill="#2861ba"
        />
        {p.point(xx, fn(xx))}
      </>
    );
    extra = <Formula latex="A(x)=\int_0^x t^2dt,\quad A\prime(x)=x^2" />;
  }
  if (k === "area-between") {
    range = [0, 1.1, 0, 1.2];
    const xx = Math.max(0, Math.min(1, x));
    stats.push(
      { label: "条带高度 x−x²", value: fmt(xx - xx * xx) },
      { label: "总面积", value: "1/6 ≈ 0.16667" },
    );
    controls = (
      <Slider label="条带位置 x" value={xx} min={0} max={1} onChange={setX} />
    );
    overlay = (p) => (
      <>
        <path
          d={p.area(
            (z) => z,
            (z) => z * z,
            0,
            1,
          )}
          fill="#87b082"
          fillOpacity="0.24"
        />
        {p.line((z) => z, "#2861ba")}
        {p.line(fn, "#214f40")}
        <line
          x1={p.X(xx)}
          x2={p.X(xx)}
          y1={p.Y(xx)}
          y2={p.Y(xx * xx)}
          stroke="#bf8b38"
          strokeWidth="5"
        />
      </>
    );
  }
  if (k === "disk" || k === "shell") {
    range = [0, 1.1, 0, 1.2];
    const xx = Math.max(0.01, Math.min(1, x)),
      yy = fn(xx);
    stats.push(
      {
        label: k === "disk" ? "圆盘半径" : "壳半径",
        value: fmt(k === "disk" ? yy : xx),
      },
      {
        label: k === "disk" ? "截面积 πr²" : "单位厚度体积 2πrh",
        value: fmt(k === "disk" ? Math.PI * yy * yy : 2 * Math.PI * xx * yy),
      },
      { label: "总体积", value: "π/2" },
    );
    controls = (
      <Slider
        label="切片位置 x"
        value={xx}
        min={0.01}
        max={1}
        onChange={setX}
      />
    );
    overlay = (p) => (
      <>
        <path d={p.area(fn, () => 0, 0, 1)} fill="#87b082" fillOpacity="0.2" />
        <line
          x1={p.X(xx)}
          x2={p.X(xx)}
          y1={p.Y(0)}
          y2={p.Y(yy)}
          stroke="#bf8b38"
          strokeWidth="4"
        />
      </>
    );
    extra = (
      <svg
        viewBox="0 0 300 100"
        className="small-diagram"
        role="img"
        aria-label={
          k === "disk" ? "圆盘截面示意" : "圆柱壳示意，透视图不表示真实比例"
        }
      >
        {k === "disk" ? (
          <ellipse
            cx="150"
            cy="48"
            rx={yy * 65}
            ry={yy * 35}
            fill="#e7ecd6"
            stroke="#214f40"
          />
        ) : (
          <g>
            <ellipse
              cx="150"
              cy={75 - yy * 55}
              rx={xx * 70}
              ry={xx * 16}
              fill="#e7ecd6"
              stroke="#214f40"
            />
            <path
              d={`M${150 - xx * 70},${75 - yy * 55}V75 M${150 + xx * 70},${75 - yy * 55}V75`}
              stroke="#214f40"
            />
            <ellipse
              cx="150"
              cy="75"
              rx={xx * 70}
              ry={xx * 16}
              fill="none"
              stroke="#214f40"
            />
          </g>
        )}
        <text x="12" y="96">
          旋转示意 · 非等比例投影
        </text>
      </svg>
    );
  }
  if (k === "arc") {
    range = [0, 1.05, 0, 0.8];
    const length = arcLength(fn, 0, 1, n),
      exact = (2 / 3) * (2 * Math.sqrt(2) - 1);
    stats.push(
      { label: "折线长度", value: fmt(length) },
      { label: "精确弧长", value: fmt(exact) },
      { label: "误差", value: fmt(length - exact) },
    );
    controls = (
      <Slider
        label="折线段数 n"
        value={n}
        min={1}
        max={80}
        step={1}
        onChange={setN}
      />
    );
    overlay = (p) => (
      <polyline
        points={Array.from(
          { length: n + 1 },
          (_, i) => `${p.X(i / n)},${p.Y(fn(i / n))}`,
        ).join(" ")}
        stroke="#2861ba"
        fill="none"
        strokeWidth="2"
      />
    );
  }
  const canPlay = [
    "limit",
    "derivative",
    "riemann",
    "arc",
    "accumulation",
    "area-between",
    "disk",
    "shell",
    "chain",
    "substitution",
  ].includes(k);
  return (
    <section
      className={`visual-card ${compact ? "compact" : ""}`}
      aria-label="交互演示"
    >
      <header>
        <div>
          <span className="eyebrow">EXPLORE THE IDEA</span>
          <h3>把概念变成看得见的变化</h3>
        </div>
        <button className="icon-btn" onClick={reset} aria-label="重置演示">
          <RotateCcw size={17} />
        </button>
      </header>
      <div className="plot-label">
        {k === "chain" || k === "substitution" ? "u = x² + 1" : F.label}
        <span>SVG · 本地计算</span>
      </div>
      <Plot
        fn={fn}
        range={range}
        title={`${lesson.title}：${spec.caption}`}
        onX={k === "graph" ? setX : undefined}
      >
        {overlay}
      </Plot>
      {extra}
      <div className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <span>{s.label}</span>
            <strong>{s.value}</strong>
          </div>
        ))}
      </div>
      <div className="controls">{controls}</div>
      {canPlay && (
        <button
          className="animation-btn"
          onClick={() => {
            if (!playing) {
              if (k === "limit" || k === "derivative") setH(1);
              if (k === "riemann" || k === "arc") setN(4);
              else setX(0);
            }
            setPlaying((z) => !z);
          }}
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}{" "}
          {playing ? "暂停动画" : "播放变化过程"}
        </button>
      )}
      <p className="visual-caption">
        <MoveHorizontal size={15} />
        {spec.caption}
      </p>
      <p className="visual-note">
        图像用于探索；有限采样与动画不能替代正文中的数学论证。
      </p>
    </section>
  );
}
