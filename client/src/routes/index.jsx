import { createBrowserRouter } from "react-router-dom";
import { Register } from "../pages/Register.jsx";
import { Home } from "../pages/Home.jsx";
import { Login } from "../pages/Login.jsx";
import { CenterContainer } from "../components/container.jsx";
import { ProtectedRoute } from "../pages/ProtectedRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CenterContainer>
        <Home />
      </CenterContainer>
    ),
  },
  {
    path: "/login",
    element: (
      <CenterContainer>
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      </CenterContainer>
    ),
  },
  {
    path: "/register",
    element: (
      <CenterContainer>
        <ProtectedRoute>
          <Register />
        </ProtectedRoute>
      </CenterContainer>
    ),
  },
]);
