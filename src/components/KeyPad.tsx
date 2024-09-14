import RoundButton from "./RoundButton";
import KeyPadDivStyled from "./styledElements/KeyPadDivStyled";
import useAmountStore from "../stateHooks/useAmount";
import ImageButton from "./ImageButton";

function KeyPad() {
  const numbers = Array.from({ length: 11 }, (_, i) => i + 1);

  const { addDigit, removeDigit } = useAmountStore();

  const modifyAmount = (number: number) => {
    return () => {
      number === 10 ? addDigit(number.toString()) : removeDigit();
    };
  };

  return (
    <div className="container">
      <KeyPadDivStyled className="row d-flex justify-content-start ">
        {numbers.map((number) => (
          <div className="col-4 p-1 m-0" key={number}>
            <RoundButton clickHandler={modifyAmount(number)}>
              {number === 11 && 0}
              {number !== 11 && number !== 10 && number}
              {number === 10 && <ImageButton></ImageButton>}
            </RoundButton>
          </div>
        ))}
      </KeyPadDivStyled>
    </div>
  );
}

export default KeyPad;
