import { useNavigate } from "react-router-dom";
import useBoundStore from "@/store/store";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormSelect } from "../form/FormSelect";
import { FormInput } from "../form/FormInput";
import { FormDescription } from "../form/FormDescription";
import {
  IssuePriorityEnum,
  IssueStatusEnum,
  IssueTypeEnum,
} from "@/types/issue";
import { DialogClose } from "../ui/dialog";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddIssueSchema = z.object({
  type: z.string().min(1, { message: "Select one option" }),
  priority: z.string().min(1, { message: "Select one option" }),
  summary: z
    .string()
    .min(3, { message: "Summary must contain at least 3 character(s)" })
    .max(20, { message: "Summary must contain less than 20 characters" }),
  description: z.string().optional(),
  reporter: z.string().min(1, { message: "Select one option" }),
  assignees: z.string().optional(),
});

export type AddIssueSchemaType = z.infer<typeof AddIssueSchema>;

export const FormAddIssue = ({ setOpen }: Props) => {
  const navigate = useNavigate();

  const users = useBoundStore((state) => state.users);
  const addIssue = useBoundStore((state) => state.addIssue);

  const form = useForm<AddIssueSchemaType>({
    resolver: zodResolver(AddIssueSchema),
    defaultValues: {
      type: "Task",
      priority: "Medium",
      summary: "",
      description: "",
      reporter: users[1].id,
      assignees: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AddIssueSchema>) {
    const generatedId = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

    // TODO: userId and listposition
    addIssue({
      id: generatedId.toString(),
      title: values.summary,
      description: values.description || "",
      type: values.type as IssueTypeEnum,
      priority: values.priority as IssuePriorityEnum,
      status: IssueStatusEnum.BACKLOG,
      reporterId: values.reporter,
      userIds: [],
      listPosition: 0,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    });

    // await new Promise(resolve => setTimeout(resolve, 1000));

    setOpen(false);

    navigate("project/board");

    toast.success(`Issue with ID #${generatedId} created.`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[640px] space-y-4"
      >
        {/* Issue Type */}
        <FormSelect
          control={form.control}
          name="type"
          label="Issue type"
          options={Object.values(IssueTypeEnum)}
        />

        {/* Issue Priority */}
        <FormSelect
          control={form.control}
          name="priority"
          label="Issue priority"
          options={Object.values(IssuePriorityEnum)}
        />

        {/* Issue Summary */}
        <FormInput
          control={form.control}
          name="summary"
          label="Short summary"
          autofocus
          placeholder="This is issue is about..."
        />

        {/* Issue Description */}
        <FormDescription
          control={form.control}
          name="description"
          label="Description"
          placeholder="Add new functionality where..."
        />

        {/* Reporters */}
        <FormSelect
          control={form.control}
          name="reporter"
          label="Reporter"
          options={users}
        />

        {/* TODO: Asignees */}

        <div className="flex flex-row gap-x-2 justify-end">
          <Button type="submit" variant="form">
            Create Issue
          </Button>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};
