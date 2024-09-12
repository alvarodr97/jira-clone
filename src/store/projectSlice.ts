import { StateCreator } from "zustand";
import { ProjectCategoryEnum, ProjectTypeI } from "@/types/project";
import { IssueI } from "@/types/issue";
import project from "../assets/data/project.json";
import {
  validateCategory,
  validateIssuePriority,
  validateIssueStatus,
  validateIssueType,
} from "@/utils/helpers";

export interface ProjectSliceType extends ProjectTypeI {
  setProjectData: (values: {
    url: string;
    category: ProjectCategoryEnum;
    projectName: string;
    description?: string | undefined;
  }) => void;
  filterByTitle: (query: string) => IssueI[];
  filterById: (id: string) => IssueI;
  updateIssue: (id: string, data: Partial<IssueI>) => void;
  addIssue: (issue: IssueI) => void;
}

const createProjectSlice: StateCreator<ProjectSliceType> = (set, get) => ({
  id: project.id,
  projectName: project.name,
  url: project.url,
  description: project.description,
  category: validateCategory(project.category),
  createdAt: project.createdAt,
  updatedAt: project.updatedAt,
  users: project.users,
  issues: project.issues.map((issue) => ({
    ...issue,
    status: validateIssueStatus(issue.status),
    type: validateIssueType(issue.type),
    priority: validateIssuePriority(issue.priority),
  })),

  setProjectData: async (values: {
    url: string;
    category: ProjectCategoryEnum;
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

  updateIssue: (id: string, data: Partial<IssueI>) => {
    set((state) => ({
      issues: state.issues.map((issue) =>
        issue.id === id ? { ...issue, ...data } : issue
      ),
    }));
  },

  addIssue: (issue: IssueI) => {
    set((state) => ({
      issues: [...state.issues, issue],
    }));
  },
});

export default createProjectSlice;
