"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toastGenerator } from "@/lib/helpers";
import { permanentRedirect, useSearchParams } from "next/navigation";
import { resendVerificationCode, verifyEmail } from "@/lib/server/actions/Auth";
import { useLoadingStore } from "@/lib/states/loadingStore";

const EmailVerification = () => {
  const { isLoading, startLoading, stopLoading } = useLoadingStore();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const searchParams = useSearchParams();

  const submitHandler = async (formData: FormData) => {
    startLoading();
    toastGenerator("loading", "Verifying your code!");
    const entries = Object.fromEntries(formData.entries());
    let code = "";
    for (let key in entries) {
      code += entries[key];
    }
    if (code.length !== 6) {
      stopLoading();
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

  useEffect(() => {
    stopLoading();
    const handleInput = (index: number) => (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.value.length > 1) input.value = input.value.slice(1, 2);
      else input.value = input.value.slice(0, 1);
      if (input.value.length >= input.maxLength) {
        const nextIndex = index + 1;
        if (nextIndex < 6) {
          inputRefs.current[nextIndex].focus();
        } else {
          input.blur();
        }
      }
    };

    const handleClear = (i: number) => (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      if (e.key == "Backspace" && input.value == "") {
        const prevIndex = i - 1;
        if (prevIndex >= 0) {
          inputRefs.current[prevIndex].focus();
        }
      }
    };

    inputRefs.current.forEach((ref, i) => {
      ref.addEventListener("input", handleInput(i));
      ref.addEventListener("keydown", handleClear(i));
    });

    return () => {
      inputRefs.current.forEach((ref, i) => {
        ref.removeEventListener("input", handleInput(i));
        ref.removeEventListener("keydown", handleClear(i));
        startLoading();
      });
    };
  }, []);

  useLayoutEffect(() => {
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
        {Array.from({ length: 6 }).map((_, id) => (
          <Input
            type="number"
            key={`codeInput-${id + 1}`}
            id={`codeInput-${id + 1}`}
            name={`codeInput-${id + 1}`}
            ref={(ele: HTMLInputElement) => {
              if (inputRefs.current.length < 6)
                return inputRefs.current.push(ele);
            }}
            disabled={isLoading}
            className="mx-1 md:mx-2 h-8 w-8 text-sm sm:h-12 sm:w-12 md:h-16 md:w-16 border-primary md:text-4xl no-spinners text-center"
            autoFocus={id == 0}
            maxLength={1}
            onKeyDown={(e) => {}}
          />
        ))}
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