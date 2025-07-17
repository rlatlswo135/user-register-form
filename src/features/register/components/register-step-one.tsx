import { Input } from "@/components/ui/input";
import type { RegisterStepProps } from "../types/register.types";
import { FieldError } from "@/components/field-error";

export const RegisterStepOne = ({
  register,
  errors: { account },
}: RegisterStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="아이디" {...register("account.username")} />
      {account?.username?.message && (
        <FieldError message={account.username.message} />
      )}
      <Input
        type="password"
        placeholder="비밀번호"
        {...register("account.password")}
      />
      {account?.password?.message && (
        <FieldError message={account.password.message} />
      )}
      <Input
        type="password"
        placeholder="비밀번호 확인"
        {...register("account.passwordConfirm")}
      />
      {account?.passwordConfirm?.message && (
        <FieldError message={account?.passwordConfirm?.message} />
      )}
      <Input placeholder="이메일" {...register("account.email")} />
      {account?.email?.message && (
        <FieldError message={account?.email?.message} />
      )}
      <Input placeholder="전화번호" {...register("account.phone")} />
      {account?.phone?.message && (
        <FieldError message={account?.phone?.message} />
      )}
    </div>
  );
};
