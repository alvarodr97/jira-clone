import { useParams } from "react-router-dom";
import useBoundStore from "@/store/store";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IconSVG } from "@/components/icon-svg";
import { IssueType } from "@/features/issue/components/issue-type";
import { IssueTitle } from "@/features/issue/components/issue-title";
import { IssueDescription } from "@/features/issue/components/issue-description";
import { IssueStatus } from "@/features/issue/components/issue-status";
import { IssueReporter } from "@/features/issue/components/issue-reporter";
import { IssuePriority } from "@/features/issue/components/issue-priority";
import { printDate } from "@/utils/helpers";

export const IssueRoute = () => {
  const { projectId } = useParams();

  // TODO: Redirect if there is no projectId

  const projectName = useBoundStore((state) => state.projectName);

  const breadcrumbs: string[] = ["Projects", projectName, "Issues", projectId!];

  const {
    createdAt,
    description,
    id,
    priority,
    reporterId,
    status,
    title,
    type,
    updatedAt,
  } = useBoundStore((state) => state.filterById(projectId!));

  // TODO: Error boundaries

  return (
    <div className="flex flex-col w-full h-full py-8 pl-8 pr-6">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <header className="flex justify-between mt-3 mb-2">
        <IssueType id={id} issueType={type} />
        <div className="flex flex-row space-x-4 text-sm">
          <a
            target="_blank"
            className="flex flex-row hover:bg-[#f4f5f7] p-1"
            href="https://github.com/alvarodr97/jira-clone/issues/new"
          >
            <IconSVG icon="Feedback" classname="h-6 w-6 mr-2" />
            Give Feedback
          </a>
          <IconSVG
            icon="Trash"
            classname="h-6 w-6 cursor-pointer hover:bg-[#f4f5f7]"
          />
        </div>
      </header>
      <div className="grid grid-cols-3 space-x-3">
        <div className="col-span-2">
          <IssueTitle id={id} title={title} />
          <IssueDescription id={id} issueDescription={description} />
          <div>Comments</div>
        </div>
        <div className="col-span-1 flex flex-col">
          <IssueStatus id={id} issueStatus={status} />
          <IssueReporter id={id} issueReporter={reporterId} />
          <div>Assignees: Asignados</div>
          <IssuePriority id={id} issuePriority={priority} />
          <div className="mt-3 pt-3 leading-loose border-t border-borderLightest text-textMedium text-13">
            <div>Created: {printDate(createdAt)}</div>
            <div>Updated: {printDate(updatedAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
