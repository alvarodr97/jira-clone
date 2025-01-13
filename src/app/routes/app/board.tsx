import { Breadcrumbs } from "@/components/breadcrumbs";
import useBoundStore from "@/store/store";
import { BoardFilter } from "@/features/board/components/BoardFilter";
import { BoardDnd } from "@/features/board/components/BoardDnd";
import { Button } from "@/components/ui/button";
import { QueryClient } from "@tanstack/react-query";
import {
  getIssuesQueryOptions,
  useIssues,
} from "@/features/issue/api/get-issues";

export const boardLoader = (queryClient: QueryClient) => async () => {
  const query = getIssuesQueryOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const BoardRoute = () => {
  const projectName = useBoundStore((state) => state.projectName);
  const breadcrumbs: string[] = ["Projects", projectName, "Kanban Board"];

  const query = useIssues();

  // TODO:
  {
    (query.isLoading || query.isFetching) && <div>Loading reports...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error?.message}</div>;
  }

  const issues = query.data;

  if (!issues) return null;

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
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alvaro-diez-rey-983a281b1/"
          >
            <Button variant="secondary" className="gap-x-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </span>
              <span>LinkedIn</span>
            </Button>
          </a>

          <a target="_blank" href="https://github.com/alvarodr97/jira-clone">
            <Button variant="secondary" className="gap-x-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </span>
              <span>Source Code</span>
            </Button>
          </a>
        </div>
      </header>

      {/* Board filter */}
      <BoardFilter />

      {/* Board drag and drop */}
      {/* TODO: Actualizar listPosition en la store. */}
      <BoardDnd issues={issues} />
    </div>
  );
};
