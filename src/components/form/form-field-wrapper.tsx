import type { ReactNode } from "react";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type FormFieldWrapperProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: FieldPath<TFieldValues>;
  label?: string;
  description?: string;
  children: (field: ControllerRenderProps<FieldValues, TName>) => ReactNode;
};

export const FormFieldWrapper = ({
  name,
  label,
  description,
  children,
}: FormFieldWrapperProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          {children(field)}
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
