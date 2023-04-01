import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Order from "../components/Pages/Order/Order";
import Shop from "../components/Pages/Shop/Shop";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },
]);

export default routes;
