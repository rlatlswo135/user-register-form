type FieldErrorProps = {
  message: string;
};

export const FieldError = ({ message }: FieldErrorProps) => {
  return <span className="text-red-500 text-xs">{message}</span>;
};
