import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  label: string;
}

export function FormDescription<T extends FieldValues>({
  control,
  name,
  placeholder,
  label
}: Props<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
