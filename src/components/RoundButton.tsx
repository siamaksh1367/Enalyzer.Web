import { MouseEventHandler, ReactNode } from "react";
import RoundButtonPrimaryStyled from "./styledElements/RoundButtonPrimaryStyled";

interface RoundButtonProps {
  children: ReactNode;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}
function RoundButton({ children, clickHandler }: RoundButtonProps) {
  return (
    <RoundButtonPrimaryStyled
      onClick={clickHandler}
      className="rounded-circle m-1"
    >
      {children}
    </RoundButtonPrimaryStyled>
  );
}

export default RoundButton;
