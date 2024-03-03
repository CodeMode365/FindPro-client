"use client";

import toast from "react-hot-toast";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { permanentRedirect } from "next/navigation";
import { createUser, userLogin } from "@/lib/server/actions/Auth";
import { toastGenerator } from "@/lib/helpers";
import { error } from "console";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    toastGenerator("loading");
    const res = await userLogin(formData);
    if (res.success) {
      toastGenerator("success", "Login successful!");
      permanentRedirect("/");
    } else {
      if (res.message) toastGenerator("error", res.message);
    }
    setLoading(false);
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
        {/* <button
          disabled={loading}
          type="submit"
          className="inline-block shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary/80 focus:outline-none focus:ring active:text-primary"
        >
          Login
        </button> */}
        <Button disabled={loading} type="submit" aria-disabled={loading}>
          Login
        </Button>

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
