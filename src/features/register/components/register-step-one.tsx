import { FormInput } from "@/components/form/form-input";

export const RegisterStepOne = () => {
  return (
    <div className="flex flex-col gap-4">
      <FormInput label="아이디" name="account.username" />
      <FormInput label="비밀번호" name="account.password" type="password" />
      <FormInput
        label="비밀번호 확인"
        name="account.passwordConfirm"
        type="password"
      />
      <FormInput label="이메일" name="account.email" />
      <FormInput label="전화번호" name="account.phone" />
    </div>
  );
};
