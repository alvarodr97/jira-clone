import { SearchIssue } from "./SearchIssue";
import { AddIssue } from "./AddIssue";
import { UserIcon } from "./UserIcon";
import { AboutIcon } from "./AboutIcon";

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
