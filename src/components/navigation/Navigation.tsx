import { LeftSidebar } from "./left-sidebar/LeftSidebar";
import { Sidebar } from "./sidebar/Sidebar";

export const Navigation = () => {
  return (
    <aside className="flex flex-row border-r border-r-sidebarHr">
        <LeftSidebar />
        <Sidebar />
    </aside>
  )
};
