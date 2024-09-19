import { LinkProps } from "@/components/navigation/sidebar/SidebarLink";
import {
  Kanban,
  Settings,
  Ship,
  BookCheck,
  NotebookText,
  LineChart,
  Puzzle,
} from "lucide-react";

export const LINKS: LinkProps[] = [
  {
    icon: Kanban,
    path: "/project/board",
    pathName: "Kanban Board",
  },
  {
    icon: LineChart,
    path: "/project/reports",
    pathName: "Reports",
  },
  {
    icon: Settings,
    path: "/project/settings",
    pathName: "Project Settings",
  },
  {
    icon: Ship,
    path: "",
    pathName: "Releases",
  },
  {
    icon: BookCheck,
    path: "",
    pathName: "Issues and filter",
  },
  {
    icon: NotebookText,
    path: "",
    pathName: "Pages",
  },
  {
    icon: Puzzle,
    path: "",
    pathName: "Components",
  },
];
