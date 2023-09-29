import {} from "react";
import styles from "./form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserFormValue } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";

export const Form = ({ title, handleClick }) => {
  const dispatch = useDispatch();
  // const { email, password } = useSelector((store) => store.user.form);

  const formValue = (value) => {
    dispatch(setUserFormValue(value.target.name, value.target.value));
  };

  return (
    <>
      <form className={styles.form} onClick={handleClick}>
        <p className={styles.text}>Логин</p>
        <input
          type="email"
          name="email"
          // value={email}
          // onChange={formValue}
          placeholder="ivanov@lenta.com"
          className={styles.input}
        ></input>
        <p className={styles.text}>Пароль</p>
        <input
          type="password"
          name="password"
          // value={password}
          // onChange={formValue}
          placeholder="*********"
          className={styles.input}
        ></input>
        <div className={styles.checkbox_container}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="passCheckbox"
          ></input>
          <label className={styles.label} for="passCheckbox">
            Запомнить меня
          </label>
          <Link className={styles.link} to="/forgot">
            Не помню пароль
          </Link>
        </div>
        <button className={styles.button} type="submit">
          {title}
        </button>
      </form>
    </>
  );
};
