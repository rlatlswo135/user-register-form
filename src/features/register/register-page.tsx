import { useState } from "react";
import type { RegisterSchema } from "./schema/register.schema";
import { RegisterStepOne } from "./components/register-step-one";
import { RegisterStepTwo } from "./components/register-step-two";
import { RegisterStepThree } from "./components/register-step-three";

type ErrorType = Record<string, string[]>;

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
  sns: {
    sns: [],
  },
};
export const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const [registerValue, setRegisterValue] =
    useState<RegisterSchema>(initialRegisterValue);

  const [errors, setErrors] = useState<ErrorType>({});

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value, type } = e.target;
  //   if (step === 1) {
  //     setStep1((prev) => ({ ...prev, [name]: value }));
  //   } else if (step === 2) {
  //     setStep2((prev) => ({ ...prev, [name]: value }));
  //   } else if (step === 3 && type === "checkbox") {
  //     setStep3((prev) => {
  //       const sns = prev.sns.includes(value)
  //         ? prev.sns.filter((v) => v !== value)
  //         : [...prev.sns, value];
  //       return { ...prev, sns };
  //     });
  //   }
  // };

  const validateStep = () => {
    if (step === 1) {
      const result = step1Schema.safeParse(step1);
      setErrors(result.success ? {} : result.error.flatten().fieldErrors);
      return result.success;
    } else if (step === 2) {
      const result = step2Schema.safeParse(step2);
      setErrors(result.success ? {} : result.error.flatten().fieldErrors);
      return result.success;
    } else if (step === 3) {
      const result = step3Schema.safeParse(step3);
      setErrors(result.success ? {} : result.error.flatten().fieldErrors);
      return result.success;
    }
    return false;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
      setErrors({});
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      alert(
        "회원가입 완료!\n" +
          JSON.stringify({ ...step1, ...step2, ...step3 }, null, 2)
      );
    }
  };

  return (
    <form
      className="flex flex-col w-[400px] mx-auto my-10 p-8 border rounded-lg shadow gap-6 bg-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-2 text-center">
        회원가입 ({step}/3)
      </h2>
      {step === 1 && <RegisterStepOne />}
      {step === 2 && <RegisterStepTwo />}
      {step === 3 && <RegisterStepThree />}
      <div className="flex gap-2 mt-6 justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            이전
          </button>
        )}
        {step < 3 && (
          <button
            type="button"
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
