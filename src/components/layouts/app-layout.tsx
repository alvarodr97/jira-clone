import { useEffect, useState } from "react";
import { Location, useNavigation } from "react-router-dom";
import { LeftSidebar } from "../navigation/left-sidebar/left-sidebar";
import { Sidebar } from "../navigation/sidebar/sidebar";

interface AppLayoutProps {
  children: JSX.Element;
}

const Progress = ({
  state,
  location,
}: {
  state: "idle" | "loading" | "submitting";
  location: Location<any> | undefined;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
  }, [location?.pathname]);

  useEffect(() => {
    if (state === "loading") {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            return 100;
          }
          const newProgress = oldProgress + 10;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 300);

      return () => {
        clearInterval(timer);
      };
    }
  }, [state]);

  if (state !== "loading") {
    return null;
  }

  return (
    <div
      className="fixed pl-[19rem] top-0 h-1.5 bg-blue-500 transition-all duration-200 ease-in-out z-50"
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { state, location } = useNavigation();

  return (
    <div className="flex flex-col min-h-screen relative">
      <aside className="fixed flex flex-row inset-y-0 left-0 z-10 border-r border-r-sidebarHr">
        <LeftSidebar />
        <Sidebar />
      </aside>

      <div className="flex flex-col pl-[19rem]">
        <Progress state={state} location={location} />
        <main className="relative grid flex-1 items-start z-30">
          {children}
        </main>
      </div>
    </div>
  );
};
