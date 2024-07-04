import { IssueStatus, IssueType } from "@/types/project";

export const validateIssueType = (type: string): IssueType => {
  if (type === "Bug" || type === "Story" || type === "Task") {
    return type;
  }
  throw new Error(`Invalid issue type: ${type}`);
};

export function validateIssueStatus(status: string): IssueStatus {
  switch (status) {
    case "Backlog":
      return IssueStatus.BACKLOG;
    case "Selected":
      return IssueStatus.SELECTED;
    case "InProgress":
      return IssueStatus.IN_PROGRESS;
    case "Done":
      return IssueStatus.DONE;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
}
