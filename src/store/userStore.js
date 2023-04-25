import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
const useUser = create(
  devtools((set) => ({
    userLoggedData: {},
    login: async (userData) => {
      const res = await axios.post(
        "https://fakestoreapi.com/auth/login",
        userData
      );
      set({ user: res.data });
    },
    logout: () => set({ user: null }),
  }))
);

export default useUser;
