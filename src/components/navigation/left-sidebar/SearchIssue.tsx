import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TooltipNavigation } from "../TooltipNavigation";
import { Search } from "lucide-react";
import { SearchIssueComponent } from "@/features/search/SearchIssueComponent";

export const SearchIssue = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  return (
    <Sheet open={isSearchBoxOpen} onOpenChange={setIsSearchBoxOpen}>
      <TooltipNavigation tooltipText="Search issue">
        <SheetTrigger asChild>
          <Search className="custom-sidebar-button" />
        </SheetTrigger>
      </TooltipNavigation>

      <SheetContent side="left">
        <SearchIssueComponent setIsSearchBoxOpen={setIsSearchBoxOpen} />
      </SheetContent>
    </Sheet>
  );
};
