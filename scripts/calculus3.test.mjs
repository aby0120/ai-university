import test from "node:test";
import assert from "node:assert/strict";
import { contentBooks, libraryLessons } from "./content-utils.mjs";
import { validateGuidance } from "../packages/visuals/guidance.mjs";
import {
  calculus3Controls,
  calculus3Defaults,
  calculus3Frame,
  calculus3Playback,
  assertParameters3,
  dot,
  cross,
  norm,
  projectPoint,
  midpoint2D,
  sphereFlux,
  capVolume,
  helixCurvature,
  sectorArea,
} from "../packages/visuals/calculus3.mjs";
import { simpson } from "../packages/visuals/calculus2.mjs";
import { parameterKeyValue } from "../packages/visuals/parameter-input.mjs";
import { validateMathNotation } from "./math-notation.mjs";
const third = contentBooks.find((c) => c.book.id === "calculus-3");
const near = (a, b, tol = 1e-8) =>
  assert(Math.abs(a - b) < tol, a + " differs from " + b);
test("third volume has an entire linked course with independent review and exam tasks", () => {
  assert.equal(third.book.chapters.length, 9);
  assert.equal(third.allLessons.length, 40);
  assert.equal(third.allLessons.flatMap((l) => l.workedExamples).length, 81);
  assert.equal(third.allLessons.flatMap((l) => l.practice).length, 160);
  assert.equal(third.extra.reviews.flatMap((r) => r.questions).length, 27);
  assert.equal(third.extra.exam.length, 16);
  const questions = third.allLessons.flatMap((l) => l.practice),
    sectionPrompts = new Set(questions.map((q) => q.problem));
  for (const q of [
    ...third.extra.exam,
    ...third.extra.reviews.flatMap((r) => r.questions),
  ])
    assert(
      !sectionPrompts.has(q.problem),
      "reviews must transfer, not repeat section questions verbatim",
    );
  assert.equal(new Set(libraryLessons.map((l) => l.id)).size, 160);
  for (const l of third.allLessons) {
    assert.notEqual(l.teaching.explain, l.intuition);
    validateGuidance(l);
  }
});
test("all 120 teaching presets, each slider endpoint and combined corner domains produce finite spatial geometry", () => {
  for (const l of third.allLessons) {
    const controls = calculus3Controls(l.id),
      base = calculus3Defaults(l.id);
    const cases = [
      base,
      ...l.teaching.steps.map((s) => ({ ...base, ...s.preset })),
    ];
    for (const c of controls)
      cases.push({ ...base, [c.key]: c.min }, { ...base, [c.key]: c.max });
    for (const bit of [0, 1])
      cases.push(
        Object.fromEntries(controls.map((c) => [c.key, bit ? c.max : c.min])),
      );
    for (const p of cases) {
      const f = calculus3Frame(l.id, p);
      const points = [
        ...f.lines.flatMap((l) => l.points),
        ...f.polygons.flatMap((a) => a.points),
        ...f.arrows.flatMap((a) => [a.at, a.vector]),
        ...f.dots.map((d) => d.at),
      ];
      assert(points.length > 0, l.id);
      for (const q of points) {
        assert.equal(q.length, 3);
        assert(q.every(Number.isFinite), l.id);
        for (const a of [-3, 0, 3])
          assert(projectPoint(q, a, 1.2).every(Number.isFinite));
      }
      validateMathNotation({ latex: f.formula }, l.id);
      for (const c of controls) validateMathNotation(c.label, l.id);
      for (const s of f.stats) validateMathNotation(s.label, l.id);
      assert(
        f.stats.length >= 2 &&
          f.stats.every((s) => !/(NaN|Infinity)/.test(s.value)),
        l.id,
      );
    }
    const c = controls[0];
    assert.throws(() =>
      assertParameters3(l.id, { ...base, [c.key]: c.max + 1 }),
    );
  }
});
test("automatic spatial experiments finish exactly and never divide by an endpoint zero", () => {
  for (const l of third.allLessons) {
    const seed = calculus3Defaults(l.id),
      end = calculus3Playback(l.id, seed, 6),
      later = calculus3Playback(l.id, seed, 100);
    assert(end.done);
    assert.deepEqual(end, later);
    assert(!calculus3Playback(l.id, seed, 3).done);
    const c = calculus3Controls(l.id).find((c) => c.key === end.key);
    assert(end.value === (end.key === "h" ? c.min : c.max));
    calculus3Frame(l.id, { ...seed, [end.key]: end.value });
    if (end.key === "h") assert(end.value > 0);
  }
});
test("orthographic spatial basis preserves 3D orthonormality, independent of orbit", () => {
  for (const yaw of [-2, 0, 1.7])
    for (const el of [-1, 0, 1.4]) {
      const basis = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ].map((p) => projectPoint(p, yaw, el));
      for (const b of basis) near(norm(b), 1);
      near(dot(basis[0], basis[1]), 0);
      near(dot(basis[0], basis[2]), 0);
      near(dot(basis[1], basis[2]), 0);
      const u = [2, -3, 1],
        v = [-0.4, 0.5, 3];
      near(dot(u, v), dot(projectPoint(u, yaw, el), projectPoint(v, yaw, el)));
    }
});
test("cross products recover independent triangle areas and normal orthogonality", () => {
  const a = [-1, 2, 0],
    b = [-1, 0, 3],
    n = cross(a, b);
  assert.deepEqual(n, [6, 3, 2]);
  near(dot(a, n), 0);
  near(dot(b, n), 0);
  near(norm(cross([1, 1, 0], [0, 1, 1])) / 2, Math.sqrt(3) / 2);
  for (const r of [0.5, 1, 2]) near(helixCurvature(r, 0), 1 / r);
  const r = 2,
    pitch = 1,
    h = 1e-4,
    t = 0.7,
    curve = (t) => [r * Math.cos(t), r * Math.sin(t), pitch * t],
    lo = curve(t - h),
    hi = curve(t + h),
    mid = curve(t);
  const v = hi.map((x, i) => (x - lo[i]) / (2 * h)),
    acc = hi.map((x, i) => (x - 2 * mid[i] + lo[i]) / (h * h));
  near(helixCurvature(r, pitch), norm(cross(v, acc)) / norm(v) ** 3, 2e-7);
});
test("multivariable estimates, gradients, chain cancellation and Taylor error are independently reproducible", () => {
  for (const h of [0.0001, 0.1, 0.5]) {
    const f = calculus3Frame("c3-differentiability", { h }),
      s = Object.fromEntries(f.stats.map((s) => [s.label, Number(s.value)]));
    near(s["真实误差"], 2 * h * h);
    near(s["误差 / 位移长度"], Math.sqrt(2) * h, 1e-7);
    const g = calculus3Frame("c3-taylor", { h: Math.max(0.01, h) }),
      stats = Object.fromEntries(
        g.stats.map((s) => [s.label, Number(s.value)]),
      );
    assert(stats["实际误差"] <= stats["三阶余项上界"]);
  }
  for (const a of [0, 0.7, Math.PI / 2]) {
    const h = 0.0001,
      x = h * Math.cos(a),
      y = h * Math.sin(a),
      f = calculus3Frame("c3-multivariable-limits", { h, a });
    near(Number(f.stats[1].value), (x * y) / (x * x + y * y), 1e-8);
  }
  const h = 1e-6,
    f = (x, y) => x * x + 2 * y * y,
    u = [3 / 5, 4 / 5];
  near(
    (f(1 + h * u[0], 1 + h * u[1]) - f(1 - h * u[0], 1 - h * u[1])) / (2 * h),
    22 / 5,
    1e-7,
  );
});
test("midpoint finite sums, polar cells, cap volumes and weighted centroids agree with independent integrals", () => {
  for (const n of [2, 8, 16])
    near(
      midpoint2D((x, y) => 1 + x + y, 0, 1, 0, 1, n),
      2,
    );
  for (const r of [0.5, 1, 2])
    near(
      sectorArea(r, 0.2, 0.25),
      simpson((t) => 0.25 * t, r, r + 0.2, 200),
    );
  for (const c of [0, 0.5, 1])
    near(
      capVolume(c),
      simpson((r) => 2 * Math.PI * r * c * (1 - r * r), 0, 1, 200),
    );
  const c = 3,
    mass = simpson((x) => 1 + c * x, 0, 1, 100),
    moment = simpson((x) => x * (1 + c * x), 0, 1, 100),
    frame = calculus3Frame("c3-double-applications", { c });
  near(Number(frame.stats[1].value), moment / mass, 1e-8);
  near(
    simpson((x) => (1 - x) ** 2 / 2, 0, 1, 100),
    1 / 6,
  );
});
test("Stokes, Green and divergence models agree with independent parameter integrals including orientation", () => {
  for (const R of [0.5, 1, 2]) {
    const line = simpson(
      (t) => R ** 2 * (Math.sin(t) ** 2 + Math.cos(t) ** 2),
      0,
      2 * Math.PI,
      200,
    );
    near(line, 2 * Math.PI * R ** 2);
    const surface = simpson(
      (phi) => simpson((theta) => R ** 3 * Math.sin(phi), 0, 2 * Math.PI, 100),
      0,
      Math.PI,
      200,
    );
    near(surface, sphereFlux(R), 1e-7);
    const volume = simpson(
      (r) =>
        simpson(
          (phi) => 3 * r * r * Math.sin(phi) * 2 * Math.PI,
          0,
          Math.PI,
          200,
        ),
      0,
      R,
      100,
    );
    near(surface, volume, 1e-7);
  }
  // Flux of a vertical field through a sloping graph: area and projection cancel.
  for (const c of [0, 0.4, 2]) {
    const n = cross([1, 0, c], [0, 1, 0]);
    near(dot([0, 0, 1], n), 1);
    near(norm(n), Math.sqrt(1 + c * c));
  }
});
test("conservation model satisfies both local continuity and whole-ball mass balance", () => {
  for (const t of [0, 0.2, 0.9]) {
    const h = 1e-5,
      rho = (x) => Math.exp(-3 * x),
      M = (x) => (4 * Math.PI * rho(x)) / 3;
    near((rho(t + h) - rho(t - h)) / (2 * h) + 3 * rho(t), 0, 2e-8);
    near((M(t + h) - M(t - h)) / (2 * h), -sphereFlux(1, rho(t)), 2e-8);
    const f = calculus3Frame("c3-conservation", { x: t }),
      s = Object.fromEntries(f.stats.map((s) => [s.label, Number(s.value)]));
    near(s["质量导数"] + s["向外质量通量"], 0);
  }
});

test("decimal parameter keyboard operations retain exact irrational endpoints and honor integer grids", () => {
  assert.equal(parameterKeyValue("End", 1, 0, Math.PI, 0.01), Math.PI);
  assert.equal(parameterKeyValue("End", 1, 0, 2 * Math.PI, 0.01), 2 * Math.PI);
  assert.equal(parameterKeyValue("Home", 1, 0.0001, 1, 0.0001), 0.0001);
  assert.equal(parameterKeyValue("ArrowRight", 8, 2, 80, 2), 10);
  assert.equal(parameterKeyValue("ArrowLeft", 2, 2, 80, 2), 2);
  assert.equal(parameterKeyValue("PageUp", 0.1, 0, 1, 0.01), 0.2);
  assert.equal(parameterKeyValue("Enter", 1, 0, 2, 0.01), null);
});
