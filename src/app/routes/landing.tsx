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
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
          <span className="block">Jira Clone</span>
        </h2>
        <img src={jira} alt="jira" className="h-64 w-64 mx-auto" />
        <p className="mt-8">A simplified Jira clone built with React</p>
        <div className="mt-8 flex justify-center gap-x-6">
          <Button onClick={handleStart} className="gap-x-2">
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
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M10 12h4v4h-4z"></path>
              </svg>
            </span>
            <span>Get started</span>
          </Button>
          <a target="_blank" href="https://github.com/alvarodr97/jira-clone">
            <Button variant="outline" className="gap-x-2">
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
              <span>Github Repo</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
