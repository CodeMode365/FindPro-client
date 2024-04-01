"use client";

import React, { useContext, useEffect, useState } from "react";
import { useAuthStore } from "@/lib/states/AuthStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext } from "vm";

const AuthContext = createContext();

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
        return res;
        updateUserData(res.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
        }
        localStorage.clear();
        clearUserData();
      }
      console.log(userData);
    }
    authUser();
    console.log(userData);
  }, [router]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
