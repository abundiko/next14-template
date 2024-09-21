import { Admin as AdminUser } from "@/types";
import { create } from "zustand";

export type AdminState = {
  admin: AdminUser | null;
  setAdmin: (user: AdminUser | null) => void;
  sidebarOpen: boolean;
  setSidebar: (open: boolean) => void;
};

export const useAdminStore = create<AdminState>((set) => ({
  admin: null,
  sidebarOpen: false,
  setAdmin: (user) => set({ admin: user }),
  setSidebar: (open) => set({ sidebarOpen: open }),
}));
