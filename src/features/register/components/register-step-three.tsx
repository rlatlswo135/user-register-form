import { useLayoutEffect, useRef } from "react";
import { jwtDecode } from "jwt-decode";
import type { UseFormReturn } from "react-hook-form";
import type { RegisterSchema } from "../schema/register.schema";
import type { GoogleAccount } from "../types/register.types";

type RegisterStepThreeProps = {
  form: UseFormReturn<RegisterSchema>;
};

const CLIENT_ID =
  "593702851174-d5jijcip3p5dl5oekbv22tbjkufs0qu5.apps.googleusercontent.com";

export const RegisterStepThree = ({ form }: RegisterStepThreeProps) => {
  const googleBtnRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const google = (window as any).google;

    if (google) {
      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response: { credential: string }) => {
          const decodedJwt = jwtDecode(response.credential) as GoogleAccount;

          form.setValue("sns.google", {
            email: decodedJwt.email,
            name: decodedJwt.name,
          });
        },
      });

      const renderOptions = {
        theme: "outline",
        size: "large",
        width: 300,
      };

      google.accounts.id.renderButton(googleBtnRef.current, renderOptions);
    }
  }, [form]);

  return <div ref={googleBtnRef} />;
};
