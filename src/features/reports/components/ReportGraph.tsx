import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IssueI } from "@/types/issue";
import { getTotalIssuesCount } from "../utils/reports";

interface Props {
  issues: IssueI[];
  reportKey: keyof IssueI;
}

export const ReportGraph = ({ issues, reportKey }: Props) => {
  const chartData = getTotalIssuesCount(issues, reportKey);

  return (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <XAxis dataKey="name" stroke="#0052CC" />
        <YAxis domain={[0, chartData.length]} />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar barSize={24} dataKey="count" fill="#0052CC" />
      </BarChart>
    </ResponsiveContainer>
  );
};
