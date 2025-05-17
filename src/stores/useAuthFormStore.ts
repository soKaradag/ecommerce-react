import { create } from "zustand";

type FormType = "login" | "register";

interface AuthFormState {
  formType: FormType;
  setFormType: (type: FormType) => void;
  toggleFormType: () => void;
}

export const useAuthFormStore = create<AuthFormState>((set) => ({
  formType: "login",
  setFormType: (type) => set({ formType: type }),
  toggleFormType: () =>
    set((state) => ({ formType: state.formType === "login" ? "register" : "login" })),
}));
