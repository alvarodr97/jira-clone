export interface ProjectType {
  id: string;
  projectName: string;
  url: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  users: User[];
  issues: Issue[];
}

export interface Issue {
  createdAt: string;
  description: string;
  id: string;
  priority: IssuePriority;
  reporterId: string;
  status: IssueStatus;
  title: string;
  type: IssueType;
  updatedAt: string;
  userIds: string[];
  listPosition: number;
}

export type IssueType = "Bug" | "Story" | "Task";

export enum IssueStatus {
  BACKLOG = "Backlog",
  SELECTED = "Selected",
  IN_PROGRESS = "In Progress",
  DONE = "Done",
}

export enum IssuePriority {
  LOWEST = "Lowest",
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
  HIGHEST = "Highest",
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  projectId: string;
}
