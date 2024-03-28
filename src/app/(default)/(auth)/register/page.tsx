"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { permanentRedirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toastGenerator } from "@/lib/helpers";
import { FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Info } from "lucide-react";

const Register = () => {
  const router = useRouter();

  const submitHandler = async (formData: FormData) => {
    toastGenerator("loading");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_PATH}/auth/register`,
        {
          email: formData.get("email"),
          password: formData.get("password"),
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
        }
      );
      if (res.data.message == "verify your email!") {
        toast.remove();
        toast("Verify email!", {
          icon: <Info className="text-primary" />,
        });
        return router.push(`/register/verify-email?email=${formData.get("email")}`);
      }
      toastGenerator("success", res.data.message);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error);
        toastGenerator("error", error.response?.data.message);
      }
    }
  };

  return (
    <form action={submitHandler} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-full flex justify-center">
        <span className="text-xl text-gray-700 font-medium text-center">
          <span className="text-primary">Meet professionals</span> working
          secretely <br />
          working in your backyard.
        </span>
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Label
          htmlFor="firstname"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </Label>

        <Input
          required
          type="text"
          id="firstname"
          name="firstname"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Label
          htmlFor="lastname"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </Label>

        <Input
          required
          type="text"
          id="lastname"
          name="lastname"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
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

      <div className="col-span-6 sm:col-span-3">
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

      <div className="col-span-6 sm:col-span-3">
        <Label
          htmlFor="PasswordConfirmation"
          className="block text-sm font-medium text-gray-700"
        >
          Password Confirmation
        </Label>

        <Input
          required
          type="password"
          id="PasswordConfirmation"
          name="password_confirmation"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6">
        <Label htmlFor="MarketingAccept" className="flex gap-4">
          <Input
            required
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
          />

          <span className="text-sm text-gray-700">
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </Label>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our
          <Link href="#" className="text-gray-700 underline">
            {" "}
            terms and conditions{" "}
          </Link>
          and
          <Link href="#" className="text-gray-700 underline">
            privacy policy
          </Link>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button type="submit">Create an account</Button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <Link href="/login" className="text-gray-700 underline">
            Login now
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
