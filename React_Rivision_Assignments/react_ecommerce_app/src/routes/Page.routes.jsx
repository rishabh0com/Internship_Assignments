import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Products from "../components/Products";
import SinglePageProduct from "../components/SinglePageProduct";
import PrivateRoute from "./PrivateRoute";

const PageRoutes = () => {
  const auth = true;
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/:product_id"
        element={
          <PrivateRoute>
            <SinglePageProduct />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default PageRoutes;
