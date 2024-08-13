"use client";
import { create } from "zustand";
import i18n from "./i18n";

// Define the store interface
interface LanguageStore {
  language: "en" | "ar";
  toggleLanguage: () => void;
}

// Create the Zustand store
const useStore = create<LanguageStore>((set, get) => ({
  language: (localStorage.getItem("language") as "en" | "ar") || "en",
  toggleLanguage: () => {
    const currentLanguage = get().language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";

    set({ language: newLanguage });
    localStorage.setItem("language", newLanguage);
    i18n.changeLanguage(newLanguage);
  },
}));

export default useStore;
