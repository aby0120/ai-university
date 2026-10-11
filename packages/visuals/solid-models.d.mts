export type SolidModel = "disk" | "washer" | "shell" | "surface";
export const solidModels: Record<
  SolidModel,
  {
    axis: "x" | "y";
    outer: (t: number) => number;
    inner: (t: number) => number;
    closed: boolean;
    volume?: number;
  }
>;
export function revolutionPoint(
  axis: "x" | "y",
  t: number,
  r: number,
  angle: number,
): number[];
export function revolutionGeometry(
  modelId: SolidModel,
  degrees?: number,
  resolution?: number,
  start?: number,
  end?: number,
): Float32Array;
export function solidReadout(
  modelId: SolidModel,
  position: number,
  degrees?: number,
): {
  radius: number;
  innerRadius: number;
  density: number;
  volume: number | null;
};
