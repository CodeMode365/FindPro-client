import { create } from "zustand";

type loadingStore = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};
export const useLoadingStore = create<loadingStore>((set) => ({
  isLoading: true,
  startLoading: () =>
    set(() => {
      console.log("Hello loading");
      return { isLoading: true };
    }),
  stopLoading: () => set({ isLoading: false }),
}));
