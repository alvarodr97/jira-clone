import { SearchIssue } from "./components/SearchIssue";
import { AddIssue } from "./components/AddIssue";
import { UserIcon } from "./components/UserIcon";
import { AboutIcon } from "./components/AboutIcon";

export const LeftSidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-sidebar">
      {/* Top Icons */}
      <div className="p-4 flex flex-col gap-y-4">
        <SearchIssue />
        <AddIssue />
      </div>

      {/* Bottom Icons */}
      <div className="p-4 flex flex-col gap-y-2">
        <UserIcon />
        <AboutIcon />
      </div>
    </div>
  );
};
