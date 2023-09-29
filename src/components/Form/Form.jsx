import {} from "react";
import styles from "./form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserFormValue } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";

export const Form = ({ title, handleClick }) => {
  const dispatch = useDispatch();
  const { form, error } = useSelector((store) => store.user);

  const formValue = (value) => {
    dispatch(
      setUserFormValue({ name: value.target.name, value: value.target.value })
    );
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleClick}>
        <p className={styles.text}>Логин</p>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={formValue}
          placeholder="ivanov@lenta.com"
          className={styles.input}
        ></input>
        <p className={styles.text}>Пароль</p>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={formValue}
          placeholder="*********"
          className={styles.input}
        ></input>
        <div className={styles.checkbox_container}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="passCheckbox"
          ></input>
          <label className={styles.label} htmlFor="passCheckbox">
            Запомнить меня
          </label>
          <Link className={styles.link} to="/forgot">
            Не помню пароль
          </Link>
        </div>
        <p className={error ? styles.error_text : styles.error_text_hidden}>
          Ошибка входа. Проверьте правильность
          <br /> логина и пароля
        </p>
        <button className={styles.button} type="submit">
          {title}
        </button>
      </form>
    </>
  );
};
