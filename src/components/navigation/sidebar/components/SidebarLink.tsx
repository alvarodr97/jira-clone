import { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type path = "/board" | "/settings" | "/issue";

export interface LinkProps {
  icon: LucideIcon;
  path: path;
  pathName: string;
}

export const SidebarLink = ({ icon: Icon, path, pathName }: LinkProps) => {
  return (
    <NavLink
      key={path}
      to={path}
      title={pathName}
      className={({ isActive }) => {
        return `flex flex-row p-2 gap-x-2 hover:bg-activeLink ${
          isActive && "bg-activeLink text-activeLinkText"
        }`;
      }}
    >
      <Icon />
      <span>{pathName}</span>
    </NavLink>
  );
};
