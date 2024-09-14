import useAmountStore from "../stateHooks/useAmountStore";
import SpanStyled from "./styledElements/SpanStyled";

function ValuePresenter() {
  const { amount } = useAmountStore();

  return (
    <SpanStyled className="text-center mt-5" $isLarge={true}>
      £ {amount}
    </SpanStyled>
  );
}

export default ValuePresenter;
