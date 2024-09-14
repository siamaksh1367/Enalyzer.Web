import BaseButton from "./BaseButton";
import KeyPad from "./KeyPad";
import SpanStyled from "./styledElements/SpanStyled";
import ValuePresenter from "./ValuePresenter";

function AmountForm() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <SpanStyled $isLarge={false} className="m-5 text-center">
        Select Amount
      </SpanStyled>
      <ValuePresenter></ValuePresenter>
      <KeyPad></KeyPad>
      <BaseButton>Submit</BaseButton>
    </div>
  );
}

export default AmountForm;
