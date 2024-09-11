import react from "@/assets/react.png";
import { LINKS } from "@/constants/links";
import { SidebarLink } from "./SidebarLink";
import { SidebarTitle } from "./SidebarTitle";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen p-3 bg-sidebarGrey max-w-60">
      <div className="flex-grow overflow-auto min-h-0">
        {/* React icon container */}
        <div className="flex flex-row gap-x-2 py-5">
          <img src={react} className="w-12 h-12" />
          <SidebarTitle />
        </div>

        {/* Links */}
        {LINKS.map(
          (link) =>
            link.path !== "" && <SidebarLink key={link.path} {...link} />
        )}

        {/* <hr /> */}
        <hr className="my-3 border-b-2" />

        {LINKS.map(
          (link) =>
            link.path === "" && <SidebarLink key={link.pathName} {...link} />
        )}
      </div>
    </div>
  );
};
