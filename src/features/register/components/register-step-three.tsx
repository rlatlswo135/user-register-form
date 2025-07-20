import { useLayoutEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";

const CLIENT_ID =
  "593702851174-d5jijcip3p5dl5oekbv22tbjkufs0qu5.apps.googleusercontent.com";

type GoogleAccount = {
  name: string;
  email: string;
};

export const RegisterStepThree = () => {
  const googleBtnRef = useRef<HTMLDivElement>(null);

  const [googleAccount, setGoogleAccount] = useState<GoogleAccount | null>(
    null
  );

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const google = (window as any).google;

    if (google) {
      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response: { credential: string }) => {
          const decodedJwt = jwtDecode(response.credential) as GoogleAccount;

          setGoogleAccount(decodedJwt);
        },
      });

      const renderOptions = {
        theme: "outline",
        size: "large",
        width: 300,
      };

      google.accounts.id.renderButton(googleBtnRef.current, renderOptions);
    }
  }, []);

  return (
    <>
      <div ref={googleBtnRef} />
      {googleAccount && (
        <div>
          <p>{googleAccount.email}</p>
          <p>{googleAccount.name}</p>
        </div>
      )}
    </>
  );
};
