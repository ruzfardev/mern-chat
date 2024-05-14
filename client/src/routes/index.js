import { createBrowserRouter } from "react-router-dom";
import { Register } from "../pages/Register.jsx";
import { Home } from "../pages/Home.jsx";
import { Login } from "../pages/Login.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
]);
