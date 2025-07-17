import z from "zod";

export const accountSchema = z
  .object({
    username: z.string().min(2, "아이디는 2자 이상이어야 합니다."),
    password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다."),
    passwordConfirm: z.string(),
    email: z.string().email("이메일 형식이 올바르지 않습니다."),
    phone: z.string().min(9, "전화번호를 입력하세요."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export const profileSchema = z.object({
  birth: z.string().min(6, "생년월일을 입력하세요."),
  gender: z.enum(["male", "female", "other"]),
  nickname: z.string().min(2, "닉네임은 2자 이상이어야 합니다."),
});

export const snsSchema = z.array(z.enum(["kakao", "naver", "google", "apple"]));

export const registerSchema = z.object({
  account: accountSchema,
  profile: profileSchema,
  sns: snsSchema,
});

export type AccountSchema = z.infer<typeof accountSchema>;
export type ProfileSchema = z.infer<typeof profileSchema>;
export type SnsSchema = z.infer<typeof snsSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
