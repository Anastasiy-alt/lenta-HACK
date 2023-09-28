import React from "react";
import styles from "./login.module.scss";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/slices/userSlice";

export const Login = () => {
  const { form } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogin = (form) => {
    dispatch(logIn(form), () => navigate("/"));
  };
  return (
    <>
      <Form title="sign in" handleClick={handleLogin(form)} />
    </>
  );
};
