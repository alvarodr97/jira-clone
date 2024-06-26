import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BoardFilter } from "./components/BoardFilter";
import useBoundStore from "@/store/store";
// import { BoardDnd } from "./components/BoardDnd";

export const Board = () => {
  const projectName = useBoundStore((state) => state.projectName);
  const breadcrumbs: string[] = ["Projects", projectName, "Kanban Board"];

  return (
    <div className="flex flex-col w-full h-full py-8 pl-8 pr-6">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <header className="flex justify-between mt-3">
        {/* Title */}
        <div className="text-2xl font-medium">Kanban board</div>

        {/* Socials */}
        <div className="flex flex-row gap-x-4">
          {/* TODO: style socials */}
          <a>Github</a>
          <a>LinkedIn</a>
        </div>
      </header>

      {/* Board filter */}
      <BoardFilter />

      {/* Board drag and drop */}
      {/* <BoardDnd /> */}
    </div>
  );
};
