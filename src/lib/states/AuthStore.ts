import { create } from "zustand";

type userdataType = {
  firstname: string;
  lastname: string;
  token: string;
  email: string;
};
type authStore = {
  userData: userdataType | null;
  clearUserData: () => void;
  updateUserData: (data: userdataType) => void;
};

export const useAuthStore = create<authStore>((set) => ({
  userData: null,
  clearUserData: () => set(() => ({ userData: null })),
  updateUserData: (data: userdataType) => set(() => ({ userData: data })),
}));
