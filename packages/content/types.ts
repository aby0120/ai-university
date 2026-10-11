export type VisualKind =
  | "graph"
  | "transform"
  | "limit"
  | "epsilon"
  | "derivative"
  | "chain"
  | "related"
  | "linearization"
  | "mvt"
  | "optimization"
  | "newton"
  | "antiderivative"
  | "riemann"
  | "signed-area"
  | "accumulation"
  | "substitution"
  | "area-between"
  | "disk"
  | "shell"
  | "arc";
export interface Exercise {
  id: string;
  problem: string;
  answer: string;
  solution: string[];
  hint: string;
  numericAnswer?: number;
  difficulty: number;
  misconceptionTags: string[];
}
export interface Lesson {
  id: string;
  chapterId: string;
  number: string;
  title: string;
  subtitle: string;
  concept: string;
  intuition: string;
  objectives: string[];
  learningCheck: {
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
  };
  body: { title: string; text: string }[];
  formalDefinition: { text: string; latex: string; conditions: string[] };
  derivation: { text: string; latex: string | null }[];
  interactiveVisual: {
    kind: VisualKind;
    function: string;
    a?: number;
    caption: string;
    prediction: string;
  };
  workedExamples: {
    title: string;
    problem: string;
    steps: string[];
    answer: string;
  }[];
  commonMistakes: { id: string; claim: string; correction: string }[];
  practice: Exercise[];
  prerequisites: string[];
  difficulty: number;
  misconceptionTags: string[];
  provenance: {
    author: string;
    version: string;
    status: string;
    humanReviewed: boolean;
  };
  sources: string[];
}
