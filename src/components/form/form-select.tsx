import type { FormProps } from "./types/form.types";
import { Select, type SelectProps } from "../select";
import { FormFieldWrapper } from "./form-field-wrapper";

type FormSelectProps = FormProps & SelectProps;

export const FormSelect = ({
  name,
  label,
  description,
  ...select
}: FormSelectProps) => {
  return (
    <FormFieldWrapper name={name} label={label} description={description}>
      {(field) => <Select {...select} {...field} />}
    </FormFieldWrapper>
  );
};
