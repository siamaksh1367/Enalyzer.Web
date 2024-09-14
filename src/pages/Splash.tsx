import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpanStyled from "../components/styledElements/SpanStyled";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/input");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="vh-100 vw-100 flex-column d-flex justify-content-center align-items-center">
      <SpanStyled $isLarge={true}>Enalyzer</SpanStyled>
      <SpanStyled $isLarge={true}>ATM</SpanStyled>
    </div>
  );
}

export default Splash;
