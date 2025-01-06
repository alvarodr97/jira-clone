import { Button } from "@/components/ui/button";
import { IconSVG } from "@/components/icon-svg";
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

// TODO: Delete issue

export const IssueDelete = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild aria-label="Delete issue">
        <Button variant="secondary">
          <IconSVG
            icon="Trash"
            classname="h-6 w-6 cursor-pointer hover:bg-[#f4f5f7]"
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this issue?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue (Not working)</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
