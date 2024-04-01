"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/lib/states/AuthStore";
import Link from "next/link";
import React from "react";

const AuthService = () => {
  const { userData } = useAuthStore();
  return (
    <>
      {userData ? (
        <Link href={"/dashboard"}>
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/login"
          >
            Login
          </Link>

          <div className="hidden sm:flex">
            <Link
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthService;
