import { FormInput } from "@/components/form/form-input";
import { FormSelect } from "@/components/form/form-select";

export const RegisterStepTwo = () => {
  const genderOptions = [
    { value: "none", children: "성별 선택" },
    { value: "male", children: "남성" },
    { value: "female", children: "여성" },
    { value: "other", children: "기타" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <FormInput
        label="생년월일"
        name="profile.birth"
        placeholder="생년월일 (예: 19990101)"
      />
      <FormSelect
        label="성별"
        name="profile.gender"
        className="border rounded-md px-2 py-1 w-full"
        placeholder="성별을 선택해 주세요."
        options={genderOptions}
      />
      <FormInput label="닉네임" name="profile.nickname" placeholder="닉네임" />
    </div>
  );
};
