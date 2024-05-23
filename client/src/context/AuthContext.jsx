import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const fetchUser = async () => {
  //     try {
  //         const response = await fetch("/api/auth/me");
  //         const result = await response.json();
  //         if (response.ok) {
  //         setUser(result);
  //         }
  //     } finally {
  //         setLoading(false);
  //     }
  //     };
  //     fetchUser();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
