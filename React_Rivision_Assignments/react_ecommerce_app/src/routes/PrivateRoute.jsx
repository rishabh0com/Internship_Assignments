import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {
    authState: { isLoggedIn },
  } = useContext(AuthContext);

  // console.log(isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
