import { LinkProps } from "@/components/navigation/sidebar/components/SidebarLink";
import { Kanban, Settings } from "lucide-react";

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
  ];