import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchema } from "./schema/register.schema";
import { RegisterStepOne } from "./components/register-step-one";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { RegisterStepTwo } from "./components/register-step-two";
import { RegisterStepThree } from "./components/register-step-three";
import { Button } from "@/components/ui/button";

const INITIAL_VALUE: RegisterSchema = {
  account: {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    phone: "",
  },
  profile: {
    birth: "",
    gender: "none",
    nickname: "",
  },
  sns: [],
};

// 스키마의 프로퍼티 순서와 동기화된 tuple
const STEP_SCHEMA = ["account", "profile", "sns"] as const;

export const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: INITIAL_VALUE,
    mode: "onTouched",
  });

  const handleNext = async () => {
    const result = await form.trigger(STEP_SCHEMA[step - 1]);

    if (result) {
      setStep((step) => step + 1);
    }
  };

  const handlePrev = () => {
    setStep((step) => step - 1);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col w-[400px] mx-auto my-10 p-8 border rounded-lg shadow gap-6 bg-white"
        onSubmit={form.handleSubmit((e) => console.log(e))}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          회원가입 ({step}/3)
        </h2>
        {step === 1 && <RegisterStepOne />}
        {step === 2 && <RegisterStepTwo />}
        {step === 3 && <RegisterStepThree />}
        <div className="flex gap-2 mt-6 justify-between">
          {step > 1 && (
            <Button onClick={handlePrev} variant="default">
              이전
            </Button>
          )}
          {step < 3 && (
            <Button
              type="button"
              onClick={handleNext}
              className="ml-auto bg-blue-500 hover:bg-blue-600"
            >
              다음
            </Button>
          )}
          {step === 3 && (
            <Button className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ml-auto">
              회원가입 완료
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
