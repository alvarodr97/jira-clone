import { IssueType, IssueStatus } from "@/types/project";

export const ISSUES_TYPES: IssueType[] = ["Bug", "Task", "Story"];
export const ISSUES_STATUS: IssueStatus[] = [
  "Selected for Development",
  "Backlog",
  "In progress",
  "Done",
];
export const ISSUES_PRIORITY = ["Lowest", "Low", "Medium", "High", "Highest"];
