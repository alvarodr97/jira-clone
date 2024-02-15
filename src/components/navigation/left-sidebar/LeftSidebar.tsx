import { FileQuestion, User } from "lucide-react";
import { SearchIssue } from "./components/SearchIssue";
import { AddIssue } from "./components/AddIssue";

export const LeftSidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-sidebar">
      {/* Top Icons */}
      <div className="p-4 flex flex-col gap-y-4">
        <SearchIssue />
        <AddIssue />
      </div>

      {/* Bottom Icons */}
      <div>
        <User color="#fff" />
        <FileQuestion color="#fff" />
      </div>
    </div>
  );
};
