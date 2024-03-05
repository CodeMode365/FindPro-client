"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { permanentRedirect } from "next/navigation";
import { userLogin } from "@/lib/server/actions/Auth";
import { toastGenerator } from "@/lib/helpers";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    toastGenerator("loading");
    const res = await userLogin(formData);
    if (res.success) {
      if (res.data.message && res.data.message == "Verify your email!") {
        toast.remove();
        toast("Verify your email!", {
          icon: <Info className="text-primary" />,
        });
        return permanentRedirect(
          `/register/verify-email?email=${res.data.email}`
        );
      }
      toastGenerator("success", "Login successful!");
      return permanentRedirect("/");
    } else {
      toastGenerator("error", res.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }),
    [];

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
