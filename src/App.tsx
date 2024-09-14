import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Primary } from "./styles/ThemeMixin";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({});
function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={Primary}>
          <GlobalStyle />
          <ToastContainer />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
