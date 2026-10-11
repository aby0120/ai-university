/** Mathematical geometry only; no renderer or browser dependency. Units are arbitrary. */
export const solidModels = {
  disk: {
    axis: "x",
    outer: (t) => Math.sqrt(t),
    inner: () => 0,
    closed: true,
    volume: Math.PI / 2,
  },
  washer: {
    axis: "x",
    outer: () => 2,
    inner: () => 1,
    closed: true,
    volume: 3 * Math.PI,
  },
  shell: {
    axis: "y",
    outer: () => 1,
    inner: (t) => Math.sqrt(t),
    closed: true,
    volume: Math.PI / 2,
  },
  surface: {
    axis: "x",
    outer: (t) => (2 / 3) * t ** 1.5,
    inner: () => 0,
    closed: false,
  },
};
export function revolutionPoint(axis, t, r, angle) {
  return axis === "x"
    ? [t, r * Math.cos(angle), r * Math.sin(angle)]
    : [r * Math.cos(angle), t, r * Math.sin(angle)];
}
export function revolutionGeometry(
  modelId,
  degrees = 270,
  resolution = 48,
  start = 0,
  end = 1,
) {
  const model = solidModels[modelId];
  if (
    !model ||
    !Number.isFinite(degrees) ||
    degrees < 0 ||
    degrees > 360 ||
    !Number.isInteger(resolution) ||
    resolution < 2 ||
    resolution > 256 ||
    start < 0 ||
    end > 1 ||
    start > end
  )
    throw Error("Invalid revolution parameters");
  const positions = [],
    angle = (degrees * Math.PI) / 180;
  const tri = (a, b, c) => positions.push(...a, ...b, ...c);
  const quad = (a, b, c, d) => {
    tri(a, b, c);
    tri(a, c, d);
  };
  const point = (t, r, theta) => revolutionPoint(model.axis, t, r, theta);
  for (let i = 0; i < resolution; i++) {
    const t = start + ((end - start) * i) / resolution,
      u = start + ((end - start) * (i + 1)) / resolution;
    for (let j = 0; j < resolution; j++) {
      const a = (angle * j) / resolution,
        b = (angle * (j + 1)) / resolution;
      for (const radial of model.closed
        ? [model.outer, model.inner]
        : [model.outer]) {
        quad(
          point(t, radial(t), a),
          point(u, radial(u), a),
          point(u, radial(u), b),
          point(t, radial(t), b),
        );
      }
    }
    if (model.closed && degrees < 360) {
      for (const theta of [0, angle])
        quad(
          point(t, model.inner(t), theta),
          point(u, model.inner(u), theta),
          point(u, model.outer(u), theta),
          point(t, model.outer(t), theta),
        );
    }
  }
  if (model.closed) {
    for (const t of [start, end])
      for (let j = 0; j < resolution; j++) {
        const a = (angle * j) / resolution,
          b = (angle * (j + 1)) / resolution;
        quad(
          point(t, model.inner(t), a),
          point(t, model.outer(t), a),
          point(t, model.outer(t), b),
          point(t, model.inner(t), b),
        );
      }
  }
  return new Float32Array(positions);
}
export function solidReadout(modelId, position, degrees = 360) {
  if (
    !solidModels[modelId] ||
    position < 0 ||
    position > 1 ||
    degrees < 0 ||
    degrees > 360
  )
    throw Error("Invalid readout");
  const p = position,
    m = solidModels[modelId];
  const density =
    modelId === "shell"
      ? 2 * Math.PI * p ** 3
      : modelId === "surface"
        ? 2 * Math.PI * m.outer(p) * Math.sqrt(1 + p)
        : Math.PI * (m.outer(p) ** 2 - m.inner(p) ** 2);
  return {
    radius: modelId === "shell" ? p : m.outer(p),
    innerRadius: m.inner(p),
    density,
    volume: m.volume === undefined ? null : (m.volume * degrees) / 360,
  };
}
