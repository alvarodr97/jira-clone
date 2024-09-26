import useBoundStore from "@/store/store";
import Board from "../dnd/board/Board";

export const BoardDnd = () => {
  const reduceByStatus = useBoundStore((state) => state.reduceByStatus);
  const issues = reduceByStatus();

  return (
    <div>
      <Board initial={issues} withScrollableColumns />
    </div>
  );
};
