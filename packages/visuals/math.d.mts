export interface FunctionSpec {
  label: string;
  f: (x: number) => number;
  d: (x: number) => number;
  range: number[];
  hole?: number[];
  breaks?: number[];
}
export const functions: Record<string, FunctionSpec>;
export function secant(f: (x: number) => number, a: number, h: number): number;
export function integrate(
  f: (x: number) => number,
  a: number,
  b: number,
  n?: number,
  method?: string,
): number;
export function newton(
  f: (x: number) => number,
  d: (x: number) => number,
  x: number,
  steps?: number,
): {
  rows: { x: number; y: number; s: number; next: number }[];
  error: string | null;
};
export function arcLength(
  f: (x: number) => number,
  a: number,
  b: number,
  n: number,
): number;
export function epsilonDelta(epsilon: number): number;
