import { IssueType } from "@/types/project";

export const validateIssueType = (type: string): IssueType => {
  if (type === "Bug" || type === "Story" || type === "Task") {
    return type;
  }
  throw new Error(`Invalid issue type: ${type}`);
};
