import { SearchIssue } from "./search-issue";
import { AddIssue } from "./add-issue";
import { UserIcon } from "./user-icon";
import { AboutIcon } from "./about-icon";

export const LeftSidebar = () => {
  return (
    <div className="h-screen flex flex-col w-16 py-5 justify-between items-center bg-sidebar">
      {/* Top Icons */}
      <div className="flex flex-col gap-y-4">
        <SearchIssue />
        <AddIssue />
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-y-4">
        <UserIcon />
        <AboutIcon />
      </div>
    </div>
  );
};
