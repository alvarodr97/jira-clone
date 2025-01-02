import { Breadcrumbs } from "@/components/breadcrumbs";
import useBoundStore from "@/store/store";
import { BoardFilter } from "@/features/board/components/BoardFilter";
import { BoardDnd } from "@/features/board/components/BoardDnd";

export const BoardRoute = () => {
  const projectName = useBoundStore((state) => state.projectName);
  const breadcrumbs: string[] = ["Projects", projectName, "Kanban Board"];

  return (
    <div className="flex flex-col w-full h-screen py-8 pl-8 pr-6">
      <nav aria-label="Breadcrumbs">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </nav>
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
      <BoardDnd />
    </div>
  );
};
