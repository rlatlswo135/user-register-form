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
  sns: { google: {} },
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

  const handleSubmit = form.handleSubmit((e) => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@", e);
  });

  return (
    <Form {...form}>
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
    // <body className="bg-white text-gray-900 font-serif p-8">
    //   <div className="max-w-5xl mx-auto">
    //     <h1 className="text-center text-2xl font-semibold tracking-wide mb-2">
    //       별네일
    //     </h1>
    //     <p className="text-center text-sm mb-10">PREMIUM BEAUTY SALON</p>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
    //       <div className="space-y-8">
    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Nail</h2>
    //           <ul className="space-y-1">
    //             <li>케어: 회원 12,000 / 비회원 15,000</li>
    //             <li>남자 손 케어: 회원 17,000 / 비회원 20,000</li>
    //             <li>케어 + 컬러링: 회원 35,000 / 비회원 40,000</li>
    //             <li>젤 제거: 5,000</li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Etc</h2>
    //           <ul className="space-y-1">
    //             <li>연장 (1EA): 10,000</li>
    //             <li>팁: 5,000</li>
    //             <li>젤 제거 (타샵): 15,000</li>
    //             <li>연장 제거: +10,000</li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Pedi</h2>
    //           <ul className="space-y-1">
    //             <li>케어: 회원 20,000 / 비회원 25,000</li>
    //             <li>남자 발 케어: 회원 27,000 / 비회원 30,000</li>
    //             <li>케어 + 컬러링: 회원 45,000 / 비회원 50,000</li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Etc</h2>
    //           <ul className="space-y-1">
    //             <li>양쪽 연장 (1EA): 15,000</li>
    //             <li>발팁: 5,000</li>
    //             <li>발톱 교정: 5,000</li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="font-semibold font-medium mt-6">
    //             Premium Foot Spa
    //           </h2>
    //           <ul className="space-y-1 mt-1">
    //             <li>일반/트렌드 풋스파: 회원 60,000 / 비회원 70,000</li>
    //             <li>남자/알뜰 트렌드 풋스파: 회원 70,000 / 비회원 80,000</li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="space-y-8">
    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Art</h2>
    //           <ul className="space-y-1">
    //             <li>미 포함 아트: 회원 60,000 / 비회원 65,000</li>
    //             <li>이 포함 아트: 회원 70,000 / 비회원 75,000</li>
    //             <li>이 포함 페이드 아트: 회원 75,000 / 비회원 80,000</li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Etc</h2>
    //           <ul className="space-y-1">
    //             <li>프렌치 / 그라데이션: 20,000</li>
    //             <li>컬러 추가: 5,000</li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Event</h2>
    //           <ul className="space-y-1">
    //             <li>장단점 분석 (케미포함): 29,000</li>
    //             <li>연출 아트 (10손 + 합리): 79,000</li>
    //             <li>톤온톤 네일: 50,000</li>
    //             <li>지점 아트: 45,000</li>
    //             <li>시그니처 아트: 98,000</li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="font-semibold border-b pb-1 mb-2">Membership</h2>
    //           <ul className="space-y-1">
    //             <li>20만원: Vip 혜택가 적용</li>
    //             <li>30만원: Vip 혜택가 + 추가할인 5%</li>
    //             <li>50만원: Vip 혜택가 + 추가할인 10%</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     <p className="text-xs text-gray-500 text-center mt-10">
    //       *공간네일 전지점은 모든 시술 시 유아동반 협조 및 카드 가격 동일합니다.
    //       <br />
    //       www.gonggannail.com
    //     </p>
    //   </div>
    // </body>
  );
};
