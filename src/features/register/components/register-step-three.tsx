import type { RegisterStepProps } from "../types/register.types";

export const RegisterStepThree = ({
  register,
  errors: { sns },
}: RegisterStepProps) => {
  return <div className="flex flex-col gap-4">소셜</div>;
};
