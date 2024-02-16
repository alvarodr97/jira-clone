import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormInputSettings } from "./FormInputSettings";
import { FormSelectSettings } from "./FormSelectSettings";
import { FormDescriptionSettings } from "./FormDescriptionSettings";
import { toast } from "sonner";

const SignUpSchema = z.object({
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

export type SettingsSchemaType = z.infer<typeof SignUpSchema>;

// TODO: Add zustand default values and actions
export const FormSettings = () => {
  const form = useForm<SettingsSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      projectName: "React",
      url: "https://...",
      category: "Marketing",
      description: "A Jira clone app built with React 18, Zustand and shadcn.",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values);
    toast.success("Changes have been saved successfully.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[640px] space-y-4"
      >
        {/* Project Name input */}
        <FormInputSettings
          control={form.control}
          name="projectName"
          label="Project Name"
        />

        {/* URL Input */}
        <FormInputSettings
          control={form.control}
          name="url"
          label="URL"
        />

        {/* Category select */}
        <FormSelectSettings control={form.control} />

        {/* Description area */}
        <FormDescriptionSettings control={form.control} />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};
