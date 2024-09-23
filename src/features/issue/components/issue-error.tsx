import { Link, useParams } from "react-router-dom";

export const IssueError = () => {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col w-full h-full py-8 pl-8 pr-6 space-y-6">
      <h1>
        Issue #<span className="font-bold">{projectId}</span> not found.
      </h1>
      <p>
        Go back to{" "}
        <Link
          to="/project/board"
          className="font-bold text-blue-700 hover:underline"
        >
          Board
        </Link>
        .
      </p>
    </div>
  );
};
