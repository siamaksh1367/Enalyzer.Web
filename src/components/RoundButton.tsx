import { MouseEventHandler, ReactNode } from "react";
import ButtonPrimaryStyled from "./styledElements/ButtonStyled";

interface RoundButtonProps {
  children: ReactNode;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}
function RoundButton({ children, clickHandler }: RoundButtonProps) {
  return (
    <ButtonPrimaryStyled onClick={clickHandler} className="rounded-circle m-1">
      {children}
    </ButtonPrimaryStyled>
  );
}

export default RoundButton;
