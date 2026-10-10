import data from "../../../../packages/content/library.json";

export type MathArea = (typeof data.areas)[number];
type VolumeInfo = {
  id: string;
  areaId: string;
  title: string;
  englishTitle: string;
  coverTitle: string[];
  tagline: string;
  description: string;
  audience: string;
  scope: string;
};
export type PublishedVolume = VolumeInfo & {
  status: "published";
  route: string;
  coverFormula: string;
  stats: {
    chapters: number;
    lessons: number;
    examples: number;
    exercises: number;
  };
};
export type PlannedVolume = VolumeInfo & { status: "planned" };
export type Volume = PublishedVolume | PlannedVolume;
export const mathAreas = data.areas;
export const volumes = data.volumes as Volume[];
export const publishedVolumes = volumes.filter(
  (v): v is PublishedVolume => v.status === "published",
);
export const firstVolume = publishedVolumes.find((v) => v.id === "calculus-1")!;
export const areaFor = (id: string) => mathAreas.find((a) => a.id === id)!;
