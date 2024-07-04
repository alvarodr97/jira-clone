import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IconSVG } from "@/components/icon-svg";
import { IssueStatus } from "@/components/issues/issue-status";
import useBoundStore from "@/store/store";

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
    // title,
    type,
    updatedAt,
  } = useBoundStore((state) => state.filterById(projectId!));

  // TODO: Error boundaries

  return (
    <div className="flex flex-col w-full h-full py-8 pl-8 pr-6">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <header className="flex justify-between mt-3 mb-6 font-bold">
        <div className="flex flex-row">
          <IconSVG icon={type} classname="h-6 w-6" /> {type} - {id}
        </div>
        <div className="flex flex-row">
          <a
            target="_blank"
            className="flex flex-row"
            href="https://github.com/alvarodr97/jira-clone/issues/new"
          >
            <IconSVG icon="Feedback" classname="h-6 w-6" />
            Give Feedback
          </a>
          <IconSVG icon="Trash" classname="h-6 w-6" />
        </div>
      </header>
      <div className="grid grid-cols-2">
        <div>
          <div>Description</div>
          <div>Comments</div>
        </div>
        <div className="flex flex-col">
          <IssueStatus issueStatus={status} />
          <div>Reporter: {reporterId}</div>
          <div>Assignees: Asignados</div>
          <div>Priority: {priority}</div>
          <div className="mt-3 pt-3 leading-loose border-t border-borderLightest text-textMedium text-13">
            <div>Created: {createdAt}</div>
            <div>Updated: {updatedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
