/** Deterministic, local-only models for the second volume. */
const tau = 2 * Math.PI;
const aliases = {
  "power-series": "power",
  strategy: "parts",
  absolute: "alternating",
  "power-operations": "power",
  "taylor-error": "taylor",
  "standard-series": "standard",
  "series-applications": "series-integral",
  "parametric-calculus": "parametric",
  "polar-calculus": "polar-area",
  "differential-models": "slope-field",
  "euler-logistic": "euler",
  "trig-integrals": "trig",
  "trig-substitution": "trig-sub",
  "partial-fractions": "fractions",
  "improper-infinity": "tail",
  "improper-singular": "singularity",
  sequences: "sequence",
  monotone: "recurrence",
  series: "harmonic",
  "ratio-root": "ratio",
};
export const familyFor = (id) =>
  aliases[id.replace(/^c2-/, "")] || id.replace(/^c2-/, "");
const control = (key, label, min, max, step, value) => ({
  key,
  label,
  min,
  max,
  step,
  value,
});
const N = (max = 80, min = 1, step = 1, value = 8) =>
  control("n", "项数 $N$", min, max, step, value);
const X = (min, max, value = 0, label = "输入 $x$") =>
  control("x", label, min, max, 0.01, value);
const groups = {
  parts: [control("b", "积分上限 $b$", 0.1, 2, 0.01, 1)],
  trig: [control("n", "分段数 $n$（偶数）", 2, 80, 2, 8)],
  "trig-sub": [X(0, 1.5, 0.5, "代换角度 $\\theta$")],
  fractions: [X(0.2, 4, 1)],
  numerical: [control("n", "分段数 $n$（偶数）", 2, 80, 2, 8)],
  tail: [
    control("c", "衰减指数 $p$", 0.5, 3, 0.05, 2),
    control("b", "截断上限 $R$", 2, 40, 0.1, 4),
  ],
  singularity: [
    control("c", "尖峰指数 $p$", 0.2, 2, 0.05, 0.5),
    control("h", "截断下界 $\\delta$", 0.0001, 0.3, 0.0001, 0.1),
  ],
  surface: [control("c", "直线坡度 $m$", 0.2, 3, 0.05, 1)],
  moments: [control("c", "密度系数 $c$", 0, 6, 0.05, 2)],
  pressure: [control("b", "水深 $H$（米）", 0.5, 4, 0.05, 2)],
  sequence: [N()],
  recurrence: [N(20, 1, 1, 4)],
  harmonic: [N()],
  geometric: [control("c", "公比 $r$", -1.2, 1.2, 0.05, 0.5), N()],
  "integral-test": [N()],
  comparison: [N()],
  ratio: [N(30)],
  alternating: [N()],
  power: [X(-1.25, 0.95, 0.5), N(80, 1, 1, 8)],
  taylor: [control("n", "多项式阶数 $m$", 0, 12, 1, 4), X(-1.5, 1.5, 0.5)],
  standard: [control("n", "多项式阶数 $m$", 0, 12, 1, 3), X(-1.5, 1.5, 0.5)],
  "series-integral": [
    control("n", "被积多项式阶数 $m$", 0, 12, 1, 4),
    X(0, 1, 0.5),
  ],
  binomial: [control("n", "多项式阶数 $m$", 0, 12, 1, 4), X(-0.9, 0.95, 0.5)],
  parametric: [X(0, tau, 0, "参数 $t$")],
  polar: [X(0, tau, 0, "极角 $\\theta$")],
  "polar-area": [X(0, tau, 0, "极角 $\\theta$")],
  "slope-field": [control("n", "Euler 步数 $n$", 4, 80, 1, 16)],
  separable: [control("n", "Euler 步数 $n$", 4, 80, 1, 16)],
  "linear-ode": [control("n", "Euler 步数 $n$", 4, 80, 1, 16)],
  euler: [control("n", "Euler 步数 $n$", 4, 80, 1, 16)],
};
export const calculus2Controls = (id) => groups[familyFor(id)];
export const calculus2Bounds = (id) =>
  Object.fromEntries(calculus2Controls(id).map((c) => [c.key, [c.min, c.max]]));
export const calculus2Defaults = (id) =>
  Object.fromEntries(calculus2Controls(id).map((c) => [c.key, c.value]));
export function assertParameters(id, p) {
  for (const c of calculus2Controls(id)) {
    const v = p[c.key];
    if (
      !Number.isFinite(v) ||
      v < c.min ||
      v > c.max ||
      (c.step >= 1 && !Number.isInteger(v)) ||
      (c.step === 2 && v % 2)
    )
      throw Error(`${id}: invalid ${c.key}`);
  }
}
export const factorial = (n) => {
  let a = 1;
  for (let k = 2; k <= n; k++) a *= k;
  return a;
};
export function simpson(f, a, b, n) {
  if (!Number.isInteger(n) || n < 2 || n % 2)
    throw Error("Simpson needs a positive even subdivision count");
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + ((b - a) * i) / n);
  return (s * (b - a)) / (3 * n);
}
export function powerIntegral(a, b, p) {
  if (!(a > 0 && b >= a)) throw Error("positive bounds required");
  return Math.abs(p - 1) < 1e-12
    ? Math.log(b / a)
    : (Math.pow(b, 1 - p) - Math.pow(a, 1 - p)) / (1 - p);
}
export function taylorValue(kind, x, m) {
  let s = 0,
    coef = 1;
  for (let k = 0; k <= m; k++) {
    if (kind === "standard") {
      if (k % 2) s += ((-1) ** ((k - 1) / 2) * x ** k) / factorial(k);
    } else if (kind === "binomial") {
      if (k > 0) coef *= (0.5 - (k - 1)) / k;
      s += coef * x ** k;
    } else if (kind === "series-integral") {
      if (k % 2 === 0) s += ((-1) ** (k / 2) * x ** k) / factorial(k / 2);
    } else s += x ** k / factorial(k);
  }
  return s;
}
export function odeModel(family) {
  if (family === "linear-ode")
    return {
      f: (x, y) => 4 - 2 * y,
      exact: (x) => 2 - Math.exp(-2 * x),
      y0: 1,
      end: 4,
      range: [0, 4, -0.5, 3.5],
      label: "$y\\prime=4-2y$",
    };
  if (family === "separable")
    return {
      f: (x, y) => y * y,
      exact: (x) => 1 / (1 - x),
      y0: 1,
      end: 0.8,
      range: [0, 0.8, 0, 6],
      label: "$y\\prime=y^2$",
    };
  return {
    f: (x, y) => y * (1 - y / 10),
    exact: (x) => 10 / (1 + 4 * Math.exp(-x)),
    y0: 2,
    end: 4,
    range: [0, 4, 0, 11],
    label: "$y\\prime=y(1-y/10)$",
  };
}
export function eulerPath(f, y0, end, n) {
  const points = [[0, y0]],
    h = end / n;
  for (let i = 0; i < n; i++) {
    const [x, y] = points.at(-1);
    points.push([(i + 1) * h, y + h * f(x, y)]);
  }
  return points;
}
const sum = (n, f) => {
  let s = 0;
  for (let k = 1; k <= n; k++) s += f(k);
  return s;
};
const sample = (f, a, b, n = 240) =>
  Array.from({ length: n + 1 }, (_, i) => {
    let x = a + ((b - a) * i) / n;
    return [x, f(x)];
  });
const line = (label, points, color = "#70c4de", dash = false) => ({
  label,
  points,
  color,
  dash,
});
const fmt = (v) =>
  !Number.isFinite(v)
    ? "无有限值"
    : v !== 0 && (Math.abs(v) < 1e-6 || Math.abs(v) >= 1e8)
      ? v.toExponential(3)
      : Number(v.toPrecision(8)).toString();
const stat = (label, v) => ({
  label,
  value: typeof v === "string" ? v : fmt(v),
});
export function calculus2Frame(id, params, curve = "cardioid") {
  const p = { ...calculus2Defaults(id), ...params };
  assertParameters(id, p);
  const k = familyFor(id),
    { n, x, c, b, h } = p;
  let range = [0, 1, 0, 1],
    lines = [],
    dots = [],
    area = null,
    stats = [],
    formula = "",
    axes = ["x", "y"],
    note = "图像只显示有限范围；读数采用有限精度。",
    field = [];
  if (k === "parts") {
    const f = (t) => t * Math.exp(t);
    range = [0, 2, 0, 15];
    lines = [line("被积函数", sample(f, 0, 2))];
    area = sample(f, 0, b);
    stats = [
      stat("累计积分", Math.exp(b) * (b - 1) + 1),
      stat("边界项", b * Math.exp(b)),
      stat("剩余积分", Math.exp(b) - 1),
    ];
    formula = "\\int_0^b xe^x dx=be^b-(e^b-1)";
  } else if (k === "trig" || k === "numerical") {
    const f = k === "trig" ? (t) => Math.sin(t) ** 3 : Math.exp,
      end = k === "trig" ? Math.PI / 2 : 1,
      exact = k === "trig" ? 2 / 3 : Math.E - 1;
    range = [0, end, 0, k === "trig" ? 1.2 : 3];
    let pts = sample(f, 0, end, n);
    let trap =
      ((pts[0][1] +
        pts.at(-1)[1] +
        2 * pts.slice(1, -1).reduce((s, q) => s + q[1], 0)) *
        end) /
      (2 * n);
    lines = [
      line("原函数", sample(f, 0, end)),
      line("梯形边界", pts, "#dbb979"),
    ];
    dots = pts;
    stats = [
      stat("Simpson 近似", simpson(f, 0, end, n)),
      stat("梯形近似", trap),
      stat("精确积分", exact),
      stat("Simpson 实际误差", Math.abs(simpson(f, 0, end, n) - exact)),
    ];
    if (k === "numerical")
      stats.push(stat("Simpson 误差上界", Math.E / (180 * n ** 4)));
    formula = "S_n=\\frac{h}{3}(f_0+4f_1+2f_2+\\cdots+f_n)";
  } else if (k === "trig-sub") {
    const xx = 2 * Math.sin(x),
      yy = 2 * Math.cos(x);
    range = [-2.3, 2.3, -0.3, 2.4];
    lines = [
      line(
        "半圆",
        sample((t) => Math.sqrt(Math.max(0, 4 - t * t)), -2, 2),
      ),
      line(
        "代换三角形",
        [
          [0, 0],
          [xx, 0],
          [xx, yy],
          [0, 0],
        ],
        "#dbb979",
      ),
    ];
    dots = [[xx, yy]];
    stats = [stat("横坐标", xx), stat("根式高度", yy), stat("角度", x)];
    formula = "x=2\\sin\\theta,\\quad\\sqrt{4-x^2}=2\\cos\\theta";
  } else if (k === "fractions") {
    const f = (t) => 1 / (t * (t + 1));
    range = [0.15, 4, -5, 6];
    lines = [
      line("原分式", sample(f, 0.2, 4)),
      line(
        "第一项",
        sample((t) => 1 / t, 0.2, 4),
        "#dbb979",
      ),
      line(
        "第二项",
        sample((t) => -1 / (t + 1), 0.2, 4),
        "#bb98e5",
      ),
    ];
    dots = [[x, f(x)]];
    stats = [stat("原函数值", f(x)), stat("分解后相加", 1 / x - 1 / (x + 1))];
    formula = "\\frac1{x(x+1)}=\\frac1x-\\frac1{x+1}";
  } else if (k === "tail" || k === "singularity") {
    const a = k === "tail" ? 1 : h,
      end = k === "tail" ? b : 1,
      f = (t) => t ** -c;
    range = [0, end, 0, k === "tail" ? 1.2 : 8];
    lines = [line("被积函数", sample(f, Math.max(a, 0.0001), end))];
    area = sample(f, a, end);
    const converges = k === "tail" ? c > 1 : c < 1;
    stats = [
      stat("截断面积", powerIntegral(a, end, c)),
      stat("反常积分", converges ? 1 / Math.abs(c - 1) : "发散"),
      stat(k === "tail" ? "截断上限" : "截断下界", k === "tail" ? b : h),
    ];
    if (converges)
      stats.push(
        stat(
          "尚未计入的面积",
          k === "tail" ? b ** (1 - c) / (c - 1) : h ** (1 - c) / (1 - c),
        ),
      );
    formula = k === "tail" ? "\\int_1^R x^{-p}dx" : "\\int_\\delta^1x^{-p}dx";
    note = "收敛结论来自解析极限；阴影只画出当前有限截断。";
  } else if (k === "surface") {
    range = [0, 1.1, 0, 3.3];
    lines = [
      line("母线", [
        [0, 0],
        [1, c],
      ]),
      line(
        "轴",
        [
          [0, 0],
          [1, 0],
        ],
        "#dbb979",
      ),
    ];
    dots = [[1, c]];
    stats = [
      stat("端点半径", c),
      stat("母线长度", Math.hypot(1, c)),
      stat("旋转侧面积", Math.PI * c * Math.hypot(1, c)),
    ];
    formula = "S=2\\pi\\int_0^1 mx\\sqrt{1+m^2}dx";
    note = "二维图显示圆锥母线；面积为绕横轴旋转后的侧面积，不含底面。";
  } else if (k === "moments") {
    const f = (t) => 1 + c * t,
      m = 1 + c / 2,
      center = (0.5 + c / 3) / m;
    range = [0, 1, 0, 7.5];
    lines = [
      line("线密度", sample(f, 0, 1)),
      line(
        "质心位置",
        [
          [center, 0],
          [center, f(center)],
        ],
        "#dbb979",
        true,
      ),
    ];
    area = sample(f, 0, 1);
    dots = [[center, f(center)]];
    stats = [
      stat("质量", m),
      stat("关于原点的力矩", 0.5 + c / 3),
      stat("质心横坐标", center),
    ];
    formula = "\\rho=1+cx,\\quad\\bar x=\\frac{1/2+c/3}{1+c/2}";
    axes = ["位置 x", "密度"];
  } else if (k === "pressure") {
    const f = (t) => 9800 * t;
    range = [0, 4, 0, 42000];
    lines = [line("表压", sample(f, 0, 4))];
    area = sample(f, 0, b);
    stats = [
      stat("底部表压（Pa）", 9800 * b),
      stat("每米宽总力（N）", 4900 * b * b),
    ];
    formula = "F=9800\\int_0^H y\\,dy";
    axes = ["深度（m）", "压力（Pa）"];
  } else if (
    [
      "sequence",
      "recurrence",
      "harmonic",
      "geometric",
      "integral-test",
      "comparison",
      "ratio",
      "alternating",
    ].includes(k)
  ) {
    axes = ["项数", "数值"];
    let a,
      jStart = 1,
      ref = null;
    if (k === "sequence") {
      a = (j) => 1 / j;
      stats = [stat("末项", a(n)), stat("极限", 0)];
      formula = "a_n=\\frac1n";
    }
    if (k === "recurrence") {
      let values = [1];
      for (let j = 1; j < n; j++) values.push(Math.sqrt(2 + values.at(-1)));
      a = (j) => values[j - 1];
      ref = 2;
      stats = [stat("末项（数值）", a(n)), stat("极限", 2)];
      formula = "a_1=1,\\quad a_{n+1}=\\sqrt{2+a_n}";
      note = "末项可能因显示精度看起来等于 2；数学上的有限项仍小于 2。";
    }
    if (k === "harmonic") {
      a = (j) => sum(j, (t) => 1 / t);
      stats = [
        stat("单项", 1 / n),
        stat("部分和", a(n)),
        stat("级数结论", "发散"),
      ];
      formula = "a_n=\\frac1n,\\quad S_N=\\sum_{n=1}^N\\frac1n";
    }
    if (k === "geometric") {
      a = (j) => sum(j, (t) => c ** (t - 1));
      ref = Math.abs(c) < 1 ? 1 / (1 - c) : null;
      stats = [
        stat("部分和", a(n)),
        stat("无限和", ref ?? "发散"),
        stat("最后一项", c ** (n - 1)),
      ];
      formula = "S_N=\\sum_{j=0}^{N-1}r^j";
    }
    if (k === "integral-test") {
      a = (j) => sum(j, (t) => 1 / t ** 2);
      ref = Math.PI ** 2 / 6;
      stats = [
        stat("部分和", a(n)),
        stat("尾和下界", 1 / (n + 1)),
        stat("尾和上界", 1 / n),
      ];
      formula = "\\frac1{N+1}\\leq R_N\\leq\\frac1N";
    }
    if (k === "comparison") {
      a = (j) => 1 / (j * j + 1);
      stats = [
        stat("当前项", a(n)),
        stat("参照项", 1 / n ** 2),
        stat("两项比例", (n * n) / (n * n + 1)),
      ];
      formula = "0<\\frac1{n^2+1}\\leq\\frac1{n^2}";
    }
    if (k === "ratio") {
      a = (j) => 2 ** (j - 1) / factorial(j - 1);
      stats = [
        stat("末项", a(n)),
        stat("下一项比值", 2 / n),
        stat(
          "当前部分和",
          sum(n, (j) => a(j)),
        ),
      ];
      formula = "a_n=\\frac{2^n}{n!}";
    }
    if (k === "alternating") {
      a = (j) => sum(j, (t) => (-1) ** (t - 1) / t);
      ref = Math.LN2;
      stats = [
        stat("部分和", a(n)),
        stat("真值 $\\ln 2$", Math.LN2),
        stat("实际误差", Math.abs(a(n) - Math.LN2)),
        stat("下一项误差界", 1 / (n + 1)),
      ];
      formula = "S_N=\\sum_{n=1}^N\\frac{(-1)^{n-1}}n";
    }
    const points = Array.from({ length: n }, (_, i) => [i + 1, a(i + 1)]);
    let vals = points.map((p) => p[1]);
    if (ref !== null) vals.push(ref);
    let low = Math.min(0, ...vals),
      high = Math.max(0.1, ...vals);
    range = [
      0,
      Math.max(10, n + 1),
      low - (high - low) * 0.1,
      high + (high - low) * 0.18,
    ];
    lines = [
      line(
        k === "harmonic" ||
          k === "alternating" ||
          k === "geometric" ||
          k === "integral-test"
          ? "部分和"
          : "数列项",
        points,
      ),
    ];
    dots = points;
    if (ref !== null)
      lines.push(
        line(
          "极限或总和参照",
          [
            [0, ref],
            [range[1], ref],
          ],
          "#dbb979",
          true,
        ),
      );
    if (k === "comparison")
      lines.push(
        line(
          "平方倒数参照",
          points.map(([j]) => [j, 1 / j ** 2]),
          "#dbb979",
        ),
      );
    if (k === "harmonic")
      lines.push(
        line(
          "单项（与累计值不同）",
          points.map(([j]) => [j, 1 / j]),
          "#bb98e5",
        ),
      );
  } else if (k === "power") {
    const derivative = id === "c2-power-operations";
    const actual = (t) => (derivative ? 1 / (1 - t) ** 2 : 1 / (1 - t)),
      partial = (t) =>
        sum(n, (j) => (derivative ? j * t ** (j - 1) : t ** (j - 1)));
    range = [-1.3, 0.96, -3, 8];
    lines = [
      line("函数值", sample(actual, -1.3, 0.96)),
      line("有限展开", sample(partial, -1.3, 0.96), "#dbb979"),
    ];
    dots = [[x, partial(x)]];
    stats = [
      stat("输入", x),
      stat("有限展开值", partial(x)),
      stat("函数值", actual(x)),
      stat("该输入的级数", Math.abs(x) < 1 ? "绝对收敛" : "发散"),
    ];
    formula = derivative
      ? "\\frac1{(1-x)^2}=\\sum_{n=1}^\\infty nx^{n-1}\\quad(|x|<1)"
      : "\\frac1{1-x}=\\sum_{n=0}^\\infty x^n\\quad(|x|<1)";
    note =
      "函数在半径外有值，不代表这份级数在那里收敛。超出图窗的曲线会被裁切。";
  } else if (
    ["taylor", "standard", "series-integral", "binomial"].includes(k)
  ) {
    const f =
      k === "standard"
        ? Math.sin
        : k === "binomial"
          ? (t) => Math.sqrt(1 + t)
          : k === "series-integral"
            ? (t) => Math.exp(-t * t)
            : Math.exp;
    const min = k === "binomial" ? -0.9 : k === "series-integral" ? 0 : -1.5,
      max = k === "binomial" ? 0.95 : k === "series-integral" ? 1 : 1.5;
    range = [
      min,
      max,
      k === "standard" ? -1.6 : k === "binomial" ? 0 : -0.4,
      k === "standard" ? 1.6 : 4.8,
    ];
    const approx = (t) => taylorValue(k, t, n);
    lines = [
      line("原函数", sample(f, min, max)),
      line("有限多项式", sample(approx, min, max), "#dbb979"),
    ];
    dots = [[x, approx(x)]];
    stats = [
      stat("函数值", f(x)),
      stat("多项式值", approx(x)),
      stat("实际点误差", Math.abs(f(x) - approx(x))),
    ];
    formula =
      k === "taylor"
        ? "T_m(x)=\\sum_{k=0}^m\\frac{x^k}{k!}"
        : k === "standard"
          ? "T_m(x)=\\sum_{2k+1\\leq m}\\frac{(-1)^kx^{2k+1}}{(2k+1)!}"
          : k === "binomial"
            ? "T_m(x)=\\sum_{k=0}^m{1/2\\choose k}x^k"
            : "P_m(t)=\\sum_{2k\\leq m}\\frac{(-1)^kt^{2k}}{k!}";
    if (k === "taylor")
      stats.push(
        stat(
          "Taylor 误差上界",
          (Math.exp(Math.abs(x)) * Math.abs(x) ** (n + 1)) / factorial(n + 1),
        ),
      );
    if (k === "series-integral") {
      let integral = 0;
      for (let j = 0; 2 * j <= n; j++)
        integral +=
          ((-1) ** j * x ** (2 * j + 1)) / (factorial(j) * (2 * j + 1));
      stats.push(
        stat("积分多项式近似", integral),
        stat("积分数值参照", simpson(f, 0, x, 200)),
      );
      area = sample(approx, 0, x);
    }
  } else if (k === "parametric" || k === "polar" || k === "polar-area") {
    const param = k === "parametric",
      rose = k === "polar" && curve === "rose";
    const radius = (t) => (rose ? 2 * Math.cos(2 * t) : 1 + Math.cos(t));
    const at = (t) =>
      param
        ? [2 * Math.cos(t), Math.sin(t)]
        : [radius(t) * Math.cos(t), radius(t) * Math.sin(t)];
    const pts = Array.from({ length: 321 }, (_, j) => at((tau * j) / 320)),
      count = Math.max(2, Math.ceil(x * 50)),
      path = Array.from({ length: count }, (_, j) => at((x * j) / (count - 1)));
    range = [-2.5, 2.5, -2.2, 2.2];
    lines = [
      line("完整路径", pts, "#739384", true),
      line("已经走过的路径", path),
    ];
    dots = [at(x)];
    if (param)
      lines.push(
        line(
          "速度向量",
          [
            at(x),
            [at(x)[0] - 0.7 * Math.sin(x), at(x)[1] + 0.35 * Math.cos(x)],
          ],
          "#bb98e5",
        ),
      );
    if (!param) area = [[0, 0], ...path, [0, 0]];
    stats = param
      ? [
          stat("横坐标", at(x)[0]),
          stat("纵坐标", at(x)[1]),
          stat("速率", Math.hypot(2 * Math.sin(x), Math.cos(x))),
        ]
      : [
          stat("带符号半径", radius(x)),
          stat("横坐标", at(x)[0]),
          stat("纵坐标", at(x)[1]),
          stat(
            rose ? "参数扫过量（可重叠）" : "已扫过面积",
            rose
              ? x + Math.sin(4 * x) / 4
              : (3 * x) / 4 + Math.sin(x) + Math.sin(2 * x) / 8,
          ),
        ];
    formula = param
      ? "x=2\\cos t,\\quad y=\\sin t"
      : rose
        ? "r=2\\cos(2\\theta)"
        : "r=1+\\cos\\theta";
    note = rose
      ? "玫瑰线会出现负半径，阴影按参数过程扫过，可能重叠；累积量不是自动去重的面积。"
      : "参数区间决定方向与描绘次数，有限采样只用于显示。";
  } else {
    const model = odeModel(k),
      points = eulerPath(model.f, model.y0, model.end, n);
    range = model.range;
    lines = [
      line("精确解", sample(model.exact, 0, model.end)),
      line("Euler 近似", points, "#dbb979"),
    ];
    dots = points;
    for (let i = 0; i <= 14; i++)
      for (let j = 0; j <= 10; j++) {
        const xx = range[0] + ((range[1] - range[0]) * i) / 14,
          yy = range[2] + ((range[3] - range[2]) * j) / 10;
        field.push([xx, yy, model.f(xx, yy)]);
      }
    stats = [
      stat("步长", model.end / n),
      stat("Euler 终值", points.at(-1)[1]),
      stat("精确终值", model.exact(model.end)),
      stat("末点误差", Math.abs(points.at(-1)[1] - model.exact(model.end))),
    ];
    formula = model.label.replace(/^\$|\$$/g, "");
    note =
      "方向场只画局部斜率；金色折线是离散近似。存在、唯一性与有效区间由正文条件判断。";
  }
  return {
    range,
    lines,
    dots,
    area,
    stats,
    formula,
    axes,
    note,
    field,
    equalAspect: [
      "trig-sub",
      "surface",
      "parametric",
      "polar",
      "polar-area",
    ].includes(k),
  };
}
export function calculus2Playback(id, seed, elapsed) {
  const controls = calculus2Controls(id),
    primary = controls.find((c) => c.key === "n") || controls.at(-1);
  const start = seed[primary.key],
    end = primary.key === "h" ? primary.min : primary.max,
    t = Math.max(0, Math.min(1, elapsed / 6));
  let value =
    primary.key === "h"
      ? Math.max(end, start * Math.pow(end / start, t))
      : start + (end - start) * t;
  if (primary.step >= 1)
    value =
      primary.min +
      Math.floor((value - primary.min) / primary.step) * primary.step;
  if (t === 1) value = end;
  return { key: primary.key, value, done: t === 1 };
}
