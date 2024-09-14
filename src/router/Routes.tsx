import { createBrowserRouter } from "react-router-dom";
import Splash from "../pages/Splash";
import Input from "../pages/Input";
import Result from "./../pages/Result";

const router = createBrowserRouter([
  {
    path: "/splash",
    element: <Splash />,
  },
  {
    path: "/input",
    element: <Input />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);
export default router;
