import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TooltipNavigation } from "../tooltip-navigation";
import { Search } from "lucide-react";
import { SearchIssueComponent } from "@/features/search/components/search-issue-component";

export const SearchIssue = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  return (
    <Sheet open={isSearchBoxOpen} onOpenChange={setIsSearchBoxOpen}>
      <TooltipNavigation tooltipText="Search issue">
        <SheetTrigger asChild>
          <Search className="custom-sidebar-button" />
        </SheetTrigger>
      </TooltipNavigation>

      <SheetContent side="left" style={{ maxWidth: "30rem" }}>
        <SearchIssueComponent setIsSearchBoxOpen={setIsSearchBoxOpen} />
      </SheetContent>
    </Sheet>
  );
};
