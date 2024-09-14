import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Primary } from "./styles/ThemeMixin";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routse";

function App() {
  return (
    <ThemeProvider theme={Primary}>
      <GlobalStyle />
      <ToastContainer />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
