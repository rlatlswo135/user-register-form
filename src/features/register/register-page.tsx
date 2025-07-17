import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchema } from "./schema/register.schema";
import { RegisterStepOne } from "./components/register-step-one";
import { RegisterStepTwo } from "./components/register-step-two";
import { RegisterStepThree } from "./components/register-step-three";
import { zodResolver } from "@hookform/resolvers/zod";

const initialRegisterValue: RegisterSchema = {
  account: {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    phone: "",
  },
  profile: {
    birth: "",
    gender: "male",
    nickname: "",
  },
  sns: [],
};
export const RegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: initialRegisterValue,
    mode: "onBlur",
  });

  const [step, setStep] = useState(1);

  const handleNext = async () => {
    const result = await trigger(
      step === 1 ? "account" : step === 2 ? "profile" : "sns"
    );

    if (result) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <form
      className="flex flex-col w-[400px] mx-auto my-10 p-8 border rounded-lg shadow gap-6 bg-white"
      onSubmit={handleSubmit((e) => console.log(e))}
    >
      <h2 className="text-2xl font-bold mb-2 text-center">
        회원가입 ({step}/3)
      </h2>
      {step === 1 && <RegisterStepOne register={register} errors={errors} />}
      {step === 2 && <RegisterStepTwo register={register} errors={errors} />}
      {step === 3 && <RegisterStepThree register={register} errors={errors} />}
      <div className="flex gap-2 mt-6 justify-between">
        {step > 1 && (
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            이전
          </button>
        )}
        {step < 3 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ml-auto"
          >
            다음
          </button>
        )}
        {step === 3 && (
          <button
            type="submit"
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ml-auto"
          >
            회원가입 완료
          </button>
        )}
      </div>
    </form>
  );
};
