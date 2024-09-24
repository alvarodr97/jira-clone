import { Link } from "react-router-dom";
import { IconSVG } from "@/components/icon-svg";
import { IssueI } from "@/types/issue";

interface Props {
  issue: IssueI;
}

export const SearchIssueComponentBox = ({ issue }: Props) => {
  return (
    <Link to={`/project/issue/${issue.id}`}>
      <div className="flex flex-row hover:bg-slate-200 p-2 gap-x-3">
        {/* Image */}
        <div className="justify-center self-center">
          <IconSVG classname="h-[24px] w-[24px]" icon={issue.type} />
        </div>

        {/* Issue */}
        <div className="flex flex-col w-full">
          <span className="text-textDark text-15">{issue.title}</span>
          <span className="uppercase text-xs text-textMedium ">{issue.type} - {issue.id}</span>
        </div>
      </div>
    </Link>
  );
};
