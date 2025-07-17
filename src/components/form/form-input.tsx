import type { ComponentProps } from "react";
import { Input } from "../ui/input";
import type { FormProps } from "./types/form.types";
import { FormFieldWrapper } from "./form-field-wrapper";

type FormInputProps = FormProps & ComponentProps<typeof Input>;

export const FormInput = ({
  name,
  label,
  description,
  ...input
}: FormInputProps) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => <Input {...input} {...field} />}
    </FormFieldWrapper>
  );
};
