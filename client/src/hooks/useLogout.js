import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return { logout };
};
