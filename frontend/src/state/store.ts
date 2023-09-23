// frontend\src\state\store.ts

import { create } from "zustand";

export const useAuthStore = create<any>((set: (arg0: { userInfo: any; }) => void) => {
  const storedUserInfo = localStorage.getItem("userInfo");

  return {
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
    setUserInfo: (userInfo: any) => {
      console.log('userInfo',userInfo.data);
      localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem("expirationTime", expirationTime.toString());

      set({ userInfo });
    },
    logout: () => {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");

      set({ userInfo: null });
    },
  };
});
