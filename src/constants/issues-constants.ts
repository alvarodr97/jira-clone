import { IssueType, IssueStatus } from "@/types/project";

export const ISSUES_TYPES: IssueType[] = ["Bug", "Task", "Story"];

export const ISSUES_STATUS: Record<IssueStatus, string> = {
  [IssueStatus.BACKLOG]: "Backlog",
  [IssueStatus.SELECTED]: "Selected for Development",
  [IssueStatus.IN_PROGRESS]: "In progress",
  [IssueStatus.DONE]: "Done",
};

export const ISSUES_PRIORITY = ["Lowest", "Low", "Medium", "High", "Highest"];
