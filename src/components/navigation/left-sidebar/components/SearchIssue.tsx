import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TooltipNavigation } from "../../components/TooltipNavigation";
import { Search } from "lucide-react";
import { SearchIssueComponent } from "@/features/search/SearchIssueComponent";

export const SearchIssue = () => {
  return (
    <Sheet>
      <TooltipNavigation tooltipText="Search issue">
        <SheetTrigger asChild>
          <Search className="custom-sidebar-button" />
        </SheetTrigger>
      </TooltipNavigation>

      <SheetContent side="left">
        <SearchIssueComponent />
      </SheetContent>
    </Sheet>
  );
};
