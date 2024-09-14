import { MouseEvent, useEffect } from "react";
import BaseButton from "./BaseButton";
import KeyPad from "./KeyPad";
import SpanStyled from "./styledElements/SpanStyled";
import ValuePresenter from "./ValuePresenter";
import useWithdrawal, {
  WithdrawalQuery,
} from "../apiServices/hooks/useWithdrawal";
import useAmountStore from "../stateHooks/useAmountStore";
import Loading from "./Loading";

function AmountForm() {
  const { mutate, isPending } = useWithdrawal();
  const { amount } = useAmountStore();
  const payload: WithdrawalQuery = { amount: amount };
  const calculateWithdrawal = () => {
    mutate(payload);
  };
  useEffect(() => {}, [isPending]);

  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <SpanStyled $isLarge={false} className="m-5 text-center">
        Select Amount
      </SpanStyled>
      <ValuePresenter></ValuePresenter>
      <KeyPad></KeyPad>
      <BaseButton clickHandler={calculateWithdrawal}>Submit</BaseButton>
    </div>
  );
}

export default AmountForm;
