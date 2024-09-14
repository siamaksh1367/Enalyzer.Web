import ActiveButtonPrimary from "./styledElements/ActiveButtonPrimary";
import useAmountStore from "../stateHooks/useAmountStore";
import { ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
}
function BaseButton({ children }: BaseButtonProps) {
  const { amount } = useAmountStore();
  const active = amount !== 0;
  return (
    <ActiveButtonPrimary
      className="p-1 pe-5 ps-5 rounded-pill"
      $active={active}
      disabled={!active}
    >
      {children}
    </ActiveButtonPrimary>
  );
}

export default BaseButton;
