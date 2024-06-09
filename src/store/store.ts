import { create } from "zustand";
import createProjectSlice, { ProjectSliceType } from "./projectSlice";
import { devtools } from "zustand/middleware";

type SharedState = ProjectSliceType;

const useBoundStore = create<SharedState>()(
  devtools((...a) => ({
    ...createProjectSlice(...a),
  }))
);

export default useBoundStore;
