import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Parse the userInfo from localStorage, if any
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;

  // Correct the useState hook and initialize with userInfo
  const [user, setUser] = useState(userInfo);

  // Define the login function
  const login = (user) => {
    setUser(user);
    localStorage.setItem("userInfo", JSON.stringify(user));
  };

  // Define the logout function
  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
