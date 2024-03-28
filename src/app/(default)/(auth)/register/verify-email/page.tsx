"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toastGenerator } from "@/lib/helpers";
import { permanentRedirect, useSearchParams,useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from "axios";

const EmailVerification = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter()

  const resendCode = async () => {
    toastGenerator("loading", "Sending code!");
    console.log("sending");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/sendcode`,
        {
          email: userEmail,
          type: "verify",
        }
      );
      toastGenerator("success", res.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastGenerator("error", error.response?.data.message);
      }
    }
  };

  const submitHandler = async () => {
    toastGenerator("loading", "Verifying your code!");
    if (code.length !== 6) {
      return toastGenerator("error", "Invalid code!");
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verifyEmail`,
        {
          code,
          email: userEmail,
        }
      );
      toastGenerator("success", res.data.message);
      return router.push("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastGenerator("error", error.response?.data.message);
      }
    }
  };

  useLayoutEffect(() => {
    const email = searchParams.get("email");
    if (email) {
      setUserEmail(email);
    } else {
      toastGenerator("error", "Missing email!");
      return permanentRedirect("/register");
    }
  }, [searchParams.get("email")]);

  return (
    <form className="mt-8 flex flex-col items-center space-y-10 md:-my-20">
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
        <Button type="button" variant={"outline"} onClick={() => resendCode()}>
          Resend Code
        </Button>
        <Button type="button" onClick={submitHandler}>
          Verify
        </Button>
      </div>
    </form>
  );
};

export default EmailVerification;
