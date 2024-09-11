import { IssueStatusEnum, IssueTypeEnum, IssuePriorityEnum } from "@/types/issue";
import { ProjectCategoryEnum } from "@/types/project";

export const validateCategory = (category: string): ProjectCategoryEnum => {
  switch (category) {
    case "Software":
      return ProjectCategoryEnum.SOFTWARE;
    case "Marketing":
      return ProjectCategoryEnum.MARKETING;
    case "Business":
      return ProjectCategoryEnum.BUSINESS;
    default:
      throw new Error(`Invalid issue type: ${category}`);
  }
};

export const validateIssueType = (type: string): IssueTypeEnum => {
  switch (type) {
    case "Story":
      return IssueTypeEnum.STORY;
    case "Task":
      return IssueTypeEnum.TASK;
    case "Bug":
      return IssueTypeEnum.BUG;
    default:
      throw new Error(`Invalid issue type: ${type}`);
  }
};

export function validateIssueStatus(status: string): IssueStatusEnum {
  switch (status) {
    case "Backlog":
      return IssueStatusEnum.BACKLOG;
    case "Selected":
      return IssueStatusEnum.SELECTED;
    case "InProgress":
      return IssueStatusEnum.IN_PROGRESS;
    case "Done":
      return IssueStatusEnum.DONE;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
}

export function validateIssuePriority(status: string): IssuePriorityEnum {
  switch (status) {
    case "Lowest":
      return IssuePriorityEnum.LOWEST;
    case "Low":
      return IssuePriorityEnum.LOW;
    case "Medium":
      return IssuePriorityEnum.MEDIUM;
    case "High":
      return IssuePriorityEnum.HIGH;
    case "Highest":
      return IssuePriorityEnum.HIGHEST;
    default:
      throw new Error(`Unknown priority: ${status}`);
  }
}
