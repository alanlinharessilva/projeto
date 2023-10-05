import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/Products";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/produtos", element: <Products /> }],
  },
]);
