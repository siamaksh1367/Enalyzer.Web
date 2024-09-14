import React from "react";
import RoundButton from "./RoundButton";

function KeyPad() {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      {numbers.map((number) => (
        <RoundButton
          key={number}
          number={number.toString()}
          clickHandler={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        ></RoundButton>
      ))}
    </>
  );
}

export default KeyPad;
