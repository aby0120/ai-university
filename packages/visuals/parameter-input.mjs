const numeral = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i;
function term(s) {
  if (numeral.test(s)) return Number(s);
  const pi = s.match(/^([+-]?)(?:(\d+\.?\d*|\.\d+)\*?)?(?:pi|π)$/i);
  if (pi)
    return (
      (pi[1] === "-" ? -1 : 1) *
      (pi[2] === undefined ? 1 : Number(pi[2])) *
      Math.PI
    );
  return NaN;
}
/** A finite whitelist, not an expression evaluator. */
export function parseParameter(input) {
  const parts = input.replace(/\s/g, "").split("/");
  if (parts.length === 1) return term(parts[0]);
  if (parts.length === 2) {
    const a = term(parts[0]),
      b = term(parts[1]);
    return b === 0 ? NaN : a / b;
  }
  return NaN;
}
/** Decimal ranges must retain irrational endpoints rather than snap them to a decimal grid. */
export function parameterKeyValue(key, value, min, max, step) {
  if (key === "Home") return min;
  if (key === "End") return max;
  const direction = {
    ArrowRight: 1,
    ArrowUp: 1,
    ArrowLeft: -1,
    ArrowDown: -1,
    PageUp: 10,
    PageDown: -10,
  }[key];
  return direction === undefined
    ? null
    : Math.max(
        min,
        Math.min(max, Number((value + direction * step).toPrecision(14))),
      );
}
