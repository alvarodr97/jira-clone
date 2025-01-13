import { useNavigate } from "react-router-dom";
import { useDeleteIssue } from "../api/delete-issue";
import { toast } from "sonner";
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

export const IssueDelete = ({ issueId }: { issueId: string }) => {
  const navigate = useNavigate();
  const { isPending, mutate } = useDeleteIssue({
    mutationConfig: {
      onSuccess: () => {
        toast.success(`Issue #${issueId} deleted successfully`);
        navigate("/project/board");
      },
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild aria-label="Delete issue">
        <Button variant="secondary">
          <IconSVG
            icon={isPending ? "Spin" : "Trash"}
            classname={`h-6 w-6 cursor-pointer hover:bg-[#f4f5f7] ${
              isPending ? "animate-spin" : ""
            }`}
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
          <AlertDialogAction onClick={() => mutate({ issueId })}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
