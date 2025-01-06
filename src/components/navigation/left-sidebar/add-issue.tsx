import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Plus } from "lucide-react";
import { TooltipNavigation } from "../tooltip-navigation";
import { AddIssueContent } from "@/features/add-issue-modal/add-issue-content";

export const AddIssue = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipNavigation tooltipText="Create issue">
        <DialogTrigger asChild>
          <button
            className="custom-sidebar-button"
            aria-label="Create issue"
            data-testid="create-issue-button"
          >
            <Plus aria-hidden="true" focusable="false" />
          </button>
        </DialogTrigger>
      </TooltipNavigation>
      <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <VisuallyHidden>
          <SheetTitle>Create issue</SheetTitle>
          <SheetDescription>Create issue</SheetDescription>
        </VisuallyHidden>
        <AddIssueContent setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
