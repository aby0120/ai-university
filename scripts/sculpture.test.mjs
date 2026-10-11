import test from "node:test";
import assert from "node:assert/strict";
import { sculpturePoint } from "../packages/visuals/sculpture-models.mjs";
const close = (a, b, tolerance = 1e-9) =>
  assert.ok(Math.abs(a - b) < tolerance, `${a} differs from ${b}`);
test("wave geometry agrees with independently differentiated height and amplitude bounds", () => {
  for (const amplitude of [0.1, 1.1, 1.8])
    for (const u of [0.1, 0.25, 0.5, 0.77, 0.9])
      for (const v of [0.1, 0.4, 0.8]) {
        const [x, y, z] = sculpturePoint("wave", u, v, amplitude);
        assert.ok(Math.abs(z) <= amplitude);
        const step = 1e-6,
          plus = sculpturePoint("wave", u + step, v, amplitude),
          minus = sculpturePoint("wave", u - step, v, amplitude);
        close(
          (plus[2] - minus[2]) / (plus[0] - minus[0]),
          amplitude * Math.cos(x) * Math.cos(y),
          1e-7,
        );
      }
});
test("torus surface obeys the implicit equation, retains a hole, and closes its seams", () => {
  for (const r of [0.25, 0.65, 1.2])
    for (let i = 0; i <= 20; i++)
      for (let j = 0; j <= 20; j++) {
        const [x, y, z] = sculpturePoint("torus", i / 20, j / 20, r),
          radius = Math.hypot(x, y);
        close((radius - 2) ** 2 + z * z, r * r);
        assert.ok(radius >= 2 - r - 1e-10);
        assert.ok(radius <= 2 + r + 1e-10);
      }
  for (const v of [0, 0.3, 1])
    sculpturePoint("torus", 0, v, 0.65).forEach((n, i) =>
      close(n, sculpturePoint("torus", 1, v, 0.65)[i]),
    );
});
test("helix display tube has constant normal radius and the stated one-turn pitch", () => {
  for (const p of [0.1, 0.2, 0.3])
    for (const u of [0, 0.2, 0.4, 0.7, 1])
      for (const v of [0, 0.13, 0.5, 0.77, 1]) {
        const t = u * 6 * Math.PI,
          c = [1.65 * Math.cos(t), 1.65 * Math.sin(t), p * (t - 3 * Math.PI)],
          q = sculpturePoint("helix", u, v, p),
          d = q.map((x, i) => x - c[i]);
        close(Math.hypot(...d), 0.12);
        close(
          d[0] * (-1.65 * Math.sin(t)) + d[1] * (1.65 * Math.cos(t)) + d[2] * p,
          0,
        );
        close(p * (t + 2 * Math.PI - 3 * Math.PI) - c[2], 2 * Math.PI * p);
      }
});
test("sculpture rejects non-finite parameters and illegal geometric ranges", () => {
  for (const args of [
    ["unknown", 0.5, 0.5, 1],
    ["wave", 0.5, 0.5, NaN],
    ["wave", 1.1, 0.5, 1],
    ["torus", 0.5, 0.5, 2],
    ["helix", 0.5, 0.5, 0],
  ])
    assert.throws(() => sculpturePoint(...args), RangeError);
});
