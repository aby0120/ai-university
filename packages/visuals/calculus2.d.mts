export interface Control {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
}
export interface Frame {
  equalAspect: boolean;
  range: number[];
  lines: { label: string; points: number[][]; color: string; dash: boolean }[];
  dots: number[][];
  area: number[][] | null;
  stats: { label: string; value: string }[];
  formula: string;
  axes: string[];
  note: string;
  field: number[][];
}
export function familyFor(id: string): string;
export function calculus2Controls(id: string): Control[];
export function calculus2Bounds(id: string): Record<string, number[]>;
export function calculus2Defaults(id: string): Record<string, number>;
export function calculus2Frame(
  id: string,
  params: Record<string, number>,
  curve?: string,
): Frame;
export function calculus2Playback(
  id: string,
  seed: Record<string, number>,
  elapsed: number,
): { key: string; value: number; done: boolean };
export function assertParameters(id: string, p: Record<string, number>): void;
export function factorial(n: number): number;
export function simpson(
  f: (x: number) => number,
  a: number,
  b: number,
  n: number,
): number;
export function powerIntegral(a: number, b: number, p: number): number;
export function taylorValue(kind: string, x: number, m: number): number;
export function odeModel(family: string): {
  f: (x: number, y: number) => number;
  exact: (x: number) => number;
  y0: number;
  end: number;
  range: number[];
  label: string;
};
export function eulerPath(
  f: (x: number, y: number) => number,
  y0: number,
  end: number,
  n: number,
): number[][];
