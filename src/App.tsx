import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Primary } from "./styles/ThemeMixin";
import KeyPad from "./components/KeyPad";

function App() {
  return (
    <ThemeProvider theme={Primary}>
      <GlobalStyle />
      <h1>Hello</h1>
      <KeyPad />
    </ThemeProvider>
  );
}

export default App;
