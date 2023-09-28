import {} from "react";
import styles from "./form.module.scss";
import { useSelector } from "react-redux";

export const Form = ({ title, handleClick }) => {
  const formValue = (value) => {
    dispatch(setUserFormValue(value.target.name, value.target.value));
  };

  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={formValue}
          placeholder="email"
        ></input>
        <input
          type="password"
          name="password"
          value={password}
          onChange={formValue}
          placeholder="password"
        ></input>
        <button onClick={() => handleClick(email, pass)}>{title}</button>
      </form>
    </>
  );
};
