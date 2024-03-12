"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toastGenerator } from "@/lib/helpers";
import { permanentRedirect, useSearchParams } from "next/navigation";
import { resendVerificationCode, verifyEmail } from "@/lib/server/actions/Auth";
import { useLoadingStore } from "@/lib/states/loadingStore";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const EmailVerification = () => {
  const { isLoading, startLoading, stopLoading } = useLoadingStore();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const searchParams = useSearchParams();

  const resendCode = async () => {
    startLoading();
    toastGenerator("loading", "Sending code!");
    const res = await resendVerificationCode(userEmail);
    if (res.success) {
      toastGenerator("success", "Code sent!");
    } else {
      toastGenerator("error", res.message);
    }
    stopLoading();
  };

  const submitHandler = async () => {
    startLoading();
    toastGenerator("loading", "Verifying your code!");
    if (code.length !== 6) {
      stopLoading();
      console.log(code);
      return toastGenerator("error", "Invalid code!");
    }
    const res = await verifyEmail(userEmail, code);
    if (res.success) {
      stopLoading();
      toastGenerator("success", "Email verified!");
      return permanentRedirect("/");
    } else {
      toastGenerator("error", res.message);
    }
    stopLoading();
  };

  useLayoutEffect(() => {
    stopLoading();
    const email = searchParams.get("email");
    if (email) {
      setUserEmail(email);
    } else {
      toastGenerator("error", "Missing email!");
      permanentRedirect("/register");
    }
  }, [searchParams.get("email")]);

  return (
    <form
      action={submitHandler}
      className="mt-8 flex flex-col items-center space-y-10 md:-my-20"
    >
      <div className="-mb-4">
        <Image src={"/logo.svg"} alt="logo" width={120} height={120} />
        <h1 className="text-2xl text-primary text-center my-2 font-semibold">
          FindPro.dev
        </h1>
      </div>

      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Enter your verification code!
        </h1>
        <p>
          Check your
          <a
            className="hover:underline text-primary "
            href="https://gmail.com"
            target="_blank"
          >
            {" "}
            email
          </a>{" "}
          for the verification code.
        </p>
        <p className="text-primary">{searchParams.get("email")}</p>
      </div>
      <div className="flex">
        <InputOTP
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e)}
          render={({ slots }) => (
            <>
              <InputOTPGroup>
                {slots.slice(0, 3).map((slot, index) => (
                  <InputOTPSlot
                    key={index}
                    {...slot}
                    className="h-8 w-8 text-sm sm:h-12 sm:w-12 md:h-16 md:w-16 border-primary md:text-4xl no-spinners text-center font-normal"
                  />
                ))}{" "}
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                {slots.slice(3).map((slot, index) => (
                  <InputOTPSlot
                    key={index}
                    {...slot}
                    className="h-8 w-8 text-sm sm:h-12 sm:w-12 md:h-16 md:w-16 border-primary md:text-4xl no-spinners text-center focus-within:hidden focus:hidden active:hidden"
                  />
                ))}
              </InputOTPGroup>
            </>
          )}
        />
      </div>
      <div className="w-full flex justify-between">
        <Button variant={"outline"} disabled={isLoading} onClick={resendCode}>
          Resend Code
        </Button>
        <Button type="submit" disabled={isLoading}>
          Verify
        </Button>
      </div>
    </form>
  );
};

export default EmailVerification;
