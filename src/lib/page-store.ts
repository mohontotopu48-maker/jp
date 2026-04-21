import { create } from "zustand";

export type PageKey =
  | "home"
  | "about"
  | "service-interior"
  | "service-exterior"
  | "service-skimming"
  | "service-ceiling"
  | "service-repair";

interface PageStore {
  currentPage: PageKey;
  navigateTo: (page: PageKey) => void;
  goHome: () => void;
}

export const usePageStore = create<PageStore>((set) => ({
  currentPage: "home",
  navigateTo: (page) => {
    set({ currentPage: page });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  goHome: () => {
    set({ currentPage: "home" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
}));
