import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { TooltipNavigation } from "../TooltipNavigation";
import { AddIssueContent } from "@/components/add-issue-modal/AddIssueContent";

export const AddIssue = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipNavigation tooltipText="Create issue">
        <DialogTrigger asChild>
          <Plus className="custom-sidebar-button" />
        </DialogTrigger>
      </TooltipNavigation>
      <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <AddIssueContent setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
