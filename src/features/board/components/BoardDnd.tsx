import { reduceByStatus } from "@/features/issue/utils/issue-utils";
import Board from "../dnd/board/Board";
import { IssueI } from "@/types/issue";

export const BoardDnd = ({ issues }: { issues: IssueI[] }) => {
  const issuesReduced = reduceByStatus(issues);

  return (
    <div>
      <Board initial={issuesReduced} withScrollableColumns />
    </div>
  );
};
