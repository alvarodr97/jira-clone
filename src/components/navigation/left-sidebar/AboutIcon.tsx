import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TooltipNavigation } from "../TooltipNavigation";
import { HelpCircle } from "lucide-react";

export const AboutIcon = () => {
  return (
    <Popover>
      <TooltipNavigation tooltipText="About">
        <PopoverTrigger asChild>
          <HelpCircle className="custom-sidebar-button" />
        </PopoverTrigger>
      </TooltipNavigation>
      <PopoverContent className="mb-4" side="right">
        <div>
          <p className="text-sm">
            This is a simplified Jira clone built with React, Zustand and
            shadcn.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
