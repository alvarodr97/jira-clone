import { IssueType, IssueStatus, IssuePriority } from "@/types/project";

export const ISSUES_TYPES: IssueType[] = ["Bug", "Task", "Story"];

export const ISSUES_STATUS: Record<IssueStatus, string> = {
  [IssueStatus.BACKLOG]: "Backlog",
  [IssueStatus.SELECTED]: "Selected for Development",
  [IssueStatus.IN_PROGRESS]: "In progress",
  [IssueStatus.DONE]: "Done",
};

const IssuePriorityColors = {
  [IssuePriority.HIGHEST]: "#CD1317",
  [IssuePriority.HIGH]: "#E9494A",
  [IssuePriority.MEDIUM]: "#E97F33",
  [IssuePriority.LOW]: "#2D8738",
  [IssuePriority.LOWEST]: "#57A55A",
};

interface IssuesPriorityI {
  priority: IssuePriority;
  icon: "Arrow-Down" | "Arrow-Up";
  color: string;
}

export const ISSUES_PRIORITY: IssuesPriorityI[] = [
  {
    priority: IssuePriority.HIGHEST,
    icon: "Arrow-Up",
    color: IssuePriorityColors["Highest"],
  },
  {
    priority: IssuePriority.HIGH,
    icon: "Arrow-Up",
    color: IssuePriorityColors["High"],
  },
  {
    priority: IssuePriority.MEDIUM,
    icon: "Arrow-Up",
    color: IssuePriorityColors["Medium"],
  },
  {
    priority: IssuePriority.LOW,
    icon: "Arrow-Down",
    color: IssuePriorityColors["Low"],
  },
  {
    priority: IssuePriority.LOWEST,
    icon: "Arrow-Down",
    color: IssuePriorityColors["Lowest"],
  },
];
