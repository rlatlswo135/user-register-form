import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterSchema } from "../schema/register.schema";

export type RegisterStepProps = {
  register: UseFormRegister<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
};
