// Cartesian coordinates: x, y horizontal; z vertical. These are exploration
// models, not additional lessons in the canonical Calculus I manuscript.
export function sculpturePoint(mode, u, v, value) {
  const ranges = { wave: [0.1, 1.8], torus: [0.25, 1.2], helix: [0.1, 0.3] };
  const bounds = ranges[mode];
  if (
    !bounds ||
    ![u, v, value].every(Number.isFinite) ||
    u < 0 ||
    u > 1 ||
    v < 0 ||
    v > 1 ||
    value < bounds[0] ||
    value > bounds[1]
  )
    throw new RangeError("Invalid sculpture parameter");
  if (mode === "wave") {
    const x = (u - 0.5) * 2 * Math.PI,
      y = (v - 0.5) * 2 * Math.PI;
    return [x, y, value * Math.sin(x) * Math.cos(y)];
  }
  if (mode === "torus") {
    const a = u * 2 * Math.PI,
      b = v * 2 * Math.PI;
    return [
      (2 + value * Math.cos(b)) * Math.cos(a),
      (2 + value * Math.cos(b)) * Math.sin(a),
      value * Math.sin(b),
    ];
  }
  const t = u * 6 * Math.PI,
    b = v * 2 * Math.PI,
    c = Math.cos(t),
    s = Math.sin(t),
    normalizer = Math.hypot(1.65, value);
  return [
    1.65 * c +
      0.12 * (Math.cos(b) * c + (Math.sin(b) * value * s) / normalizer),
    1.65 * s +
      0.12 * (Math.cos(b) * s - (Math.sin(b) * value * c) / normalizer),
    value * (t - 3 * Math.PI) + (0.12 * Math.sin(b) * 1.65) / normalizer,
  ];
}
