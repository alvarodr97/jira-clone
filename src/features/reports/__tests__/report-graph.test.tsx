import "@testing-library/jest-dom";
import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReportGraph } from "@/features/reports/components/report-graph";
import {
  IssueI,
  IssuePriorityEnum,
  IssueTypeEnum,
  IssueStatusEnum,
} from "@/types/issue";

const issues: IssueI[] = [
  {
    id: "1",
    priority: IssuePriorityEnum.HIGH,
    type: IssueTypeEnum.BUG,
    status: IssueStatusEnum.BACKLOG,
    updatedAt: "2024-01-01",
    createdAt: "",
    description: "",
    reporterId: "",
    title: "",
    userIds: [],
    listPosition: 0,
  },
  {
    id: "2",
    priority: IssuePriorityEnum.HIGHEST,
    type: IssueTypeEnum.STORY,
    status: IssueStatusEnum.DONE,
    updatedAt: "2024-01-02",
    createdAt: "",
    description: "",
    reporterId: "",
    title: "",
    userIds: [],
    listPosition: 0,
  },
  {
    id: "3",
    priority: IssuePriorityEnum.LOW,
    type: IssueTypeEnum.TASK,
    status: IssueStatusEnum.SELECTED,
    updatedAt: "2024-01-03",
    createdAt: "",
    description: "",
    reporterId: "",
    title: "",
    userIds: [],
    listPosition: 0,
  },
];

vi.mock("recharts", async () => {
  const OriginalModule = await vi.importActual<any>("recharts");
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe("ReportGraph component", () => {
  test("renders priority BarChart with the correct data", () => {
    render(<ReportGraph issues={issues} reportKey="priority" />);

    // Check for elements
    expect(
      screen.getByText(IssuePriorityEnum.HIGH, { selector: "tspan" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(IssuePriorityEnum.HIGHEST, { selector: "tspan" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(IssuePriorityEnum.LOW, { selector: "tspan" })
    ).toBeInTheDocument();

    // Ensure the chart renders bars
    expect(
      document.querySelectorAll(".recharts-bar-rectangle").length
    ).toBeGreaterThan(0);
  });

  test("renders type BarChart with the correct data", () => {
    render(<ReportGraph issues={issues} reportKey="type" />);

    // Check for elements
    expect(
      screen.getByText(IssueTypeEnum.BUG, { selector: "tspan" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(IssueTypeEnum.STORY, { selector: "tspan" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(IssueTypeEnum.TASK, { selector: "tspan" })
    ).toBeInTheDocument();

    // Ensure the chart renders bars
    expect(
      document.querySelectorAll(".recharts-bar-rectangle").length
    ).toBeGreaterThan(0);
  });

  test("renders status BarChart with the correct data", () => {
    render(<ReportGraph issues={issues} reportKey="status" />);

    // Check for elements
    expect(
      screen.getByText(IssueStatusEnum.BACKLOG, { selector: "tspan" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(IssueStatusEnum.DONE, { selector: "tspan" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(IssueStatusEnum.SELECTED, { selector: "tspan" })
    ).toBeInTheDocument();

    // Ensure the chart renders bars
    expect(
      document.querySelectorAll(".recharts-bar-rectangle").length
    ).toBeGreaterThan(0);
  });
});
