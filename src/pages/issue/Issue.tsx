import { useParams } from "react-router-dom";
import useBoundStore from "@/store/store";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IconSVG } from "@/components/icon-svg";
import { IssueStatus } from "@/components/issues/issue-status";
import { IssuePriority } from "@/components/issues/issue-priority";
import { IssueTitle } from "@/components/issues/issue-title";
import { printDate } from "@/utils/helpers";

export const Issue = () => {
  const { projectId } = useParams();

  // TODO: Redirect if there is no projectId

  const projectName = useBoundStore((state) => state.projectName);

  const breadcrumbs: string[] = ["Projects", projectName, "Issues", projectId!];

  const {
    createdAt,
    // description,
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
        <div className="flex flex-row uppercase font-semibold text-textMedium self-center">
          <IconSVG icon={type} classname="h-6 w-6 mr-1" /> {type} - {id}
        </div>
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
      <div className="grid grid-cols-2 space-x-2">
        <div>
          <IssueTitle id={id} title={title} />
          <div>Description</div>
          <div>Comments</div>
        </div>
        <div className="flex flex-col">
          <IssueStatus issueStatus={status} id={id} />
          <div>Reporter: {reporterId}</div>
          <div>Assignees: Asignados</div>
          <IssuePriority issuePriority={priority} id={id} />
          <div className="mt-3 pt-3 leading-loose border-t border-borderLightest text-textMedium text-13">
            <div>Created: {printDate(createdAt)}</div>
            <div>Updated: {printDate(updatedAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
