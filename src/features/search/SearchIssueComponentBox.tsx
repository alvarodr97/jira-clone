import { IconSVG } from "@/components/icon-svg";
import { Issue } from "@/types/project";

interface Props {
  issue: Issue;
}

export const SearchIssueComponentBox = ({ issue }: Props) => {
  return (
    <div className="flex flex-row hover:bg-slate-200 p-2 gap-x-3">
      {/* Image */}
      <div className="justify-center self-center">
        <IconSVG classname="h-[24px] w-[24px]" icon={issue.type} />
      </div>

      {/* Issue */}
      <div className="flex flex-col w-full">
        <span className="text-base">{issue.title}</span>
        <span className="text-xs">STORY - {issue.id}</span>
      </div>
    </div>
  );
};
