import react from "@/assets/react.png";
import useBoundStore from "@/store/store";
import { LINKS } from "@/constants/links";
import { SidebarLink } from "./components/SidebarLink";

export const Sidebar = () => {
  const { projectName, category } = useBoundStore();

  return (
    <div className="flex flex-col h-screen p-3 bg-sidebarGrey">
      <div className="flex-grow overflow-auto min-h-0">
        {/* React icon container */}
        <div className="flex flex-row gap-x-2 py-5">
          <img src={react} className="w-12 h-12" />
          <div>
            <p className="font-medium text-textDark text-15">{projectName}</p>
            <span className="text-textMedium text-13">{category} Project</span>
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
