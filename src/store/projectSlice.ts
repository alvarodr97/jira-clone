import { StateCreator } from "zustand";
import { toast } from "sonner";
import { ProjectCategoryEnum, ProjectTypeI } from "@/types/project";
import { IssueI, IssueStatusEnum } from "@/types/issue";
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
  filterSearch: (query: string) => IssueI[];
  filterById: (id: string) => IssueI;
  reduceByStatus: () => Record<IssueStatusEnum, IssueI[]>;
  getUserUrl: (id: string) => string;
  addIssue: (issue: IssueI) => void;
  updateIssue: (id: string, data: Partial<IssueI>) => void;
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

  filterSearch: (query: string) => {
    return get().issues.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.id.includes(query)
    );
  },

  filterById: (id: string) => {
    const issue = get().issues.find((item) => item.id === id);
    if (!issue) {
      throw new Error(`Issue with id ${id} not found`);
    }
    return issue;
  },

  reduceByStatus: () => {
    const statusOrder = {
      [IssueStatusEnum.BACKLOG]: 1,
      [IssueStatusEnum.SELECTED]: 2,
      [IssueStatusEnum.IN_PROGRESS]: 3,
      [IssueStatusEnum.DONE]: 4,
    };

    const sortedIssues = [...get().issues].sort((a, b) => {
      return statusOrder[a.status] - statusOrder[b.status];
    });

    return sortedIssues.reduce((acc, issue) => {
      const { status } = issue;

      if (!acc[status]) {
        acc[status] = [];
      }

      acc[status].push(issue);
      return acc;
    }, {} as Record<IssueStatusEnum, IssueI[]>);
  },

  getUserUrl: (id: string) => {
    return get().users.find((user) => user.id === id)!.avatarUrl;
  },

  addIssue: (issue: IssueI) => {
    set((state) => ({
      issues: [...state.issues, issue],
    }));
  },

  updateIssue: (id: string, data: Partial<IssueI>) => {
    const updatedIssue = new Date() as unknown as string;
    set((state) => ({
      issues: state.issues.map((issue) =>
        issue.id === id ? { ...issue, ...data, updatedAt: updatedIssue } : issue
      ),
    }));
    toast.success("Changes saved!");
  },
});

export default createProjectSlice;
