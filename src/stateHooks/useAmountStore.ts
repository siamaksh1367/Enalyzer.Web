import { create } from "zustand";

// Define the store's state interface
interface AmountStore {
  amount: number;
  addDigit: (digit: number) => void;
  removeDigit: () => void;
}

const useAmountStore = create<AmountStore>((set) => ({
  amount: 0,

  addDigit: (digit) => set((state) => ({ amount: state.amount * 10 + digit })),

  removeDigit: () =>
    set((state) => ({
      amount: Math.floor(state.amount / 10),
    })),
}));

export default useAmountStore;
