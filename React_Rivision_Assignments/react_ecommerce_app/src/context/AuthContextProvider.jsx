import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: true,
    token: null,
  });

  const login = (token) => { // login function with token parameter to set token in authState object and isLoggedIn to true 
    setAuthState({
      isLoggedIn: true,
      token: token,
    });
  };
  const logout = () => { // logout function to set isLoggedIn to false and token to null in authState object 
    setAuthState({
      isLoggedIn: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
