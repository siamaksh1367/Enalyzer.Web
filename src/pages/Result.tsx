import DivStyled from "../components/styledElements/DivStyled";
import { useLocation } from "react-router-dom";
import Notes from "./../components/Notes";
import { Withdrawal } from "./../apiServices/services/WithdrawalService";

function Result() {
  const location = useLocation();
  const state = location.state as Withdrawal[];

  return (
    <DivStyled className="container">
      <div className="row">
        <div className="col-4">
          {<Notes notes={state.filter((x) => x.location === 1)} />}
        </div>
        <div className="col-4">
          {<Notes notes={state.filter((x) => x.location === 2)} />}
        </div>
        <div className="col-4">
          {<Notes notes={state.filter((x) => x.location === 3)} />}
        </div>
      </div>
    </DivStyled>
  );
}

export default Result;
