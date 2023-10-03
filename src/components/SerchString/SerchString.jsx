import React, { useRef } from "react";
import styles from "./serchString.module.scss";
import { useState } from "react";

export const SerchString = ({ inHeader }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(``);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setHasText(event.target.value);
  };

  const clear = () => {
    setHasText("");
  };

  const find = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.container} onFocus={handleFocus}>
      <input
        className={inHeader ? styles.serchString_header : styles.serchString}
        type="text"
        placeholder="Поиск товара"
        onChange={handleChange}
        value={hasText}
      ></input>
      {hasText.length !== 0 && (
        <div
          className={
            hasText.length && isFocused
              ? styles.button_container
              : styles.without_searchBtn_container
          }
        >
          <button className={styles.clear_button} onClick={clear}></button>
          <button
            className={
              isFocused ? styles.search_button : styles.search_button_disable
            }
            onClick={find}
          >
            Найти
          </button>
        </div>
      )}
    </div>
  );
};
