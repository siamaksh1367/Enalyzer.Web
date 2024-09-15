import DivStyled from "../components/styledElements/DivStyled";
import { useLocation } from "react-router-dom";
import Notes from "./../components/Notes";
import { Withdrawal } from "./../apiServices/services/WithdrawalService";

interface WithdrawalsProps {
  Withdrawals: Withdrawal[];
}
function Withdrawals({ Withdrawals }: WithdrawalsProps) {
  return (
    <DivStyled className="container">
      <div className="row g-4 g-md-4 ">
        {
          <div className="col-12 col-md-4">
            {<Notes notes={Withdrawals.filter((x) => x.location === 1)} />}
          </div>
        }
        {
          <div className="col-12 col-md-4">
            {<Notes notes={Withdrawals.filter((x) => x.location === 2)} />}
          </div>
        }
        {
          <div className="col-12 col-md-4">
            {<Notes notes={Withdrawals.filter((x) => x.location === 3)} />}
          </div>
        }
      </div>
    </DivStyled>
  );
}

export default Withdrawals;
