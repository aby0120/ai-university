export const functions = {
  absolute: {
    label: "|x|",
    f: Math.abs,
    d: (x) => (x === 0 ? NaN : Math.sign(x)),
    range: [-2, 2, -0.2, 2.2],
  },
  jump: {
    label: "x<1: 1；x>1: 3",
    f: (x) => (x === 1 ? NaN : x < 1 ? 1 : 3),
    d: (x) => (x === 1 ? NaN : 0),
    range: [0, 2, 0, 4],
    hole: [1, 1],
  },
  square: {
    label: "x²",
    f: (x) => x * x,
    d: (x) => 2 * x,
    range: [-2, 3, -1, 10],
  },
  cubic: {
    label: "x³",
    f: (x) => x * x * x,
    d: (x) => 3 * x * x,
    range: [-2, 2, -8, 8],
  },
  "cubic-extrema": {
    label: "x³−3x",
    f: (x) => x * x * x - 3 * x,
    d: (x) => 3 * x * x - 3,
    range: [-2.5, 2.5, -4, 4],
  },
  line: { label: "x", f: (x) => x, d: () => 1, range: [-2, 2, -2, 2] },
  velocity: {
    label: "t−1",
    f: (x) => x - 1,
    d: () => 1,
    range: [0, 3, -1.5, 2.5],
  },
  hole: {
    label: "(x²−1)/(x−1), x≠1",
    f: (x) => (Math.abs(x - 1) < 1e-12 ? NaN : x + 1),
    d: () => 1,
    range: [-1, 3, 0, 4],
    hole: [1, 2],
  },
  sinc: {
    label: "sin(x)/x, x≠0",
    f: (x) => (Math.abs(x) < 1e-12 ? NaN : Math.sin(x) / x),
    d: (x) => (x * Math.cos(x) - Math.sin(x)) / (x * x),
    range: [-4, 4, -0.5, 1.5],
    hole: [0, 1],
  },
  reciprocal: {
    label: "1/x",
    f: (x) => (Math.abs(x) < 1e-8 ? NaN : 1 / x),
    d: (x) => -1 / (x * x),
    range: [-3, 3, -6, 6],
    breaks: [0],
  },
  sin: { label: "sin(x)", f: Math.sin, d: Math.cos, range: [-7, 7, -1.8, 1.8] },
  exp: { label: "eˣ", f: Math.exp, d: Math.exp, range: [-2, 2, -1, 8] },
  sqrt: {
    label: "√x",
    f: (x) => (x < 0 ? NaN : Math.sqrt(x)),
    d: (x) => (x > 0 ? 1 / (2 * Math.sqrt(x)) : NaN),
    range: [-1, 6, -1, 3],
  },
  circle: {
    label: "√(4−x²)",
    f: (x) => (Math.abs(x) > 2 ? NaN : Math.sqrt(4 - x * x)),
    d: (x) => (Math.abs(x) >= 2 ? NaN : -x / Math.sqrt(4 - x * x)),
    range: [-2.5, 2.5, -0.5, 2.5],
  },
  arctan: {
    label: "arctan(x)",
    f: Math.atan,
    d: (x) => 1 / (1 + x * x),
    range: [-5, 5, -2, 2],
  },
  "area-parabola": {
    label: "x(12−x)",
    f: (x) => x * (12 - x),
    d: (x) => 12 - 2 * x,
    range: [0, 12, -2, 40],
  },
  "square-minus-two": {
    label: "x²−2",
    f: (x) => x * x - 2,
    d: (x) => 2 * x,
    range: [-2, 3, -3, 7],
  },
  expm1ratio: {
    label: "(eˣ−1)/x, x≠0",
    f: (x) => (Math.abs(x) < 1e-12 ? NaN : Math.expm1(x) / x),
    d: (x) => (x * Math.exp(x) - Math.expm1(x)) / (x * x),
    range: [-2, 2, 0, 4],
    hole: [0, 1],
  },
  arc: {
    label: "(2/3)x^(3/2)",
    f: (x) => (x < 0 ? NaN : (2 / 3) * x ** 1.5),
    d: (x) => (x < 0 ? NaN : Math.sqrt(x)),
    range: [0, 1.2, -0.1, 1],
  },
};
export function secant(f, a, h) {
  return Math.abs(h) < 1e-14 ? NaN : (f(a + h) - f(a)) / h;
}
export function integrate(f, a, b, n = 1000, method = "midpoint") {
  if (!Number.isInteger(n) || n < 1 || n > 100000)
    throw Error("Invalid subdivision count");
  const dx = (b - a) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const l = a + i * dx,
      r = l + dx;
    sum +=
      method === "trapezoid"
        ? (f(l) + f(r)) / 2
        : f(method === "left" ? l : method === "right" ? r : (l + r) / 2);
  }
  return sum * dx;
}
export function newton(f, d, x, steps = 6) {
  const rows = [];
  for (let i = 0; i < steps; i++) {
    const y = f(x),
      s = d(x);
    if (!Number.isFinite(y) || !Number.isFinite(s) || Math.abs(s) < 1e-10)
      return { rows, error: "导数为零或计算超出范围，请更换初值。" };
    const next = x - y / s;
    rows.push({ x, y, s, next });
    x = next;
    if (Math.abs(y) < 1e-10) break;
  }
  return { rows, error: null };
}
export function arcLength(f, a, b, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const x = a + ((b - a) * i) / n,
      z = a + ((b - a) * (i + 1)) / n;
    sum += Math.hypot(z - x, f(z) - f(x));
  }
  return sum;
}
export const epsilonDelta = (epsilon) => Math.min(1, epsilon / 5);
