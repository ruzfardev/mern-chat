import { useState } from "react";
import { createStandaloneToast } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext.jsx";
const { toast } = createStandaloneToast();
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const login = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }
      localStorage.setItem("user", JSON.stringify(result));
      setUser(result);
      return result;
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};
