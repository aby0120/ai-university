// Deterministic local geometry and analytic readouts; no network, eval or WebGL.
export const add = (a, b) => a.map((v, i) => v + b[i]);
export const scale = (a, c) => a.map((v) => v * c);
export const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
export const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
export const norm = (a) => Math.hypot(...a);
const pi = Math.PI,
  tau = 2 * pi;
const C = (key, label, min, max, step, value) => ({
  key,
  label,
  min,
  max,
  step,
  value,
});
const angle = () => C("a", "方向角 $\\theta$", 0, tau, 0.01, 0.7);
const time = () => C("x", "路径参数 $t$", 0, tau, 0.01, 1);
const height = () => C("c", "倾斜或形状参数 $c$", 0, 2, 0.01, 0.6);
const slice = () => C("slice", "相对切片高度", 0, 1, 0.01, 0.5);
const specs = {
  vectors: [C("c", "水平分量 $c$", -2, 2, 0.01, 1)],
  dot: [C("a", "夹角 $\\theta$", 0, pi, 0.01, 0.8)],
  cross: [C("a", "夹角 $\\theta$", 0, pi, 0.01, 1)],
  "lines-planes": [C("x", "直线参数 $t$", -1, 1, 0.01, 0.3)],
  quadrics: [C("c", "平方项系数 $c$", -1, 1, 0.01, 1)],
  coordinates: [
    C("a", "倾角 $\\phi$", 0, pi, 0.01, 0.9),
    C("degrees", "方位角（度）", 0, 360, 1, 45),
  ],
  "vector-curves": [time()],
  motion: [time()],
  curvature: [C("b", "圆半径 $R$", 0.5, 2, 0.01, 1)],
  surfaces: [C("x", "固定横坐标 $x$", -1, 1, 0.01, 0.4)],
  "multivariable-limits": [
    angle(),
    C("h", "到原点距离 $h$", 0.0001, 1, 0.0001, 0.6),
  ],
  partials: [C("a", "切点横坐标 $a$", -1, 1, 0.01, 0.5)],
  differentiability: [C("h", "对角线位移 $h$", 0.0001, 1, 0.0001, 0.3)],
  chain: [C("x", "路径参数 $t$", 0, pi / 2, 0.01, 0.5)],
  gradient: [C("a", "与梯度的夹角 $\\theta$", 0, pi, 0.01, 0.8)],
  taylor: [C("h", "相同坐标位移 $h$", 0.01, 0.5, 0.01, 0.2)],
  "critical-points": [C("c", "纵向二次系数 $c$", -1, 1, 0.01, 1)],
  "closed-domains": [angle()],
  lagrange: [angle()],
  "double-integrals": [C("n", "每方向分块数 $n$", 2, 16, 1, 4)],
  "regions-order": [C("x", "竖切片横坐标 $x$", 0, 1, 0.01, 0.5)],
  "polar-integrals": [C("b", "小扇形起始半径 $r$", 0.5, 2, 0.01, 1)],
  "double-applications": [C("c", "密度变化系数 $c$", 0, 3, 0.01, 1)],
  "triple-integrals": [slice()],
  cylindrical: [slice()],
  spherical: [C("a", "倾角 $\\phi$", 0.1, pi - 0.1, 0.01, pi / 2)],
  "change-variables": [height()],
  fields: [C("c", "径向场系数 $c$", 0, 1, 0.01, 0)],
  "line-scalar": [time()],
  "line-work": [time()],
  potential: [time()],
  green: [C("b", "圆盘半径 $R$", 0.5, 2, 0.01, 1)],
  "parametric-surfaces": [height()],
  "surface-area": [height()],
  flux: [height()],
  "div-curl": [C("c", "径向场系数 $c$", 0, 1, 0.01, 0.3)],
  stokes: [C("c", "曲面鼓起高度 $c$", 0, 1, 0.01, 0.5)],
  divergence: [C("b", "球面半径 $R$", 0.5, 2, 0.01, 1)],
  "choosing-theorem": [C("c", "曲面鼓起高度 $c$", 0, 1, 0.01, 0.5)],
  conservation: [C("x", "时间 $t$", 0, 1, 0.01, 0.3)],
};
export function calculus3Controls(id) {
  const key = id.replace(/^c3-/, "");
  if (!specs[key]) throw Error("Unknown calculus III model: " + id);
  return specs[key].map((c) => ({ ...c }));
}
export const calculus3Defaults = (id) =>
  Object.fromEntries(calculus3Controls(id).map((c) => [c.key, c.value]));
export const calculus3Bounds = (id) =>
  Object.fromEntries(calculus3Controls(id).map((c) => [c.key, [c.min, c.max]]));
export function assertParameters3(id, p) {
  for (const c of calculus3Controls(id)) {
    const v = p[c.key];
    if (
      !Number.isFinite(v) ||
      v < c.min ||
      v > c.max ||
      (c.step >= 1 && !Number.isInteger(v))
    )
      throw Error(id + ": invalid " + c.key);
  }
}
export function calculus3Playback(id, seed, elapsed) {
  const cs = calculus3Controls(id),
    c = cs.find((c) => c.key === "h") || cs[0],
    end = c.key === "h" ? c.min : c.max,
    t = Math.min(1, Math.max(0, elapsed / 6));
  let value =
    c.key === "h"
      ? Math.exp(Math.log(seed[c.key]) * (1 - t) + Math.log(end) * t)
      : seed[c.key] + (end - seed[c.key]) * t;
  if (c.step >= 1) value = Math.round(value);
  return { key: c.key, value: t === 1 ? end : value, done: t === 1 };
}
export function projectPoint(p, yaw = -0.85, elevation = 0.58) {
  const [x, y, z] = p;
  return [
    x * Math.cos(yaw) - y * Math.sin(yaw),
    z * Math.cos(elevation) -
      (x * Math.sin(yaw) + y * Math.cos(yaw)) * Math.sin(elevation),
    (x * Math.sin(yaw) + y * Math.cos(yaw)) * Math.cos(elevation) +
      z * Math.sin(elevation),
  ];
}
export function midpoint2D(fn, x0, x1, y0, y1, n) {
  let s = 0;
  const dx = (x1 - x0) / n,
    dy = (y1 - y0) / n;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      s += fn(x0 + (i + 0.5) * dx, y0 + (j + 0.5) * dy) * dx * dy;
  return s;
}
export function sphereFlux(radius, density = 1) {
  return 4 * pi * radius ** 3 * density;
}
export function capVolume(c) {
  return (pi * c) / 2;
}
export function helixCurvature(radius, pitch) {
  return radius / (radius * radius + pitch * pitch);
}
export function sectorArea(r, dr, theta) {
  return 0.5 * ((r + dr) ** 2 - r * r) * theta;
}
const fmt = (v) =>
  Math.abs(v) < 1e-11
    ? "0"
    : Math.abs(v) < 0.0001
      ? v.toExponential(4)
      : Number(v.toPrecision(8)).toString();
const green = "#b1e49d",
  blue = "#6dcbe3",
  gold = "#f3c576",
  pink = "#de92ba";
export function calculus3Frame(id, params = {}) {
  const p = { ...calculus3Defaults(id), ...params };
  assertParameters3(id, p);
  const k = id.replace(/^c3-/, "");
  const f = {
    lines: [],
    polygons: [],
    arrows: [],
    dots: [],
    stats: [],
    formula: "",
    note: "三维坐标使用相同单位尺度。图形是有限网格，读数来自给定模型；投影不能代替证明。",
    extent: 3.2,
    focus: [0, 0, 0.5],
  };
  const stat = (label, value) =>
    f.stats.push({
      label,
      value: typeof value === "number" ? fmt(value) : value,
    });
  const line = (label, points, color = green, dash = false) =>
    f.lines.push({ label, points, color, dash });
  const poly = (points, color = green, opacity = 0.15) =>
    f.polygons.push({ points, color, opacity });
  const arrow = (label, at, vector, color = green) =>
    f.arrows.push({ label, at, vector, color });
  const dotAt = (at, label = "", color = gold) =>
    f.dots.push({ at, label, color });
  const path = (fn, a, b, n = 100) =>
    Array.from({ length: n + 1 }, (_, i) => fn(a + ((b - a) * i) / n));
  const mesh = (fn, u0, u1, v0, v1, n = 12, color = green, opacity = 0.12) => {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const a = u0 + ((u1 - u0) * i) / n,
          b = u0 + ((u1 - u0) * (i + 1)) / n,
          c = v0 + ((v1 - v0) * j) / n,
          d = v0 + ((v1 - v0) * (j + 1)) / n;
        poly([fn(a, c), fn(b, c), fn(b, d), fn(a, d)], color, opacity);
      }
  };
  const graph = (g, color = green) =>
    mesh((x, y) => [x, y, g(x, y)], -1, 1, -1, 1, 12, color);
  const circle = (r = 1, z = 0, end = tau) =>
    path((t) => [r * Math.cos(t), r * Math.sin(t), z], 0, end);
  const sphere = (r = 1) =>
    mesh(
      (a, b) => [
        r * Math.sin(a) * Math.cos(b),
        r * Math.sin(a) * Math.sin(b),
        r * Math.cos(a),
      ],
      0,
      pi,
      0,
      tau,
      16,
      blue,
      0.09,
    );
  const grid = () => {
    for (let i = -2; i <= 2; i++) {
      line(
        "",
        [
          [-2, i, 0],
          [2, i, 0],
        ],
        "#34504e",
      );
      line(
        "",
        [
          [i, -2, 0],
          [i, 2, 0],
        ],
        "#34504e",
      );
    }
  };
  grid();
  if (k === "vectors") {
    const u = [1, 1, 0],
      v = [p.c, 0, 1],
      s = add(u, v);
    arrow("第一向量", [0, 0, 0], u);
    arrow("第二向量", [0, 0, 0], v, blue);
    arrow("合向量", [0, 0, 0], s, gold);
    line("首尾相接", [u, s, v], blue, true);
    poly([[0, 0, 0], u, s, v], blue);
    f.formula = "\\mathbf u+\\mathbf v=\\langle1+c,1,1\\rangle";
    stat("合向量长度", norm(s));
    stat("第二向量长度", norm(v));
  } else if (k === "dot" || k === "cross") {
    const u = [1.5, 0, 0],
      v = [1.5 * Math.cos(p.a), 1.5 * Math.sin(p.a), 0],
      z = cross(u, v);
    arrow("第一向量", [0, 0, 0], u);
    arrow("第二向量", [0, 0, 0], v, blue);
    if (k === "dot") {
      const pr = [v[0], 0, 0];
      arrow("向量投影", [0, 0, 0], pr, gold);
      line("垂直余量", [v, pr], gold, true);
      stat("点积", dot(u, v));
      stat("标量投影", v[0]);
      f.formula = "\\mathbf u\\cdot\\mathbf v=2.25\\cos\\theta";
    } else {
      poly([[0, 0, 0], u, add(u, v), v], blue, 0.3);
      arrow("叉积", [0, 0, 0], z, gold);
      stat("平行四边形面积", norm(z));
      stat("叉积竖分量", z[2]);
      f.formula =
        "\\mathbf u\\times\\mathbf v=\\langle0,0,2.25\\sin\\theta\\rangle";
    }
  } else if (k === "lines-planes") {
    graph((x, y) => 1 - x - y, blue);
    const pt = [p.x, p.x, 1 + p.x];
    line(
      "直线",
      path((t) => [t, t, 1 + t], -1, 1),
      green,
    );
    dotAt(pt);
    arrow("平面法向", [0, 0, 1], scale([1, 1, 1], 0.5), gold);
    stat("平面有向残差", 3 * p.x);
    stat("点到平面距离", Math.sqrt(3) * Math.abs(p.x));
    f.formula = "x+y+z=1,\\quad\\mathbf r(t)=(t,t,1+t)";
  } else if (k === "quadrics" || k === "critical-points") {
    graph((x, y) => x * x + p.c * y * y);
    line(
      "横轴截面",
      path((t) => [t, 0, t * t], -1, 1),
      gold,
    );
    line(
      "纵轴截面",
      path((t) => [0, t, p.c * t * t], -1, 1),
      blue,
    );
    stat("横向二阶偏导", 2);
    stat("Hessian 行列式", 4 * p.c);
    f.formula = "z=x^2+c y^2";
    f.note +=
      " 当前原点类型：" +
      (p.c > 0
        ? "严格极小。"
        : p.c < 0
          ? "鞍点。"
          : "非严格极小，沿纵向恒定；二阶严格判别无结论。");
  } else if (k === "coordinates" || k === "spherical") {
    sphere(1.5);
    const a = p.a,
      theta = k === "coordinates" ? (p.degrees * pi) / 180 : 0.6;
    const pt = [
      1.5 * Math.sin(a) * Math.cos(theta),
      1.5 * Math.sin(a) * Math.sin(theta),
      1.5 * Math.cos(a),
    ];
    line("径向距离", [[0, 0, 0], pt], green);
    line("水平投影", [pt, [pt[0], pt[1], 0], [0, 0, 0]], gold, true);
    dotAt(pt);
    if (k === "spherical") {
      const da = 0.12,
        db = 0.16,
        fn = (u, v) => [
          1.5 * Math.sin(u) * Math.cos(v),
          1.5 * Math.sin(u) * Math.sin(v),
          1.5 * Math.cos(u),
        ];
      mesh(fn, a - 0.05, a + 0.05, theta, theta + db, 2, gold, 0.65);
      stat("方位角边长倍率", 1.5 * Math.sin(a));
      stat("体积元倍率", 2.25 * Math.sin(a));
      f.formula = "dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta";
      f.note += " 金色小块保持倾角宽度 0.1、方位角宽度 0.16 弧度。";
    } else {
      stat("水平半径", 1.5 * Math.sin(a));
      stat("高度", pt[2]);
      f.formula = "r=1.5\\sin\\phi,\\quad z=1.5\\cos\\phi";
    }
  } else if (["vector-curves", "motion", "curvature"].includes(k)) {
    const R = k === "curvature" ? p.b : 1,
      t = k === "curvature" ? 1 : p.x,
      pitch = k === "vector-curves" ? 0.2 : 0;
    const r = (t) => [R * Math.cos(t), R * Math.sin(t), pitch * t],
      v = [-R * Math.sin(t), R * Math.cos(t), pitch],
      a = [-R * Math.cos(t), -R * Math.sin(t), 0],
      pt = r(t);
    line("轨迹", path(r, 0, tau), green);
    line("已走路程", path(r, 0, t), gold);
    dotAt(pt);
    if (k === "curvature") {
      arrow("单位切向量", pt, scale(v, 1 / norm(v)), blue);
      arrow("主法向量", pt, scale(a, 1 / norm(a)), gold);
      stat("曲率", helixCurvature(R, pitch));
      stat("半径", R);
      f.formula = "\\kappa=1/R";
    } else {
      arrow("速度", pt, v, blue);
      if (k === "motion") arrow("加速度", pt, a, gold);
      stat("速率", norm(v));
      stat("累计路程", norm(v) * t);
      f.formula =
        k === "motion"
          ? "\\mathbf v=(-\\sin t,\\cos t,0),\\quad\\mathbf a=(-\\cos t,-\\sin t,0)"
          : "\\mathbf r=(\\cos t,\\sin t,0.2t)";
    }
  } else if (
    ["surfaces", "partials", "differentiability", "chain", "gradient"].includes(
      k,
    )
  ) {
    graph((x, y) => x * x + y * y);
    if (k === "surfaces") {
      line(
        "固定横坐标切片",
        path((y) => [p.x, y, p.x * p.x + y * y], -1, 1),
        gold,
      );
      stat("切片最低高度", p.x * p.x);
      stat("固定横坐标", p.x);
      f.formula = "z=x^2+y^2,\\quad x=\\text{常数}";
    }
    if (k === "partials") {
      const pt = [p.a, 0, p.a * p.a];
      dotAt(pt);
      line(
        "横向切片",
        path((x) => [x, 0, x * x], -1, 1),
        gold,
      );
      line(
        "横向切线",
        path((t) => [p.a + t, 0, p.a * p.a + 2 * p.a * t], -0.5, 0.5),
        blue,
      );
      stat("横向偏导", 2 * p.a);
      stat("纵向偏导", 0);
      f.formula = "f_x(a,0)=2a";
    }
    if (k === "differentiability") {
      mesh((x, y) => [x, y, x + y - 0.5], -1, 1, -1, 1, 8, blue, 0.12);
      const h = p.h,
        pt = [0.5 + h, 0.5 + h, 2 * (0.5 + h) ** 2],
        pred = [pt[0], pt[1], 0.5 + 2 * h];
      dotAt(pt);
      line("线性化余项", [pt, pred], gold);
      stat("真实误差", 2 * h * h);
      stat("误差 / 位移长度", Math.SQRT2 * h);
      f.formula = "R=2h^2,\\quad R/\\|(h,h)\\|=\\sqrt2 h";
      f.extent = 4.2;
    }
    if (k === "chain") {
      const pt = [Math.cos(p.x), Math.sin(p.x), 1];
      line("等高路径", circle(1, 1, pi / 2), gold);
      dotAt(pt);
      arrow("路径速度", pt, [-Math.sin(p.x), Math.cos(p.x), 0], blue);
      const q = -2 * Math.cos(p.x) * Math.sin(p.x);
      stat("横方向贡献", q);
      stat("纵方向贡献", -q);
      f.formula = "\\frac{df}{dt}=-2\\cos t\\sin t+2\\sin t\\cos t=0";
    }
    if (k === "gradient") {
      const pt = [1, 0, 1],
        u = [Math.cos(p.a), Math.sin(p.a), 0];
      dotAt(pt);
      arrow("梯度（输入平面）", [1, 0, 0], [1, 0, 0], gold);
      arrow("单位方向（输入平面）", [1, 0, 0], u, blue);
      line(
        "沿方向切线",
        path((s) => [1 + s * u[0], s * u[1], 1 + 2 * s * u[0]], -0.4, 0.4),
        blue,
      );
      stat("方向导数", 2 * Math.cos(p.a));
      stat("最大方向导数", 2);
      f.formula = "D_{\\mathbf u}f(1,0)=2\\cos\\theta";
      f.note += " 金色梯度箭头按 0.5 倍显示；蓝色单位方向保持长度一。";
    }
  } else if (k === "multivariable-limits") {
    const h = p.h,
      a = p.a;
    // Exclude origin: the function is undefined there, and paths remain punctured.
    for (let j = 0; j < 48; j++) {
      const t = (j * tau) / 48,
        u = ((j + 1) * tau) / 48;
      poly(
        [
          [0.04 * Math.cos(t), 0.04 * Math.sin(t), Math.cos(t) * Math.sin(t)],
          [1.1 * Math.cos(t), 1.1 * Math.sin(t), Math.cos(t) * Math.sin(t)],
          [1.1 * Math.cos(u), 1.1 * Math.sin(u), Math.cos(u) * Math.sin(u)],
          [0.04 * Math.cos(u), 0.04 * Math.sin(u), Math.cos(u) * Math.sin(u)],
        ],
        blue,
        0.14,
      );
    }
    const z = Math.sin(a) * Math.cos(a),
      pt = [h * Math.cos(a), h * Math.sin(a), z];
    line(
      "所选接近方向",
      [
        [0, 0, z],
        [Math.cos(a), Math.sin(a), z],
      ],
      gold,
    );
    dotAt(pt);
    line(
      "水平距离",
      [
        [0, 0, 0],
        [pt[0], pt[1], 0],
      ],
      green,
      true,
    );
    stat("输入距离", h);
    stat("该路径函数值", z);
    f.formula = "f(h\\cos\\theta,h\\sin\\theta)=\\cos\\theta\\sin\\theta";
    f.note +=
      " 原点未定义；图面最内圈半径 0.04 是显示裁切，不是函数边界。所选点可继续靠近到 0.0001。";
  } else if (k === "taylor") {
    mesh((x, y) => [x, y, Math.exp(x + y)], -0.5, 0.5, -0.5, 0.5, 12, green);
    mesh(
      (x, y) => [x, y, 1 + x + y + 0.5 * (x + y) ** 2],
      -0.5,
      0.5,
      -0.5,
      0.5,
      10,
      blue,
      0.13,
    );
    const h = p.h,
      actual = Math.exp(2 * h),
      approx = 1 + 2 * h + 2 * h * h;
    dotAt([h, h, actual]);
    stat("二阶近似", approx);
    stat("实际误差", actual - approx);
    stat("三阶余项上界", (Math.exp(2 * h) * (2 * h) ** 3) / 6);
    f.formula = "e^{x+y}\\approx1+x+y+\\frac12(x+y)^2";
    f.note +=
      " 绿色为指数曲面，蓝色为二阶模型；两图使用相同坐标，显示窗口为中心附近。";
    f.extent = 4;
  } else if (k === "closed-domains" || k === "lagrange") {
    const R = k === "closed-domains" ? 2 : 1,
      pt = [R * Math.cos(p.a), R * Math.sin(p.a), 0];
    line("允许边界", circle(R), green);
    dotAt(pt);
    if (k === "closed-domains") {
      dotAt([1, 0, 0], "内部最小点", blue);
      line("到目标点距离", [[1, 0, 0], pt], gold);
      stat("边界函数值", (pt[0] - 1) ** 2 + pt[1] ** 2);
      stat("全域最小值", 0);
      f.formula = "f=(x-1)^2+y^2=5-4\\cos\\theta\\quad(\\partial D)";
    } else {
      arrow("目标梯度", pt, [1, 0.5, 0], gold);
      arrow("约束法向", pt, scale(pt, 0.7), blue);
      stat("目标值", 2 * pt[0] + pt[1]);
      stat("切向变化率", -2 * Math.sin(p.a) + Math.cos(p.a));
      f.formula = "f=2x+y,\\quad x^2+y^2=1";
      f.note += " 金色目标梯度按 0.5 倍、蓝色约束梯度按 0.35 倍显示。";
    }
  } else if (k === "double-integrals" || k === "double-applications") {
    const n = k === "double-integrals" ? p.n : 8,
      c = p.c || 0,
      fn = k === "double-integrals" ? (x, y) => 1 + x + y : (x, y) => 1 + c * x;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const x = i / n,
          y = j / n,
          d = 1 / n,
          z = fn(x + d / 2, y + d / 2);
        poly(
          [
            [x, y, z],
            [x + d, y, z],
            [x + d, y + d, z],
            [x, y + d, z],
          ],
          green,
          0.35,
        );
        poly(
          [
            [x, y, 0],
            [x, y, z],
            [x + d, y, z],
            [x + d, y, 0],
          ],
          blue,
          0.14,
        );
        poly(
          [
            [x, y, 0],
            [x, y, z],
            [x, y + d, z],
            [x, y + d, 0],
          ],
          green,
          0.14,
        );
      }
    if (k === "double-integrals") {
      stat("中点有限和", midpoint2D(fn, 0, 1, 0, 1, n));
      stat("解析积分", 2);
      f.formula = "\\iint_{[0,1]^2}(1+x+y)dA=2";
    } else {
      const mass = 1 + c / 2,
        xc = (0.5 + c / 3) / mass;
      dotAt([xc, 0.5, 0], "质心", gold);
      stat("总质量", mass);
      stat("质心横坐标", xc);
      stat("质心纵坐标", 0.5);
      f.formula = "\\bar x=\\frac{1/2+c/3}{1+c/2},\\quad\\bar y=1/2";
    }
  } else if (k === "regions-order") {
    poly(
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
      green,
      0.3,
    );
    line(
      "区域边界",
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ],
      green,
    );
    line(
      "竖切片",
      [
        [p.x, p.x, 0],
        [p.x, 1, 0],
      ],
      gold,
    );
    stat("切片下界", p.x);
    stat("切片长度", 1 - p.x);
    f.formula = "0\\le x\\le1,\\quad x\\le y\\le1";
  } else if (k === "polar-integrals") {
    const r = p.b,
      dr = 0.2,
      da = 0.25;
    for (let rr = 0.5; rr <= 2.25; rr += 0.25) line("", circle(rr), blue);
    for (let j = 0; j < 12; j++)
      line(
        "",
        [
          [0, 0, 0],
          [2.2 * Math.cos((j * tau) / 12), 2.2 * Math.sin((j * tau) / 12), 0],
        ],
        "#45625d",
      );
    const pts = [
      ...path((t) => [r * Math.cos(t), r * Math.sin(t), 0], 0.5, 0.5 + da, 20),
      ...path(
        (t) => [(r + dr) * Math.cos(t), (r + dr) * Math.sin(t), 0],
        0.5 + da,
        0.5,
        20,
      ),
    ];
    poly(pts, gold, 0.5);
    stat("小扇形实际面积", sectorArea(r, dr, da));
    stat("内边半径近似 $r\\Delta r\\Delta\\theta$", r * dr * da);
    f.formula = "\\Delta A=\\frac12[(r+\\Delta r)^2-r^2]\\Delta\\theta";
    f.note +=
      " 固定径向宽度 0.2、角宽 0.25 弧度；近似使用内边半径，有限宽度下与精确面积有差别。";
  } else if (k === "triple-integrals") {
    const A = [0, 0, 0],
      B = [1, 0, 0],
      C = [0, 1, 0],
      D = [0, 0, 1];
    for (const ps of [
      [A, B, C],
      [A, B, D],
      [A, C, D],
      [B, C, D],
    ])
      poly(ps, blue, 0.2);
    const z = p.slice;
    poly(
      [
        [0, 0, z],
        [1 - z, 0, z],
        [0, 1 - z, z],
      ],
      gold,
      0.6,
    );
    stat("截面面积", (1 - z) ** 2 / 2);
    stat("全体积", 1 / 6);
    f.formula = "A(z)=\\frac12(1-z)^2,\\quad V=\\int_0^1 A(z)dz=\\frac16";
    f.extent = 2.1;
  } else if (k === "cylindrical") {
    mesh((a, z) => [Math.cos(a), Math.sin(a), z], 0, tau, 0, 2, 14, blue, 0.12);
    line("底面", circle(1), green);
    line("顶面", circle(1, 2), green);
    poly(circle(1, 2 * p.slice), gold, 0.3);
    stat("切片高度", 2 * p.slice);
    stat("截面积", pi);
    stat("圆柱体积", 2 * pi);
    f.formula = "V=\\int_0^2\\pi\\,dz=2\\pi";
  } else if (k === "change-variables") {
    const c = p.c,
      T = (u, v) => [u + c * v, v, 0];
    poly(
      [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
      blue,
      0.15,
    );
    for (let i = 0; i <= 5; i++) {
      const t = i / 5;
      line("变换网格", [T(t, 0), T(t, 1)], green);
      line("", [T(0, t), T(1, t)], green);
    }
    poly([T(0, 0), T(1, 0), T(1, 1), T(0, 1)], green, 0.2);
    stat("Jacobian", 1);
    stat("像的面积", 1);
    f.formula = "x=u+cv,\\quad y=v,\\quad J=1";
    f.extent = 4;
  } else if (k === "fields" || k === "div-curl") {
    for (let x = -1.5; x <= 1.5; x += 0.5)
      for (let y = -1.5; y <= 1.5; y += 0.5)
        arrow(
          "",
          [x, y, 0],
          scale([-y + p.c * x, x + p.c * y, 0], 0.22),
          green,
        );
    line("参考圆（未必是流线）", circle(1), blue);
    stat("散度", 2 * p.c);
    stat("旋度竖分量", 2);
    f.formula = "\\mathbf F=(-y+cx,x+cy,0)";
    f.note += " 场箭头统一按 0.22 倍绘制，不做逐根归一化。";
  } else if (["line-scalar", "line-work", "potential", "green"].includes(k)) {
    const R = k === "green" ? p.b : 1,
      t = k === "green" ? tau : p.x,
      pt = [R * Math.cos(t), R * Math.sin(t), 0];
    line("整条路径", circle(R), blue);
    line("已累积路径", circle(R, 0, t), green);
    dotAt(pt);
    const radial = k === "potential";
    if (k !== "line-scalar")
      for (let j = 0; j < 12; j++) {
        const a = (j * tau) / 12,
          pos = [R * Math.cos(a), R * Math.sin(a), 0],
          v = radial ? pos : [-pos[1], pos[0], 0];
        arrow("", pos, scale(v, 0.22), gold);
      }
    if (k === "line-scalar") {
      stat("弧长积分", t);
      stat("速率", 1);
      f.formula = "\\int_C1\\,ds=t";
    } else if (radial) {
      stat("累计功", 0);
      stat("势函数值", 0.5);
      f.formula = "\\mathbf F=(x,y,0)=\\nabla\\frac{x^2+y^2}2";
    } else {
      stat("累计环流", R * R * t);
      stat("局部旋转率", 2);
      f.formula =
        k === "green"
          ? "\\oint_{\\partial D}-y\\,dx+x\\,dy=2\\pi R^2"
          : "\\int_C(-y,x,0)\\cdot d\\mathbf r=t";
    }
    if (k === "green") poly(circle(R), green, 0.18);
    f.note +=
      k === "line-scalar"
        ? " 亮色弧为已累积的线段。"
        : " 场箭头按统一倍率 0.22 显示。";
  } else if (["parametric-surfaces", "surface-area", "flux"].includes(k)) {
    graph((x, y) => p.c * x, blue);
    const at = [0.5, 0.5, 0.5 * p.c],
      a = [1, 0, p.c],
      b = [0, 1, 0],
      n = cross(a, b),
      unit = scale(n, 1 / norm(n));
    arrow("单位法向", at, unit, gold);
    if (k === "parametric-surfaces") {
      arrow("参数切向量 u", at, a, green);
      arrow("参数切向量 v", at, b, blue);
    }
    if (k === "flux") {
      for (let x = -0.5; x <= 0.5; x += 0.5)
        for (let y = -0.5; y <= 0.5; y += 0.5)
          arrow("竖直场", [x, y, p.c * x], [0, 0, 0.7], green);
      stat("单位参数格通量", 1);
      stat("单位法向场分量", unit[2]);
      f.formula = "(0,0,1)\\cdot(-c,0,1)=1";
    } else {
      stat("单位参数格面积", norm(n));
      stat("单位法向竖分量", unit[2]);
      f.formula = "dS=\\sqrt{1+c^2}\\,du\\,dv";
    }
    poly(
      [
        [0, 0, 0],
        [1, 0, p.c],
        [1, 1, p.c],
        [0, 1, 0],
      ],
      green,
      0.3,
    );
    f.note += " 亮色方格为参数单位正方形，外围网格用于空间定位。";
  } else if (k === "stokes" || k === "choosing-theorem") {
    mesh(
      (r, a) => [r * Math.cos(a), r * Math.sin(a), p.c * (1 - r * r)],
      0,
      1,
      0,
      tau,
      14,
      blue,
      0.15,
    );
    line("固定边界", circle(1), green);
    poly(circle(1), blue, 0.1);
    const at = [0.5, 0, p.c * 0.75],
      normal = [p.c, 0, 1];
    arrow("向上单位法向", at, scale(normal, 1 / norm(normal)), gold);
    const curl = k === "stokes" ? 2 : 1;
    arrow("旋度", [0, 0, p.c / 2], [0, 0, curl * 0.5], green);
    stat("边界正向环流", curl * pi);
    stat("旋度向上通量", curl * pi);
    if (k === "choosing-theorem") {
      stat("闭面向外通量", capVolume(p.c));
      stat("包围体积", capVolume(p.c));
      f.formula =
        "\\nabla\\times\\mathbf F=(0,0,1),\\quad\\nabla\\cdot\\mathbf F=1";
    } else {
      stat("鼓起高度", p.c);
      f.formula =
        "\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS=2\\pi";
    }
    arrow("边界正向", [1, 0, 0], [0, 0.4, 0], green);
    f.note +=
      " 旋度箭头按 0.5 倍绘制，边界小箭头只表示正向。零鼓起时闭合实体退化为零体积。";
  } else if (k === "divergence" || k === "conservation") {
    const R = k === "divergence" ? p.b : 1,
      rho = k === "conservation" ? Math.exp(-3 * p.x) : 1;
    sphere(R);
    for (const a of [0.6, 1.4, 2.3])
      for (let j = 0; j < 6; j++) {
        const b = (j * tau) / 6,
          at = [
            R * Math.sin(a) * Math.cos(b),
            R * Math.sin(a) * Math.sin(b),
            R * Math.cos(a),
          ];
        arrow("径向质量通量", at, scale(at, 0.22 * rho), green);
      }
    const mass = (4 * pi * R ** 3 * rho) / 3,
      flux = sphereFlux(R, rho);
    if (k === "conservation") {
      stat("球内质量", mass);
      stat("质量导数", -flux);
      stat("向外质量通量", flux);
      stat("均匀密度", rho);
      f.formula = "\\rho=e^{-3t},\\quad M\\prime=-\\Phi_{\\rm out}";
    } else {
      stat("向外通量", flux);
      stat("散度体积分", (3 * 4 * pi * R ** 3) / 3);
      stat("球面场强", R);
      f.formula = "\\Phi=3\\cdot\\frac{4\\pi R^3}3=4\\pi R^3";
    }
    f.note += " 箭头为质量通量场（此处速度为位置向量），统一按 0.22 倍显示。";
  }
  const framing = {
    vectors: [2.7, [0.6, 0.4, 0.4]],
    dot: [2.1, [0.5, 0.3, 0.3]],
    cross: [2.2, [0.7, 0.5, 0.5]],
    quadrics: [2, [0, 0, 0.35]],
    "critical-points": [2, [0, 0, 0.35]],
    coordinates: [2.2, [0, 0, 0]],
    spherical: [2.2, [0, 0, 0]],
    "vector-curves": [1.9, [0, 0, 0.5]],
    motion: [1.8, [0, 0, 0]],
    curvature: [2.7, [0, 0, 0]],
    surfaces: [2, [0, 0, 0.5]],
    partials: [2, [0, 0, 0.5]],
    chain: [2, [0, 0, 0.5]],
    gradient: [2.4, [0.3, 0, 0.5]],
    "multivariable-limits": [1.7, [0, 0, 0]],
    taylor: [2, [0, 0, 1.2]],
    "closed-domains": [2.8, [0, 0, 0]],
    lagrange: [2.1, [0, 0, 0]],
    "double-integrals": [1.9, [0.5, 0.5, 1.1]],
    "double-applications": [2.5, [0.5, 0.5, 1.4]],
    "regions-order": [1.3, [0.4, 0.6, 0]],
    "polar-integrals": [2.5, [0, 0, 0]],
    "triple-integrals": [1.15, [0.25, 0.25, 0.3]],
    cylindrical: [2.2, [0, 0, 1]],
    "change-variables": [2.3, [1, 0.5, 0]],
    fields: [2.4, [0, 0, 0]],
    "div-curl": [2.4, [0, 0, 0]],
    "line-scalar": [1.7, [0, 0, 0]],
    "line-work": [1.8, [0, 0, 0]],
    potential: [1.8, [0, 0, 0]],
    green: [2.6, [0, 0, 0]],
    "parametric-surfaces": [2.8, [0.2, 0.2, 0.5]],
    "surface-area": [2.6, [0.2, 0.2, 0.5]],
    flux: [2.6, [0.2, 0.2, 0.5]],
    stokes: [1.8, [0, 0, 0.35]],
    "choosing-theorem": [1.8, [0, 0, 0.35]],
    divergence: [2.9, [0, 0, 0]],
    conservation: [1.8, [0, 0, 0]],
  };
  if (framing[k]) {
    f.extent = framing[k][0];
    f.focus = framing[k][1];
  }
  if (!f.formula || f.stats.length < 2) throw Error("Incomplete model " + id);
  return f;
}
