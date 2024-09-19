import useBoundStore from "@/store/store";
import { ProjectLayout } from "@/pages/ProjectLayout";
import { ReportGraph } from "./ReportGraph";

export const Reports = () => {
  const issues = useBoundStore((state) => state.issues);

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
