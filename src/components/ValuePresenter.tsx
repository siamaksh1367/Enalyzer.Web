import useAmountStore from "../stateHooks/useAmountStore";
import SpanStyledWithWrap from "./styledElements/SpanStyledWithWrap";

function ValuePresenter() {
  const { amount } = useAmountStore();

  return (
    <SpanStyledWithWrap
      className="text-center mt-5"
      $isLarge={true}
      $isBold={true}
    >
      £ {amount}
    </SpanStyledWithWrap>
  );
}

export default ValuePresenter;
