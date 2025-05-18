import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  role: "user" | "admin" | null;
  login: (role: "user" | "admin") => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  role: null,
  login: (role) => set({ isAuthenticated: true, role }),
  logout: () => set({ isAuthenticated: false, role: null }),
}));
