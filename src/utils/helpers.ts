import { IssueStatus, IssueType, IssuePriority } from "@/types/project";

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

export function validateIssuePriority(status: string): IssuePriority {
  switch (status) {
    case "Lowest":
      return IssuePriority.LOWEST;
    case "Low":
      return IssuePriority.LOW;
    case "Medium":
      return IssuePriority.MEDIUM;
    case "High":
      return IssuePriority.HIGH;
    case "Highest":
      return IssuePriority.HIGHEST;
    default:
      throw new Error(`Unknown priority: ${status}`);
  }
}
