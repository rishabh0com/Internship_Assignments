import React, { useState, useContext, useReducer } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";
import Loading from "./Loading";
import {useNavigate} from 'react-router-dom';

function formReducer(prevState, action) {
  // Reducer function to handle the form state changes based on the action type and payload passed to it.
  switch (action.type) {
    case "email":
      return { ...prevState, email: action.payload };
    case "password":
      return { ...prevState, password: action.payload };
    case "reset":
      return { ...prevState, email: "", password: "" };
    case "loading":
      return { ...prevState, loading: true };
    case "error":
      return { ...prevState, error: action.payload, loading: false };
    case "success":
      return { ...prevState, loading: false, error: "" };
    default:
      return prevState;
  }
}

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const [state, dispatch] = useReducer(formReducer, {
    // useReducer hook to manage the form state and dispatch the action to the reducer function.
    email: "",
    password: "",
    loading: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };
  const handleLogin = async () => {
    // console.log(state);
    dispatch({ type: "loading" });
    try {
      const { data } = await axios({
        url: "https://reqres.in/api/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { email: state.email, password: state.password },
      });
      login(data.token);
      console.log(data);
      dispatch({ type: "success" });
      navigate('/');
    } catch (error) {
      dispatch({ type: "error", payload: error.response.data.error });
      console.log(error.response.data);
    }
    dispatch({ type: "reset" });
  };

  const { error, loading } = state;
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-3  max-w-md mt-20">
      <h2 className="text-2xl text-center text-green-500 font-bold mb-6">
        Log In
      </h2>
      <div className="bg-white drop-shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-green-500"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-green-500 "
            name="password"
            type="password"
            placeholder="Enter your password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <p className="text-red-600 text-sm  m-1 mb-3">
          {error}
        </p>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogin}>
          Log In
        </button>
        <p className="text-green-600 text-sm italic mt-4">
          Note : The login functionality uses the ReqRes Login API for
          demonstration purposes.
        </p>
      </div>
    </div>
  );
};

export default Login;
