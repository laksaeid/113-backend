import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../components";
import Home from "../pages/home";
import Login from "../pages/login";
import Cookies from "js-cookie";

const router = createBrowserRouter([
  {
    element: Cookies.get("access") ? <Layout /> : <Navigate to={"/login"} />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: !Cookies.get("access") ? <Login /> : <Navigate to={"/"} />,
  },
]);
export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
