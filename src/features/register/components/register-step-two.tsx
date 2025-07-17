import { Input } from "@/components/ui/input";
import type { RegisterStepProps } from "../types/register.types";
import { FieldError } from "@/components/field-error";

export const RegisterStepTwo = ({
  register,
  errors: { profile },
}: RegisterStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="생년월일 (예: 19990101)"
        {...register("profile.birth")}
      />
      {profile?.birth?.message && (
        <FieldError message={profile.birth.message} />
      )}
      <select
        className="border rounded px-2 py-1"
        {...register("profile.gender")}
      >
        <option value="male">남성</option>
        <option value="female">여성</option>
        <option value="other">기타</option>
      </select>
      {profile?.gender?.message && (
        <FieldError message={profile.gender.message} />
      )}
      <Input placeholder="닉네임" {...register("profile.nickname")} />
      {profile?.nickname?.message && (
        <FieldError message={profile.nickname.message} />
      )}
    </div>
  );
};
