import type { FormProps } from "./types/form.types";
import { type SelectProps } from "../select";
import { FormFieldWrapper } from "./form-field-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormControl } from "../ui/form";

type FormSelectProps = FormProps & SelectProps;

export const FormSelect = ({
  name,
  label,
  description,
  options,
  placeholder,
  ...select
}: FormSelectProps) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger {...select}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option) =>
              typeof option === "string" ? (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ) : (
                <SelectItem key={option.value} value={option.value}>
                  {option.children}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      )}
    </FormFieldWrapper>
  );
};
