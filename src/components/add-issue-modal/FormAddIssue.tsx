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
import { ISSUES_TYPES } from "@/constants/issues-constants";
import { ISSUES_PRIORITY } from "@/constants/issues-constants";

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

export const FormAddIssue = () => {
  const users = useBoundStore((state) => state.users);

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

  function onSubmit(values: z.infer<typeof AddIssueSchema>) {
    console.log(values);
    toast.success("Changes have been saved successfully.");
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
          options={ISSUES_TYPES}
        />

        {/* Issue Priority */}
        <FormSelect
          control={form.control}
          name="priority"
          label="Issue priority"
          options={ISSUES_PRIORITY}
        />

        {/* Issue Summary */}
        <FormInput
          control={form.control}
          name="summary"
          label="Short summary"
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
          <Button type="submit" variant="default">
            Create Issue
          </Button>
          <Button type="button" variant="ghost">
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};
