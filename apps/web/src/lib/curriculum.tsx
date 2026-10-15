import { createContext, useContext } from "react";
import { collections, type Collection } from "../../../../packages/content";
export const Curriculum = createContext<Collection>(collections[0]);
export const useCurriculum = () => useContext(Curriculum);
