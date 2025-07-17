import { FormInput } from "@/components/form/form-input";

export const RegisterStepOne = () => {
  return (
    <div className="flex flex-col gap-4">
      <FormInput
        label="아이디"
        name="account.username"
        placeholder="아이디를 입력하세요."
        autoFocus
      />
      <FormInput
        label="비밀번호"
        name="account.password"
        type="password"
        placeholder="비밀번호를 입력하세요."
      />
      <FormInput
        label="비밀번호 확인"
        name="account.passwordConfirm"
        type="password"
        placeholder="비밀번호를 다시 입력하세요."
      />
      <FormInput
        label="이메일"
        name="account.email"
        placeholder="이메일을 입력하세요. (example@email.com)"
      />
      <FormInput
        label="전화번호"
        name="account.phone"
        placeholder="'-'를 제외하고 입력하세요."
      />
    </div>
  );
};
