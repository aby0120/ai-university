import test from "node:test";
import assert from "node:assert/strict";
import {
  revolutionGeometry,
  solidReadout,
} from "../packages/visuals/solid-models.mjs";
import { integrate } from "../packages/visuals/math.mjs";
const close = (a, b, e = 1e-6) =>
  assert.ok(Math.abs(a - b) < e, `${a} != ${b}`);
test("rotated geometry obeys the original Cartesian region, including holes", () => {
  for (const id of ["disk", "washer", "shell", "surface"])
    for (const angle of [0, 90, 270, 360]) {
      const pts = revolutionGeometry(id, angle, 12);
      assert.equal(pts.length % 9, 0);
      assert.ok([...pts].every(Number.isFinite));
      for (let i = 0; i < pts.length; i += 3) {
        const [x, y, z] = pts.slice(i, i + 3),
          axial = id === "shell" ? y : x;
        const r = id === "shell" ? Math.hypot(x, z) : Math.hypot(y, z);
        assert.ok(axial >= -1e-6 && axial <= 1 + 1e-6);
        if (id === "disk") assert.ok(r * r <= axial + 1e-6);
        if (id === "washer") assert.ok(r >= 1 - 1e-6 && r <= 2 + 1e-6);
        if (id === "shell") assert.ok(r <= 1 + 1e-6 && r * r >= axial - 1e-6);
        if (id === "surface") close(r, (2 / 3) * axial ** 1.5, 1e-6);
      }
    }
});
test("3D volumes match independent disk/washer/shell integrals", () => {
  const full = [
    integrate((x) => Math.PI * x, 0, 1),
    integrate(() => 3 * Math.PI, 0, 1),
    integrate((x) => 2 * Math.PI * x ** 3, 0, 1, 10000),
  ];
  ["disk", "washer", "shell"].forEach((id, i) => {
    close(solidReadout(id, 0.5).volume, full[i]);
    close(solidReadout(id, 0.5, 90).volume, full[i] / 4);
  });
  close(solidReadout("disk", 0.25).density, Math.PI / 4);
  close(solidReadout("washer", 0.7).density, 3 * Math.PI);
  close(solidReadout("shell", 0.5).density, Math.PI / 4);
});
test("rotation surface has no volume or end caps; invalid inputs are rejected", () => {
  assert.equal(solidReadout("surface", 0.5).volume, null);
  assert.equal(revolutionGeometry("surface", 360, 12).length, 12 * 12 * 18);
  assert.throws(() => revolutionGeometry("disk", 361));
  assert.throws(() => revolutionGeometry("disk", 270, 0));
  assert.throws(() => solidReadout("shell", -1));
});
test("triangle surface area converges to the calculus integral with no added caps", () => {
  const p = revolutionGeometry("surface", 360, 96);
  let area = 0;
  for (let i = 0; i < p.length; i += 9) {
    const u = [p[i + 3] - p[i], p[i + 4] - p[i + 1], p[i + 5] - p[i + 2]],
      v = [p[i + 6] - p[i], p[i + 7] - p[i + 1], p[i + 8] - p[i + 2]];
    area +=
      Math.hypot(
        u[1] * v[2] - u[2] * v[1],
        u[2] * v[0] - u[0] * v[2],
        u[0] * v[1] - u[1] * v[0],
      ) / 2;
  }
  const integral = integrate(
    (x) => ((4 * Math.PI) / 3) * Math.sqrt(x ** 3 * (1 + x)),
    0,
    1,
    20000,
  );
  close(area, integral, 0.002);
});
