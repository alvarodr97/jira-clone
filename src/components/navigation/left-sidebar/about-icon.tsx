import useBoundStore from "@/store/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TooltipNavigation } from "../tooltip-navigation";
import { HelpCircle } from "lucide-react";

export const AboutIcon = () => {
  const description = useBoundStore((state) => state.description);

  return (
    <Popover>
      <TooltipNavigation tooltipText="About">
        <PopoverTrigger asChild>
          <HelpCircle className="custom-sidebar-button" />
        </PopoverTrigger>
      </TooltipNavigation>
      <PopoverContent className="mb-4" side="right">
        <div>
          <p className="text-sm">{description || "There is no description!"}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
