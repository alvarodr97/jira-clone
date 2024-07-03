import { IssueStatus, IssueType } from "@/types/project";

export const validateIssueType = (type: string): IssueType => {
  if (type === "Bug" || type === "Story" || type === "Task") {
    return type;
  }
  throw new Error(`Invalid issue type: ${type}`);
};

export const validateIssueStatus = (type: string): IssueStatus => {
  if (
    type === "Selected for Development" ||
    type === "Backlog" ||
    type === "In progress" ||
    type === "Done"
  ) {
    return type;
  }
  throw new Error(`Invalid issue type: ${type}`);
};
