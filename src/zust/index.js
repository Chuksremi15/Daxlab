import create from "zustand";

export const useSideNavState = create((set) => ({
  sideNavState: false,
  setSideNavState: (newState) => set({ sideNavState: newState }),
}));

export const usePaymentModalState = create((set) => ({
  paymentModalState: false,
  setPaymentModaltate: (newState) => set({ paymentModalState: newState }),
}));
