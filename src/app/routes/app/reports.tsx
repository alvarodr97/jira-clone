import {
  getIssuesQueryOptions,
  useIssues,
} from "@/features/issue/api/get-issues";
import { ProjectLayout } from "@/components/layouts/project-layout";
import { ReportGraph } from "@/features/reports/components/report-graph";
import { QueryClient } from "@tanstack/react-query";

export const reportsLoader = (queryClient: QueryClient) => async () => {
  const query = getIssuesQueryOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const ReportsRoute = () => {
  const query = useIssues();

  // TODO: Make it nicer

  query.isLoading && <div>Loading reports...</div>;

  if (query.isError || !query.data) {
    return <div>Error: {query.error?.message}</div>;
  }

  const issues = query.data;

  return (
    <ProjectLayout pageTitle="Reports">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div
          aria-labelledby="priority-report"
          className="border text-center space-y-3 p-2"
        >
          <h2 id="priority-report">Priority</h2>
          <ReportGraph issues={issues} reportKey="priority" />
        </div>

        <div
          aria-labelledby="type-report"
          className="border text-center space-y-3 p-2"
        >
          <h2 id="type-report">Type</h2>
          <ReportGraph issues={issues} reportKey="type" />
        </div>

        <div
          aria-labelledby="status-report"
          className="border text-center space-y-3 p-2"
        >
          <h2 id="status-report">Status</h2>
          <ReportGraph issues={issues} reportKey="status" />
        </div>
      </div>
    </ProjectLayout>
  );
};
