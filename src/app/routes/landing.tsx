import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import jira from "@/assets/jira.png";

export const LandingRoute = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/project/board");
  };
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
          <span className="block">Jira Clone</span>
        </h2>
        <img src={jira} alt="jira" className="h-64 w-64 mx-auto" />
        <p className="mt-8">A simplified Jira clone built with React</p>
        <div className="mt-8 flex justify-center gap-x-6">
          <Button onClick={handleStart}>Get started</Button>
          <a target="_blank" href="https://github.com/alvarodr97/jira-clone">
            <Button variant="outline">Github Repo</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
