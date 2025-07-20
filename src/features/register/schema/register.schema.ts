import z from "zod";

export const accountSchema = z
  .object({
    username: z.string().min(2, "아이디는 2자 이상이어야 합니다."),
    password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다."),
    passwordConfirm: z.string(),
    email: z.string().email("이메일 형식이 올바르지 않습니다."),
    phone: z
      .string()
      .regex(/\d+$/, "올바른 형식이 아닙니다.")
      .min(9, "전화번호를 입력하세요."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export const profileSchema = z
  .object({
    birth: z
      .string()
      .regex(/\d+$/, "올바른 형식이 아닙니다.")
      .min(6, "생년월일을 입력하세요. (예: 19990101)"),
    gender: z.enum(["none", "male", "female", "other"]),
    nickname: z.string().min(2, "닉네임은 2자 이상이어야 합니다."),
  })
  .refine((data) => data.gender !== "none", {
    message: "성별을 선택해 주세요.",
    path: ["gender"],
  });

export const snsSchema = z
  .object({
    google: z
      .object({
        email: z.string().email(),
        name: z.string(),
      })
      .optional(),
  })
  .optional();

export const registerSchema = z.object({
  account: accountSchema,
  profile: profileSchema,
  sns: snsSchema,
});

export type AccountSchema = z.infer<typeof accountSchema>;
export type ProfileSchema = z.infer<typeof profileSchema>;
export type SnsSchema = z.infer<typeof snsSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
