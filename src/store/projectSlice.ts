import { ProjectType } from "@/types/project";
import { StateCreator } from "zustand";
import project from "../assets/data/project.json";
import { validateIssueType } from "@/utils/helpers";

export interface ProjectSliceType extends ProjectType {
  changeData: (values: {
    url: string;
    category: string;
    projectName: string;
    description?: string | undefined;
  }) => void;
}

const createProjectSlice: StateCreator<ProjectSliceType> = (set) => ({
  id: project.id,
  projectName: project.name,
  url: project.url,
  description: project.description,
  category: project.category,
  createdAt: project.createdAt,
  updatedAt: project.updatedAt,
  users: project.users,
  issues: project.issues.map((issue) => ({
    ...issue,
    type: validateIssueType(issue.type),
  })),

  changeData: async (values: {
    url: string;
    category: string;
    projectName: string;
    description?: string | undefined;
  }) => {
    set((state) => ({ ...state, ...values }));
  },
});

export default createProjectSlice;
