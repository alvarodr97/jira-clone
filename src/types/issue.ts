export enum IssueTypeEnum {
  STORY = "Story",
  TASK = "Task",
  BUG = "Bug",
}

export enum IssueStatusEnum {
  BACKLOG = "Backlog",
  SELECTED = "Selected",
  IN_PROGRESS = "In Progress",
  DONE = "Done",
}

export const IssueStatusDisplay = {
  [IssueStatusEnum.BACKLOG]: "Backlog",
  [IssueStatusEnum.SELECTED]: "Selected for Development",
  [IssueStatusEnum.IN_PROGRESS]: "In progress",
  [IssueStatusEnum.DONE]: "Done",
};

export enum IssuePriorityEnum {
  LOWEST = "Lowest",
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
  HIGHEST = "Highest",
}

export const IssuePriorityColors = {
  [IssuePriorityEnum.HIGHEST]: "#CD1317",
  [IssuePriorityEnum.HIGH]: "#E9494A",
  [IssuePriorityEnum.MEDIUM]: "#E97F33",
  [IssuePriorityEnum.LOW]: "#2D8738",
  [IssuePriorityEnum.LOWEST]: "#57A55A",
};

export interface IssueI {
  createdAt: string;
  description: string;
  id: string;
  priority: IssuePriorityEnum;
  reporterId: string;
  status: IssueStatusEnum;
  title: string;
  type: IssueTypeEnum;
  updatedAt: string;
  userIds: string[];
  listPosition: number;
}
