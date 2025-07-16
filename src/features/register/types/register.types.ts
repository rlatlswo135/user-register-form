import type { Dispatch, SetStateAction } from "react";

export type RegisterStepProps<T> = {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  errors: Record<keyof T, string[]>;
};
