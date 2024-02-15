import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { TooltipNavigation } from "../../components/TooltipNavigation";

export const AddIssue = () => {
  return (
    <Dialog>
      <TooltipNavigation tooltipText="Create issue">
        <DialogTrigger asChild>
          <Plus className="custom-sidebar-button" />
        </DialogTrigger>
      </TooltipNavigation>
      <DialogContent>
        TODO: Add Content
        <p>Add Issue</p>
      </DialogContent>
    </Dialog>
  );
};
