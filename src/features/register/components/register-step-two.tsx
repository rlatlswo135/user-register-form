import { Input } from "@/components/ui/input";
import type { RegisterStepProps } from "../types/register.types";
import type { ProfileSchema } from "../schema/register.schema";
import type { ChangeEvent } from "react";

export const RegisterStepTwo = ({
  value,
  setValue,
  errors,
}: RegisterStepProps<ProfileSchema>) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue((register) => ({ ...register, [target.name]: target.value }));
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        name="birth"
        placeholder="생년월일 (예: 19990101)"
        value={value.birth}
        onChange={handleChange}
      />
      {errors.birth && (
        <span className="text-red-500 text-xs">{errors.birth[0]}</span>
      )}
      <select
        name="gender"
        value={value.gender}
        onChange={handleChange}
        className="border rounded px-2 py-1"
      >
        <option value="male">남성</option>
        <option value="female">여성</option>
        <option value="other">기타</option>
      </select>
      {errors.gender && (
        <span className="text-red-500 text-xs">{errors.gender[0]}</span>
      )}
      <Input
        name="nickname"
        placeholder="닉네임"
        value={value.nickname}
        onChange={handleChange}
      />
      {errors.nickname && (
        <span className="text-red-500 text-xs">{errors.nickname[0]}</span>
      )}
    </div>
  );
};
