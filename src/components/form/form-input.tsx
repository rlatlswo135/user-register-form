import type { ComponentProps } from "react";
import { Input } from "../ui/input";
import type { FormProps } from "./types/form.types";
import { FormFieldWrapper } from "./form-field-wrapper";
import { FormControl } from "../ui/form";

type FormInputProps = FormProps & ComponentProps<typeof Input>;

export const FormInput = ({
  name,
  label,
  description,
  ...input
}: FormInputProps) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => (
        <FormControl>
          <Input {...input} {...field} />
        </FormControl>
      )}
    </FormFieldWrapper>
  );
};
