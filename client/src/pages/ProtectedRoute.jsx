import { useAuth } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to={"/"} /> : children;
};
