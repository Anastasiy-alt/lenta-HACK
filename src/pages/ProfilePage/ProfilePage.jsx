import { Header } from "../../components/Header/Header";
import styles from "./ProfilePage.module.scss";
import { SelectedStoreCard } from "../../components/SelectedStoreCard/SelectedStoreCard";
import { useSelector } from "react-redux";
import { getCookie } from "../../utils/coockie";
import { useState } from "react";

export const ProfilePage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.profile_container}>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>Личный кабинет</h1>

        <form className={styles.form}>
          <p className={styles.form_title}>Информация сотрудника</p>
          <p className={styles.form_text}>Логин</p>
          <input
            className={styles.form_input}
            type="text"
            defaultValue={getCookie("email")}
            placeholder={"email"}
          ></input>
          <p className={styles.form_text}>Пароль</p>

          <div className={styles.pass_container}>
            <input
              className={styles.form_input}
              type={showPassword ? "text" : "password"}
              defaultValue={getCookie("password")}
              placeholder={getCookie("password")}
            ></input>
            <button
              className={
                showPassword
                  ? styles.form_input_showBtn
                  : styles.form_input_showBtn_hidden
              }
              onClick={toggleShowPassword}
            ></button>
          </div>

          <button className={styles.form_btn}>Изменить</button>
        </form>

        <ul className={styles.history}>
          <p className={styles.history_title}>История выгрузки</p>
          <li className={styles.history_item}>
            <p>28 сентября 2023</p>
            <p>20:05</p>
            <button className={styles.history_button}>
              Выгрузить повторно
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.store_container}>
        <SelectedStoreCard />
      </div>
      <button className={styles.exit_btn}>Выйти из аккаунта</button>
    </div>
  );
};
