import { MouseEventHandler } from "react";
import ButtonPrimaryStyled from "./styledElements/ButtonStyled";

interface RoundButtonProps {
  number: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}
function RoundButton({ number, clickHandler }: RoundButtonProps) {
  return (
    <ButtonPrimaryStyled onClick={clickHandler} className="rounded-circle">
      {number}
    </ButtonPrimaryStyled>
  );
}

export default RoundButton;
