import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { TooltipNavigation } from "../../components/TooltipNavigation";
import { AddIssueContent } from "@/components/add-issue-modal/AddIssueContent";

export const AddIssue = () => {
  return (
    <Dialog>
      <TooltipNavigation tooltipText="Create issue">
        <DialogTrigger asChild>
          <Plus className="custom-sidebar-button" />
        </DialogTrigger>
      </TooltipNavigation>
      <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <AddIssueContent />
      </DialogContent>
    </Dialog>
  );
};
