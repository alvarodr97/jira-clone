import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";

type path = "/project/board" | "/project/settings" | "/project/issue" | "";

export interface LinkProps {
  icon: LucideIcon;
  path: path;
  pathName: string;
}

export const SidebarLink = ({ icon: Icon, path, pathName }: LinkProps) => {
  if (path) {
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
  }

  if (!path) {
    return (
      <div
        key={path}
        title={pathName}
        className="group relative flex flex-row p-2 gap-x-2 hover:bg-activeLink cursor-not-allowed"
      >
        <Icon />
        <span className="group-hover:opacity-0">{pathName}</span>
        <span className="group-hover:opacity-100 opacity-0 inline-block absolute left-10 font-bold">
          Not implemented
        </span>
      </div>
    );
  }
};
