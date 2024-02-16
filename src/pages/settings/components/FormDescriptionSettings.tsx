import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { SettingsSchemaType } from "./FormSettings";

interface Props {
  control: Control<SettingsSchemaType>;
}

export const FormDescriptionSettings = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Add a description"
              className="resize-none"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
