import { LinkProps } from "@/components/navigation/sidebar/components/SidebarLink";
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
    path: "/board",
    pathName: "Kanban Board",
  },
  {
    icon: Settings,
    path: "/settings",
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
    icon: LineChart,
    path: "",
    pathName: "Reports",
  },
  {
    icon: Puzzle,
    path: "",
    pathName: "Components",
  },
];
