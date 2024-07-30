import React, { createContext, useContext } from "react";

const AuthContext = createContext({ user: "" });

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  return (
    <AuthContext.Provider
      value={{
        user: "Shivang",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
