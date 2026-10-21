export interface Control3 {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
}
export interface Frame3 {
  dimension?: number;
  matrix?: string;
  axisLabels?: string[];
  lines: { label: string; points: number[][]; color: string; dash: boolean }[];
  polygons: { points: number[][]; color: string; opacity: number }[];
  arrows: { label: string; at: number[]; vector: number[]; color: string }[];
  dots: { at: number[]; label: string; color: string }[];
  stats: { label: string; value: string }[];
  formula: string;
  note: string;
  extent: number;
  focus: number[];
}
export function calculus3Controls(id: string): Control3[];
export function calculus3Defaults(id: string): Record<string, number>;
export function calculus3Bounds(id: string): Record<string, number[]>;
export function calculus3Frame(
  id: string,
  params?: Record<string, number>,
): Frame3;
export function calculus3Playback(
  id: string,
  seed: Record<string, number>,
  elapsed: number,
): { key: string; value: number; done: boolean };
export function assertParameters3(id: string, p: Record<string, number>): void;
export function projectPoint(
  p: number[],
  yaw?: number,
  elevation?: number,
): number[];
export function add(a: number[], b: number[]): number[];
export function scale(a: number[], c: number): number[];
export function dot(a: number[], b: number[]): number;
export function cross(a: number[], b: number[]): number[];
export function norm(a: number[]): number;
export function midpoint2D(
  f: (x: number, y: number) => number,
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  n: number,
): number;
export function sphereFlux(radius: number, density?: number): number;
export function capVolume(c: number): number;
export function helixCurvature(radius: number, pitch: number): number;
export function sectorArea(r: number, dr: number, theta: number): number;
