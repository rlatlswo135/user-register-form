import { Input } from "@/components/ui/input";
import type { ChangeEvent } from "react";
import type { RegisterStepProps } from "../types/register.types";
import type { AccountSchema } from "../schema/register.schema";

export const RegisterStepOne = ({
  value,
  setValue,
  errors,
}: RegisterStepProps<AccountSchema>) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue((register) => ({ ...register, [target.name]: target.value }));
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        name="username"
        placeholder="아이디"
        value={value.username}
        onChange={handleChange}
      />
      {errors.username && (
        <span className="text-red-500 text-xs">{errors.username[0]}</span>
      )}
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        value={value.password}
        onChange={handleChange}
      />
      {errors.password && (
        <span className="text-red-500 text-xs">{errors.password[0]}</span>
      )}
      <Input
        name="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleChange}
      />
      {errors.passwordConfirm && (
        <span className="text-red-500 text-xs">
          {errors.passwordConfirm[0]}
        </span>
      )}
      <Input
        name="email"
        placeholder="이메일"
        value={value.email}
        onChange={handleChange}
      />
      {errors.email && (
        <span className="text-red-500 text-xs">{errors.email[0]}</span>
      )}
      <Input
        name="phone"
        placeholder="전화번호"
        value={value.phone}
        onChange={handleChange}
      />
      {errors.phone && (
        <span className="text-red-500 text-xs">{errors.phone[0]}</span>
      )}
    </div>
  );
};
