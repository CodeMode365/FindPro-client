"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { permanentRedirect, redirect, useRouter } from "next/navigation";
import { toastGenerator } from "@/lib/helpers";
import axios from "axios";
import { Info } from "lucide-react";
import _ from "lodash";

const Login = () => {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    toastGenerator("loading");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_PATH}/auth/login`,
        {
          email: formData.get("email"),
          password: formData.get("password"),
        }
      );
      if (res.data.message == "verify your email!") {
        toast.remove();
        toast("Verify your email!", {
          icon: <Info className="text-primary" />,
        });
        return router.push(
          `/register/verify-email?email=${formData.get("email")}`
        );
      }
      toastGenerator("success", res.data.message);
      localStorage.setItem("auth-token", res.data.data.token);
      localStorage.setItem("user-data", JSON.stringify(_.pick(res.data.data, ["email","fristname","lastname","verificationStatus"])));
      return router.push("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toastGenerator("error", error.response?.data.message);
      }
    }
  };

  return (
    <form action={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-full flex justify-center">
        <span className="text-xl text-gray-700 font-medium text-center">
          <span className="text-primary">Meet professionals</span> working
          secretely <br />
          working in your backyard.
        </span>
      </div>

      <div className="col-span-6">
        <Label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </Label>

        <Input
          required
          type="email"
          id="Email"
          name="email"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6">
        <Label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Password{" "}
        </Label>

        <Input
          required
          type="password"
          id="Password"
          name="password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button type="submit">Login</Button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Don&apos;t have an account?
          <Link href="/register" className="text-gray-700 underline">
            Register account
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default Login;
