import {
  IssuePriorityEnum,
  IssueTypeEnum,
  IssueStatusEnum,
  IssueI,
} from "@/types/issue";

type IssueEnums = IssuePriorityEnum | IssueTypeEnum | IssueStatusEnum;

export function getTotalIssuesCount(issues: IssueI[], dataKey: keyof IssueI) {
  const enumsMap = {
    priority: IssuePriorityEnum,
    type: IssueTypeEnum,
    status: IssueStatusEnum,
  };

  const enumValues = Object.values(
    enumsMap[dataKey as keyof typeof enumsMap] || {}
  );

  // Count
  const dataCount = issues.reduce((acc, item) => {
    const key = item[dataKey];
    if (typeof key === "string" || typeof key === "number") {
      acc[key] = (acc[key] || 0) + 1;
    }
    return acc;
  }, {} as Record<string | number, number>);

  // Add categories with no count
  enumValues.forEach((enumValue) => {
    if (!(enumValue in dataCount)) {
      dataCount[enumValue] = 0;
    }
  });

  const chartData = Object.keys(dataCount).map((key) => ({
    name: key,
    count: dataCount[key as keyof typeof dataCount],
  }));

  // Order
  return chartData.sort((a, b) => {
    const enumOrder = enumValues as IssueEnums[];
    return (
      enumOrder.indexOf(a.name as IssueEnums) -
      enumOrder.indexOf(b.name as IssueEnums)
    );
  });
}
