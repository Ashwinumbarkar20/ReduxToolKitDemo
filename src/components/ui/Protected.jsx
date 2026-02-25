import React from "react";
import { useSelector } from "react-redux";
import Login from "../../Pages/Login";
import { Navigate } from "react-router-dom";
export default function Protected({ children }) {
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  console.log("is logged in")
  return isLoggedIn ? children : <Navigate to="/" />;
}
