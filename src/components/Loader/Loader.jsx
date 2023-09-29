import React from "react";
import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <svg className={styles.loader} viewBox="0 0 50 50">
      <circle
        className={styles.loader_circle}
        cx="25"
        cy="25"
        r="20"
        fill="none"
      />
    </svg>
  );
};
