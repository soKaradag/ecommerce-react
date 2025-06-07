import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  role: "CUSTOMER" | "ADMIN" | null;
  login: (role: "CUSTOMER" | "ADMIN") => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      role: null,
      login: (role) => set({ isAuthenticated: true, role }),
      logout: () => set({ isAuthenticated: false, role: null }),
    }),
    {
      name: "auth-storage", // localStorage key: "auth-storage"
    }
  )
);
