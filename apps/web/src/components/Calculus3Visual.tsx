import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  RotateCcw,
  Play,
  Pause,
  Plus,
  Minus,
  Move3D,
  ArrowUpRight,
} from "lucide-react";
import type {
  Lesson,
  TeachingPreset,
} from "../../../../packages/content/types";
import {
  calculus3Controls,
  calculus3Defaults,
  calculus3Frame,
  calculus3Playback,
  projectPoint,
  add,
  type Frame3,
} from "../../../../packages/visuals/calculus3.mjs";
import { Formula, MathText, plainMathText } from "./MathText";
import { ParameterControl } from "./ParameterControl";
import {linearControls,linearDefaults,linearFrame,linearPlayback,type LinearControl} from '../../../../packages/visuals/linear-algebra.mjs';
type View = "space" | "top" | "front";
type Camera = { yaw: number; elevation: number; zoom: number };
const initialCamera: Camera = { yaw: -0.85, elevation: 0.58, zoom: 1 };
export function SpatialPlot({
  frame,
  title,
  interactive = false,
  view = "space",
  camera = initialCamera,
  onCamera,
}: {
  frame: Frame3;
  title: string;
  interactive?: boolean;
  view?: View;
  camera?: Camera;
  onCamera?: (c: Camera) => void;
}) {
  const W = 680,
    H = 460,
    pad = 32,
    id = useId().replace(/:/g, ""),
    drag = useRef<{ x: number; y: number; camera: Camera } | null>(null);
  const planar=frame.dimension===2;
  const yaw = view === "top" ? 0 : view === "front" ? 0 : camera.yaw,
    el = view === "top" ? Math.PI / 2 : view === "front" ? 0 : camera.elevation,
    s = ((H - 2 * pad) / (2 * frame.extent)) * camera.zoom;
  const project = (p: number[]) => {
    const q = planar ? [p[0]-frame.focus[0],p[1]-frame.focus[1],0] : projectPoint(
      p.map((v, i) => v - frame.focus[i]),
      yaw,
      el,
    );
    return [W / 2 + s * q[0], H * 0.52 - s * q[1], q[2]];
  };
  const path = (ps: number[][]) =>
    ps
      .map((p, i) => {
        const q = project(p);
        return (i ? "L" : "M") + q[0].toFixed(3) + "," + q[1].toFixed(3);
      })
      .join("");
  const polygons = frame.polygons
    .map((poly) => ({
      ...poly,
      depth:
        poly.points.reduce((a, p) => a + project(p)[2], 0) / poly.points.length,
    }))
    .sort((a, b) => a.depth - b.depth);
  const change = (dyaw: number, del: number, dzoom = 0) =>
    onCamera?.({
      ...camera,
      yaw: camera.yaw + dyaw,
      elevation: Math.max(-1.4, Math.min(1.5, camera.elevation + del)),
      zoom: Math.max(0.6, Math.min(1.9, camera.zoom + dzoom)),
    });
  return (
    <svg
      className={"spatial-plot" + (interactive ? " spatial-interactive" : "")+(planar?' linear-planar-plot':'')}
      viewBox={"0 0 " + W + " " + H}
      role="img"
      aria-label={
        title +
        "；" +
        (planar ? "二维坐标图" : view === "space"
          ? "可旋转三维图"
          : view === "top"
            ? "俯视投影"
            : "正视投影")
      }
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (!interactive) return;
        if(planar&&e.key.startsWith('Arrow'))return;
        const actions: Record<string, () => void> = {
          ArrowLeft: () => change(-0.12, 0),
          ArrowRight: () => change(0.12, 0),
          ArrowUp: () => change(0, 0.1),
          ArrowDown: () => change(0, -0.1),
          "+": () => change(0, 0, 0.1),
          "=": () => change(0, 0, 0.1),
          "-": () => change(0, 0, -0.1),
          Home: () => onCamera?.(initialCamera),
        };
        if (actions[e.key]) {
          e.preventDefault();
          actions[e.key]();
        }
      }}
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        if (!interactive || e.button !== 0) return;
        // Keep the gesture on the plot instead of starting native SVG text selection.
        e.preventDefault();
        e.currentTarget.focus({ preventScroll: true });
        if (view !== "space" || planar) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { x: e.clientX, y: e.clientY, camera };
      }}
      onPointerMove={(e) => {
        if (!drag.current || !interactive || view !== "space" || planar) return;
        const d = drag.current;
        onCamera?.({
          ...d.camera,
          yaw: d.camera.yaw + (e.clientX - d.x) * 0.008,
          elevation: Math.max(
            -1.4,
            Math.min(1.5, d.camera.elevation + (e.clientY - d.y) * 0.008),
          ),
        });
      }}
      onPointerUp={(e) => {
        drag.current = null;
        if (e.currentTarget.hasPointerCapture(e.pointerId))
          e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => {
        drag.current = null;
      }}
      onLostPointerCapture={() => {
        drag.current = null;
      }}
    >
      <title>{title}</title>
      <desc>
        {planar?'二维坐标图，横轴向右、纵轴向上。加减键缩放，Home 恢复。':'三维几何，三轴使用相同单位。拖动或方向键旋转，加减键缩放，Home 恢复；可切换俯视或正视。'}
        数值与公式在图下提供。
      </desc>
      <defs>
        <radialGradient id={"glow" + id}>
          <stop stopColor="#294c43" stopOpacity=".6" />
          <stop offset="1" stopColor="#0a2023" stopOpacity="0" />
        </radialGradient>
        <clipPath id={"clip" + id}>
          <rect x="1" y="1" width={W - 2} height={H - 2} rx="12" />
        </clipPath>
      </defs>
      <rect width={W} height={H} fill={"url(#glow" + id + ")"} />
      <g clipPath={"url(#clip" + id + ")"}>
        {frame.lines
          .filter((l) => !l.label)
          .map((l, i) => (
            <path
              key={"grid" + i}
              d={path(l.points)}
              fill="none"
              stroke={l.color}
              strokeWidth=".8"
              strokeOpacity=".5"
            />
          ))}
        {polygons.map((p, i) => (
          <path
            key={"face" + i}
            d={path(p.points) + "Z"}
            fill={p.color}
            fillOpacity={p.opacity}
            stroke={p.color}
            strokeOpacity={Math.min(0.3, p.opacity + 0.05)}
            strokeWidth=".55"
          />
        ))}
        {(planar?[0,1]:[0,1,2]).map((axis) => {
          const from = [0, 0, 0],
            to = [0, 0, 0];
          from[axis] = planar?frame.focus[axis]-frame.extent*.9:-2;
          to[axis] = planar?frame.focus[axis]+frame.extent*.9:2.3;
          const power=10**Math.floor(Math.log10(frame.extent));
          const step=power*(frame.extent/power<2?.5:frame.extent/power<5?1:2);
          const ticks=planar?Array.from({length:Math.ceil(2*frame.extent/step)+1},(_,i)=>(Math.ceil((frame.focus[axis]-frame.extent*.8)/step)+i)*step).filter(x=>x!==0&&x<frame.focus[axis]+frame.extent*.8):[-1,1,2];
          const end = project(to);
          return (
            <g key={axis}>
              <path
                d={path([from, to])}
                stroke={["#a6d09f", "#75c3d4", "#e0bd80"][axis]}
                strokeOpacity=".65"
                strokeDasharray="4 5"
                fill="none"
              />
              <text
                x={end[0] + 7}
                y={end[1] - 7}
                className="axis-letter"
                fill={["#bfe3b6", "#9bd7e6", "#eed3aa"][axis]}
              >
                {(frame.axisLabels??["x", "y", "z"])[axis]}
              </text>
              {ticks.map((v) => {
                const point = [0, 0, 0];
                point[axis] = v;
                const q = project(point);
                return (
                  <text
                    key={v}
                    x={q[0] + 4}
                    y={q[1] + 13}
                    fill="#aec1b1"
                    fontSize="10"
                  >
                    {v}
                  </text>
                );
              })}
            </g>
          );
        })}
        {frame.lines
          .filter((l) => !!l.label)
          .map((l, i) => (
            <path
              key={"line" + i}
              d={path(l.points)}
              fill="none"
              stroke={l.color}
              strokeWidth="2.3"
              strokeDasharray={l.dash ? "5 5" : undefined}
              strokeLinecap="round"
            />
          ))}
        {frame.arrows.map((a, i) => {
          const p = project(a.at),
            q = project(add(a.at, a.vector)),
            dx = q[0] - p[0],
            dy = q[1] - p[1],
            len = Math.hypot(dx, dy);
          if (len < 0.3) return null;
          const ux = dx / len,
            uy = dy / len,
            h = Math.min(9, len * 0.35),
            w = h * 0.45;
          return (
            <g key={"arrow" + i}>
              <title>{a.label ? plainMathText(a.label) : "场向量"}</title>
              <path
                d={"M" + p[0] + "," + p[1] + "L" + q[0] + "," + q[1]}
                stroke={a.color}
                strokeWidth="2"
                fill="none"
              />
              <path
                d={
                  "M" +
                  q[0] +
                  "," +
                  q[1] +
                  "L" +
                  (q[0] - h * ux + w * uy) +
                  "," +
                  (q[1] - h * uy - w * ux) +
                  "L" +
                  (q[0] - h * ux - w * uy) +
                  "," +
                  (q[1] - h * uy + w * ux) +
                  "Z"
                }
                fill={a.color}
              />
            </g>
          );
        })}
        {frame.dots.map((d, i) => {
          const q = project(d.at);
          return (
            <g key={"dot" + i}>
              <circle
                cx={q[0]}
                cy={q[1]}
                r="10"
                fill={d.color}
                fillOpacity=".12"
              />
              <circle
                cx={q[0]}
                cy={q[1]}
                r="4.5"
                fill={d.color}
                stroke="#fff9dd"
                strokeWidth="1.2"
              />
              {d.label && (
                <text x={q[0] + 12} y={q[1] - 12} fill={d.color} fontSize="12">
                  {plainMathText(d.label)}
                </text>
              )}
            </g>
          );
        })}
      </g>
      {interactive && (
        <text x="20" y={H - 18} fill="#9ebcac" fontSize="11">
          {planar ? "加减键缩放 · Home 恢复" : view === "space"
            ? "拖动旋转 · 方向键也可操作"
            : view === "top"
              ? "俯视：高度被投影到同一平面"
              : "正视：纵向深度被压缩"}
        </text>
      )}
    </svg>
  );
}
export default function Calculus3Visual({
  lesson,
  compact = false,
  scenario,
}: {
  lesson: Lesson;
  compact?: boolean;
  scenario?: TeachingPreset & { revision: number };
}) {
  const linear=lesson.interactiveVisual.kind==='linear-algebra';
  const controls = useMemo<LinearControl[]>(() => linear?linearControls(lesson.id):calculus3Controls(lesson.id), [lesson.id,linear]),
    defaults = useMemo(() => linear?linearDefaults(lesson.id):calculus3Defaults(lesson.id), [lesson.id,linear]);
  const playback=linear?linearPlayback:calculus3Playback;
  const [values, setValues] = useState(defaults),
    [playing, setPlaying] = useState(false),
    [done, setDone] = useState(false),
    [speed, setSpeed] = useState(1),
    [view, setView] = useState<View>("space"),
    [camera, setCamera] = useState(initialCamera);
  const card = useRef<HTMLElement>(null),
    seed = useRef(defaults),
    progress = useRef(0);
  useEffect(() => {
    setPlaying(false);
    setDone(false);
    const next = { ...defaults };
    for (const c of controls) {
      const v = scenario?.[c.key as keyof TeachingPreset];
      if (typeof v === "number") next[c.key] = v;
    }
    setValues(next);
  }, [scenario, lesson.id, defaults, controls]);
  useEffect(() => {
    setView("space");
    setCamera(initialCamera);
  }, [lesson.id]);
  useEffect(() => {
    if (!playing) return;
    let req = 0,
      last = 0;
    const tick = (now: number) => {
      if (document.hidden) {
        setPlaying(false);
        return;
      }
      progress.current += last ? Math.min(0.1, (now - last) / 1000) * speed : 0;
      last = now;
      const a = playback(lesson.id, seed.current, progress.current);
      setValues((v) => ({ ...v, [a.key]: a.value }));
      if (a.done) {
        setPlaying(false);
        setDone(true);
      } else req = requestAnimationFrame(tick);
    };
    req = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(req);
  }, [playing, speed, lesson.id,playback]);
  useEffect(() => {
    const el = card.current;
    if (!el) return;
    const observer = new IntersectionObserver((e) => {
      if (!e[0].isIntersecting) setPlaying(false);
    });
    observer.observe(el);
    const hidden = () => {
      if (document.hidden) setPlaying(false);
    };
    document.addEventListener("visibilitychange", hidden);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", hidden);
    };
  }, []);
  const frame = useMemo(
    () => linear?linearFrame(lesson.id, values):calculus3Frame(lesson.id, values),
    [lesson.id, values,linear],
  );
  const legend = [
    ...frame.lines.filter((l) => l.label),
    ...frame.arrows.filter((a) => a.label),
  ].filter(
    (item, i, all) => all.findIndex((a) => a.label === item.label) === i,
  );
  const update = (key: string, v: number) => {
    setPlaying(false);
    setDone(false);
    setValues((p) => ({ ...p, [key]: v }));
  };
  const reset = () => {
    setPlaying(false);
    setDone(false);
    setValues(defaults);
    setCamera(initialCamera);
    setView("space");
  };
  const play = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    let next = { ...values };
    const target = playback(lesson.id, next, 6);
    if (next[target.key] === target.value) {
      const c = controls.find((c) => c.key === target.key)!;
      next[target.key] = target.key === "h" ? c.max : c.min;
      setValues(next);
    }
    seed.current = next;
    progress.current = 0;
    setDone(false);
    setPlaying(true);
  };
  return (
    <section
      ref={card}
      className={"visual-card calculus3-visual " + (compact ? "compact" : "")}
      aria-label="交互演示"
    >
      <div className="visual-heading">
        <div>
          <span className="eyebrow">{linear?'LINEAR ALGEBRA':'SPATIAL THINKING / CALCULUS III'}</span>
          <h3>{lesson.title}</h3>
        </div>
        <button className="icon-btn" aria-label="重置演示" onClick={reset}>
          <RotateCcw size={17} />
        </button>
      </div>
      <div className="c3-stage-head">
        <span className="c3-local-badge">
          <Move3D size={13} />
          {linear?(frame.dimension===2?'二维图示':'三维图示'):'本地三维几何'}
        </span>
        {frame.dimension!==2&&<div className="c3-views" role="group" aria-label="投影视角">
          {(
            [
              ["space", "三维"],
              ["top", "俯视"],
              ["front", "正视"],
            ] as const
          ).map(([v, label]) => (
            <button
              key={v}
              aria-pressed={view === v}
              onClick={() => setView(v)}
            >
              {label}
            </button>
          ))}
        </div>}
      </div>
      {frame.matrix&&<div className="linear-matrix"><Formula latex={frame.matrix}/></div>}
      <div className="c3-formula">
        <Formula latex={frame.formula} />
      </div>
      <div className="c3-stage">
        <SpatialPlot
          frame={frame}
          title={lesson.title}
          interactive
          view={view}
          camera={camera}
          onCamera={setCamera}
        />
        <div className="c3-camera-tools">
          <button
            className="icon-btn"
            aria-label={frame.dimension===2?'放大图形':'放大三维图'}
            onClick={() =>
              setCamera((c) => ({ ...c, zoom: Math.min(1.9, c.zoom + 0.15) }))
            }
          >
            <Plus size={15} />
          </button>
          <button
            className="icon-btn"
            aria-label={frame.dimension===2?'缩小图形':'缩小三维图'}
            onClick={() =>
              setCamera((c) => ({ ...c, zoom: Math.max(0.6, c.zoom - 0.15) }))
            }
          >
            <Minus size={15} />
          </button>
          <button
            className="icon-btn"
            aria-label={frame.dimension===2?'恢复图形视角':'恢复三维视角'}
            onClick={() => {
              setView("space");
              setCamera(initialCamera);
            }}
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>
      {legend.length > 0 && (
        <div className="c2-legend c3-legend">
          {legend.map((l) => (
            <span key={l.label}>
              <i style={{ background: l.color }} />
              <MathText text={l.label} />
            </span>
          ))}
        </div>
      )}
      <div className="c2-readouts">
        {frame.stats.map((s) => (
          <div key={s.label}>
            <small>
              <MathText text={s.label} />
            </small>
            <strong>
              <MathText text={s.value} />
            </strong>
          </div>
        ))}
      </div>
      <div className="controls">
        {controls.map((c) => c.options ? <label className="linear-choice" key={c.key}><MathText text={c.label}/><select aria-label={plainMathText(c.label)} value={values[c.key]} onChange={e=>update(c.key,+e.target.value)}>{c.options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></label> : (
          <ParameterControl
            key={c.key}
            label={c.label}
            min={c.min}
            max={c.max}
            step={c.step}
            value={values[c.key]}
            onChange={(v) => update(c.key, v)}
          />
        ))}
      </div>
      <div className="animation-transport">
        <button className="play-btn" onClick={play}>
          {playing ? <Pause size={16} /> : <Play size={16} />}{" "}
          {playing ? "暂停动画" : "自动推进"}
        </button>
        <label>
          速度
          <select
            aria-label="动画速度"
            value={speed}
            onChange={(e) => {
              setPlaying(false);
              setSpeed(+e.target.value);
            }}
          >
            <option value=".5">0.5×</option>
            <option value="1">1×</option>
            <option value="2">2×</option>
          </select>
        </label>
      </div>
      {done && (
        <p className="playback-finish" role="status">
          {linear?'本次参数变化已播完。':'已到本次参数的明确终点。趋零演示保留正数下界；有限图示不等于无穷极限的证明。'}
        </p>
      )}
      <p className="visual-caption">
        <span>
          <MathText text={lesson.interactiveVisual.caption} />
        </span>
      </p>
      <p className="visual-disclaimer">{frame.note}</p>
      {frame.dimension!==2&&<details className="c3-help">
        <summary>
          <ArrowUpRight size={13} />
          操作与投影说明
        </summary>
        <p>
          三维视图可拖动旋转。点按图形后，方向键旋转、加减号缩放、Home
          恢复。手机请在图内拖动，正文区域仍可正常滚动。俯视和正视压缩一个方向；切回三维可以检查遮挡。所有几何在本地用向量坐标计算，无需
          WebGL。
        </p>
      </details>}
    </section>
  );
}
export function Calculus3Preview({ lesson }: { lesson: Lesson }) {
  const frame = lesson.interactiveVisual.kind==='linear-algebra'?linearFrame(lesson.id):calculus3Frame(lesson.id);
  return <SpatialPlot frame={frame} title={lesson.title} />;
}
