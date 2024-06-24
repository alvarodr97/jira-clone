import useBoundStore from "@/store/store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FormSelect } from "@/components/form/FormSelect";
import { FormDescription } from "@/components/form/FormDescription";
import { FormInput } from "@/components/form/FormInput";
import { CATEGORY } from "@/constants/settings";

const FormSettingsSchema = z.object({
  projectName: z
    .string()
    .min(3, { message: "Project Name must contain at least 3 character(s)" })
    .max(20, { message: "Project Name must contain less than 20 characters" }),
  url: z
    .string()
    .min(3, { message: "URL must contain at least 3 character(s)" })
    .max(30, { message: "URL must contain less than 30 characters" }),
  category: z.string().min(1, { message: "Select one option" }),
  description: z.string().optional(),
});

export type SettingsSchemaType = z.infer<typeof FormSettingsSchema>;

export const FormSettings = () => {
  const { projectName, category, url, description, changeData } = useBoundStore();
  const form = useForm<SettingsSchemaType>({
    resolver: zodResolver(FormSettingsSchema),
    defaultValues: {
      projectName,
      url,
      category,
      description,
    },
  });

  function onSubmit(values: z.infer<typeof FormSettingsSchema>) {
    changeData(values);
    toast.success("Changes have been saved successfully.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[640px] space-y-4"
      >
        {/* Project Name input */}
        <FormInput
          control={form.control}
          name="projectName"
          label="Project Name"
          placeholder="Jira Clone"
        />

        {/* URL Input */}
        <FormInput control={form.control} name="url" label="URL" placeholder="https://" />

        {/* Category select */}
        <FormSelect control={form.control} name="category" label="Category" options={CATEGORY} />

        {/* Description area */}
        <FormDescription control={form.control} name="description" label="Description" placeholder="Add a description" />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};
