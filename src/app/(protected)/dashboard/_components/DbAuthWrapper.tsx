"use client";

import { toastGenerator } from "@/lib/helpers";
import { useAuthStore } from "@/lib/states/AuthStore";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const DbAuthWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { userData } = useAuthStore();
  useEffect(() => {
    if (!userData) {
      console.log("not authorized!");
      toastGenerator("error", "User not authenticated!");
      router.push("/login");
    }
  }, []);
  if (userData) {
    return <>{children}</>;
  }
  return null;
};

export default DbAuthWrapper;
