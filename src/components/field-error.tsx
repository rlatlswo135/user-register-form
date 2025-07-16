type FieldErrorProps<T> = {
  errors: T;
  field: keyof T;
};

export const FieldError = <T extends Record<string, string[]>>({
  errors,
  field,
}: FieldErrorProps<T>) => {
  return <span className="text-red-500 text-xs">{errors[field][0]}</span>;
};
