import { FormAddIssue } from "./FormAddIssue";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddIssueContent = ({ setOpen }: Props) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Create issue</h2>
      <FormAddIssue setOpen={setOpen} />
    </div>
  );
};
