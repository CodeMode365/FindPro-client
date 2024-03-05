"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const inputRefs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement | null>(null)
  );

  const handleSubmit = () => {
    setIsLoading(true);
    return new Promise((res, rej) =>
      setTimeout(() => {
        console.log("loaded");
        setIsLoading(false);
        return res;
      }, 3000)
    );
  };

  const submitBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setIsLoading(false);
    const handleInput = (index: number) => (event: Event) => {
      const input = event.target as HTMLInputElement;
      input.value = input.value.slice(0, 1);
      if (input.value.length == input.maxLength) {
        const nextIndex = index + 1;
        if (nextIndex < inputRefs.length) {
          inputRefs[nextIndex].current?.focus();
        } else {
          input.blur();
          submitBtn.current?.click();
        }
      }
    };

    const handleClear = (i: number) => (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      if (e.key == "Backspace" && input.value == "") {
        const prevIndex = i - 1;
        if (prevIndex >= 0) {
          inputRefs[prevIndex].current?.focus();
        }
      }
    };

    inputRefs.forEach((ref, i) => {
      ref.current?.addEventListener("input", handleInput(i));
      ref.current?.addEventListener("keydown", handleClear(i));
    });

    return () => {
      inputRefs.forEach((ref, i) => {
        ref.current?.addEventListener("input", handleInput(i));
        ref.current?.addEventListener("keydown", handleClear(i));
      });
    };
  }, []);

  return (
      <div className="mt-8 flex flex-col items-center space-y-10 md:-my-20">
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
            <span className="text-primary">Check your email</span> for the
            verification code.
          </p>
        </div>
        <div className="flex">
          {inputRefs.map((ref, id) => (
            <Input
              type="number"
              key={`codeInput-${id + 1}`}
              id={`codeInput-${id + 1}`}
              name={`codeInput-${id + 1}`}
              ref={ref}
              disabled={isLoading}
              className="mx-1 md:mx-2 h-8 w-8 text-sm sm:h-12 sm:w-12 md:h-16 md:w-16 border-primary md:text-4xl no-spinners text-center"
              autoFocus={id == 0}
              maxLength={1}
              onKeyDown={(e) => {}}
            />
          ))}
        </div>
        <div className="w-full flex justify-between">
          <Button variant={"outline"} disabled={isLoading}>
            Resend Code
          </Button>
          <Button ref={submitBtn} onClick={handleSubmit} disabled={isLoading}>
            Verify
          </Button>
        </div>
      </div>
  );
};

export default VerifyEmail;
