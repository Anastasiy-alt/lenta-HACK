import {} from "react";
import styles from "./form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUserFormValue } from "../../redux/slices/userSlice";

export const Form = ({ title, handleClick }) => {
  dispatch = useDispatch();

  const formValue = (value) => {
    dispatch(setUserFormValue(value.target.name, value.target.value));
  };

  return (
    <>
      <form className={styles.form} onClick={handleClick}>
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
        <button type="submit">{title}</button>
      </form>
    </>
  );
};
