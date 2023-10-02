import React from "react";
import styles from "./checkBox.module.scss";

export const CheckBox = ({ id, checked, onChange }) => {
  return (
    <>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </>
  );
};
