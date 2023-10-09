import React from "react";
import styles from "./forgot.module.scss";
import restoreImage from "../../image/restore_pass_img.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Forgot = () => {
  const { email } = useSelector((store) => store.user.form);
  return (
    <div className={styles.forgot}>
      <h1 className={styles.title}>Восстановить пароль</h1>
      <img className={styles.img} src={restoreImage} />
      <p className={styles.text}>
        На электронную почту <span className={styles.span}>{email}</span>{" "}
        отправлен новый пароль для входа. Сохраните его и используйте для входа
        в сервис
      </p>
      <Link className={styles.button} to="/login">
        Назад
      </Link>
    </div>
  );
};
