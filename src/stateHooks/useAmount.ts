import { create } from "zustand";

// Define the store's state interface
interface AmountStore {
  amount: string;
  addDigit: (char: string) => void;
  removeDigit: () => void;
}

const useAmountStore = create<AmountStore>((set) => ({
  amount: "",

  addDigit: (char) =>
    set((state) => ({
      amount: state.amount + char,
    })),

  removeDigit: () =>
    set((state) => ({
      amount: state.amount.slice(0, -1),
    })),
}));

export default useAmountStore;
