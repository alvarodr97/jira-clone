import react from "@/assets/react.png";
import { LINKS } from "@/constants/links";
import { SidebarLink } from "./sidebar-link";
import { SidebarTitle } from "./sidebar-title";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 h-screen p-3 bg-sidebarGrey">
      {/* React icon container */}
      <div className="flex flex-row gap-x-2 py-5">
        <img src={react} className="w-12 h-12" />
        <SidebarTitle />
      </div>

      {/* Links */}
      {LINKS.map(
        (link) => link.path !== "" && <SidebarLink key={link.path} {...link} />
      )}

      {/* <hr /> */}
      <hr className="my-3 border-b-2" />

      {LINKS.map(
        (link) =>
          link.path === "" && <SidebarLink key={link.pathName} {...link} />
      )}
    </div>
  );
};
