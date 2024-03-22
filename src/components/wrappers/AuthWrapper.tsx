"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "@/lib/states/AuthStore";
import axios from "axios";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { clearUserData, updateUserData, userData } = useAuthStore();
  useEffect(() => {
    async function authUser() {
      if (!localStorage.getItem("auth-token")) return;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`, // Example of adding an authorization token
      };
      try {
        const res: any = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/`,
          { headers }
        );
        updateUserData(res.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
        }
        localStorage.clear()
        clearUserData();
      }
      console.log(userData);
    }
    authUser();
  }, []);
  return <>{children}</>;
};

export default AuthWrapper;
