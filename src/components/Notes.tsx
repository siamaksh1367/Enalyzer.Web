import Category from "./Category";
import DivStyled from "./styledElements/DivStyled";
import NoteImage from "./../assets/500-bill.png";
import { Withdrawal } from "../apiServices/services/WithdrawalService";

interface Notes {
  notes: Withdrawal[];
}

function Notes({ notes }: Notes) {
  return (
    <DivStyled className="d-flex flex-column justify-content-center align-align-items-center">
      {notes.map((x) => (
        <Category
          key={x.quantity * x.value}
          quantity={x.quantity}
          value={x.value}
          imageSource={NoteImage}
          contrast={true}
        />
      ))}
    </DivStyled>
  );
}

export default Notes;
