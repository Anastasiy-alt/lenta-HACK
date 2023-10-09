import React from "react";
import styles from "./login.module.scss";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/slices/userSlice";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { form, loader } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(logIn({ form: form, callback: () => navigate("/shop") }));
  };

  return loader ? (
    <div className={styles.login_loader}>
      <Loader />
    </div>
  ) : (
    <div className={styles.login}>
      <h1 className={styles.title}>Авторизация</h1>
      <p className={styles.text}>
        Пожалуйста, введите учетные <br /> данные для входа
      </p>
      <Form title="Войти" handleClick={handleLogin} />
    </div>
  );
};
