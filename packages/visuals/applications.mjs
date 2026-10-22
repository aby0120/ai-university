const finite = (...values) => values.every(Number.isFinite);
export function squareAverage(b) {
  if (!finite(b) || b <= 0) throw Error('Average requires a positive interval');
  return { integral: b ** 3 / 3, average: b ** 2 / 3, c: b / Math.sqrt(3) };
}
export function sectionSolid(x, shape = 'square') {
  if (!finite(x) || x < 0 || x > 1 || !['square','triangle'].includes(shape)) throw Error('Invalid section');
  const side = x * (1 - x), factor = shape === 'square' ? 1 : 0.5;
  return { side, area: factor * side ** 2, volume: factor / 30 };
}
export function pumpWater(level, outlet, fraction = 0.5) {
  if (!finite(level,outlet,fraction) || level <= 0 || outlet < level || fraction < 0 || fraction > 1) throw Error('Invalid water geometry');
  const y = level * fraction;
  return { y, lift: outlet - y, workDensity: 9800 * Math.PI * (outlet - y), work: 9800 * Math.PI * (outlet * level - level ** 2 / 2) };
}
export function waterPressure(top, fraction = 0.5) {
  if (!finite(top,fraction) || top < 0 || fraction < 0 || fraction > 1) throw Error('Invalid gate geometry');
  const depth = top + 3 * fraction;
  return { depth, pressure: 9800 * depth, forceDensity: 19600 * depth, force: 19600 * (3 * top + 4.5) };
}
