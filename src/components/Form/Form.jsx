import { useState } from "react";
import styles from "./form.module.scss";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <div className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></input>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        ></input>
        <button onClick={handleClick}>{title}</button>
      </div>
    </>
  );
};
