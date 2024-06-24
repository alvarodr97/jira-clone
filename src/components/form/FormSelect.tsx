import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label
}: Props<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {/* TODO: Change this to map */}
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Software">Software</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
