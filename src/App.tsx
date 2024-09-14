import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Primary } from "./styles/ThemeMixin";
import AmountForm from "./components/AmountForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={Primary}>
      <GlobalStyle />
      <ToastContainer />

      <AmountForm />
    </ThemeProvider>
  );
}

export default App;
