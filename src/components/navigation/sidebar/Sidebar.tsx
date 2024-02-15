import react from "@/assets/react.png";
import { LINKS } from "@/constants/links";
import { SidebarLink } from "./components/SidebarLink";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen p-3 bg-sidebarGrey">
      <div className="flex-grow overflow-auto min-h-0">
        {/* React icon container */}
        <div className="flex flex-row gap-x-2 py-5">
          <img src={react} className="w-12 h-12" />
          <div>
            <p>React Jira Clone</p>
            <span className="text-xs">Software Project</span>
          </div>
        </div>

        {/* Links */}
        {LINKS.map((link) => (
          <SidebarLink key={link.path} {...link} />
        ))}
      </div>
    </div>
  );
};
