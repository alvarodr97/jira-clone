import { IssuePriorityEnum, IssuePriorityColors } from "@/types/issue";

interface IssuesPriorityI {
  priority: IssuePriorityEnum;
  icon: "Arrow-Down" | "Arrow-Up";
  color: string;
}

export const ISSUES_PRIORITY: IssuesPriorityI[] = [
  {
    priority: IssuePriorityEnum.HIGHEST,
    icon: "Arrow-Up",
    color: IssuePriorityColors["Highest"],
  },
  {
    priority: IssuePriorityEnum.HIGH,
    icon: "Arrow-Up",
    color: IssuePriorityColors["High"],
  },
  {
    priority: IssuePriorityEnum.MEDIUM,
    icon: "Arrow-Up",
    color: IssuePriorityColors["Medium"],
  },
  {
    priority: IssuePriorityEnum.LOW,
    icon: "Arrow-Down",
    color: IssuePriorityColors["Low"],
  },
  {
    priority: IssuePriorityEnum.LOWEST,
    icon: "Arrow-Down",
    color: IssuePriorityColors["Lowest"],
  },
];
