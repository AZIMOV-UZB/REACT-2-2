import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = useSelector((state) => state.token);
  return token ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
