import type { SelectTriggerProps } from "@radix-ui/react-select";
import {
  Select as _Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import type { ReactNode } from "react";

export type SelectProps = SelectTriggerProps & {
  placeholder?: string;
  options: ("value" | { value: string; children: ReactNode })[];
};

export const Select = ({ options, placeholder, ...trigger }: SelectProps) => {
  return (
    <_Select>
      <SelectTrigger {...trigger}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
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
    </_Select>
  );
};
