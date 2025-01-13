import { IssueStatusEnum, IssueI } from "@/types/issue";

export function reduceByStatus(issues: IssueI[]) {
  const statusOrder = {
    [IssueStatusEnum.BACKLOG]: 1,
    [IssueStatusEnum.SELECTED]: 2,
    [IssueStatusEnum.IN_PROGRESS]: 3,
    [IssueStatusEnum.DONE]: 4,
  };

  const sortedIssues: IssueI[] = issues.sort((a, b) => {
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return sortedIssues.reduce((acc, issue) => {
    const { status } = issue;

    if (!acc[status]) {
      acc[status] = [];
    }

    acc[status].push(issue);
    return acc;
  }, {} as Record<IssueStatusEnum, IssueI[]>);
}
