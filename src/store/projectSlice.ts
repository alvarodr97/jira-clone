import { Issue, ProjectType } from "@/types/project";
import { StateCreator } from "zustand";
import project from "../assets/data/project.json";
import { validateIssueStatus, validateIssueType } from "@/utils/helpers";

export interface ProjectSliceType extends ProjectType {
  setProjectData: (values: {
    url: string;
    category: string;
    projectName: string;
    description?: string | undefined;
  }) => void;
  filterByTitle: (query: string) => Issue[];
  filterById: (id: string) => Issue;
  updateIssue: (id: string, data: Partial<Issue>) => void;
}

const createProjectSlice: StateCreator<ProjectSliceType> = (set, get) => ({
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
    status: validateIssueStatus(issue.status),
    type: validateIssueType(issue.type),
  })),

  setProjectData: async (values: {
    url: string;
    category: string;
    projectName: string;
    description?: string | undefined;
  }) => {
    set((state) => ({ ...state, ...values }));
  },

  filterByTitle: (query: string) => {
    return get().issues.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  },

  filterById: (id: string) => {
    const issue = get().issues.find((item) => item.id === id);
    if (!issue) {
      throw new Error(`Issue with id ${id} not found`);
    }
    return issue;
  },

  updateIssue: (id: string, data: Partial<Issue>) => {
    set((state) => ({
      issues: state.issues.map((issue) =>
        issue.id === id ? { ...issue, ...data } : issue
      ),
    }));
  },
});

export default createProjectSlice;
