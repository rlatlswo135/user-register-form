export const RegisterStepThree = () => {
  const step3Schema = z.object({
    sns: z.array(z.enum(["kakao", "naver", "google", "apple"])),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2">SNS 소셜 계정 연결 (선택)</div>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="sns"
          value="kakao"
          checked={step3.sns.includes("kakao")}
          onChange={handleChange}
        />{" "}
        카카오
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="sns"
          value="naver"
          checked={step3.sns.includes("naver")}
          onChange={handleChange}
        />{" "}
        네이버
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="sns"
          value="google"
          checked={step3.sns.includes("google")}
          onChange={handleChange}
        />{" "}
        구글
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="sns"
          value="apple"
          checked={step3.sns.includes("apple")}
          onChange={handleChange}
        />{" "}
        애플
      </label>
    </div>
  );
};
