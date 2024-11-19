// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie, setCookie, removeCookie } from "../utils/manageCookies";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(getCookie());

  const setToken = (newToken: string | null) => {
    if (newToken) {
      setCookie(newToken); // ذخیره توکن
    } 
    setTokenState(newToken);
  };

  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// تعریف AuthGuard درون AuthContext
export const AuthGuard: React.FC = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/" replace />;
  // return token ? <WebSocketProvider><Outlet /></WebSocketProvider> : <Navigate to="/" replace />;

};
