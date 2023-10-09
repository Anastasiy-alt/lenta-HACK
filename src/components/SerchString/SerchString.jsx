import React, { forwardRef, useState } from "react";
import styles from "./serchString.module.scss";

export const SerchString = forwardRef(({ onSearch, inHeader }, ref) => {

  const find = (event) => {
    event.preventDefault();
    const text = event.target.elements.search.value;
    if (text === '') { // проверям, пустой ли input
      onSearch(''); // вызываем с пустым значением, если поле пустое
    } else {
      onSearch(text); // иначе со значением из инпута
    }
  };

  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(``);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (event) => {
    setHasText(event.target.value);
  };

  const clear = () => {
    setHasText("");
    onSearch(''); // подразумеваем, что очистка поля также приводит к отображению всех карточек
  };

  return (
    <div
      className={styles.container}
      id="searchString"
      ref={ref}
    >
      <form onSubmit={find}>
        <input
          name="search"
          className={inHeader ? styles.serchString_header : styles.serchString}
          type="text"
          placeholder="Поиск товара"
          onFocus={handleFocus}
          onChange={handleChange} // обработчик изменений значение инпута
          value={hasText} // используем значение из состояния
        />
        {hasText.length !== 0 && (
          <div
            className={
              hasText.length && isFocused
                ? styles.button_container
                : styles.without_searchBtn_container
            }
          >
            <button className={styles.clear_button} onClick={clear}></button>
            <button type="submit" className={isFocused ? styles.search_button : styles.search_button_disable}> 
              Найти
            </button>
          </div>
        )}
      </form>
    </div>
  );
});

