import React from "react";
import styles from "./login.module.scss";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/slices/userSlice";

export const Login = () => {
  // const { form } = useSelector((store) => store.user);
  // const dispatch = useDispatch();

  // const handleLogin = (form) => {
  //   dispatch(logIn(form), () => navigate("/"));
  // };
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Авторизация</h1>
      <p className={styles.text}>
        Пожалуйста, введите учетные <br /> данные для входа
      </p>
      <Form title="Войти" />
    </div>
  );
};
