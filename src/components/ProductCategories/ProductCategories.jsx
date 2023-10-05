import React, { useState, useEffect } from "react";
import styles from "./ProductCategories.module.scss";

export const ProductCategories = ({
  categoryTitle,
  categoryTitleEnglish,
  categoryItems,
  resetAll,
  setResetAll,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const saveToLocalStorage = (newItems) => {
    localStorage.setItem(`${categoryTitleEnglish}`, JSON.stringify(newItems));
  };

  const selectAllHandler = () => {
    const newItems = { ...checkedItems };
    setSelectAll(!selectAll);

    Object.keys(newItems).forEach((key) => {
      newItems[key] = !selectAll;
    });

    setCheckedItems(newItems);
    saveToLocalStorage(newItems);
  };

  const selectItemHandler = (name) => {
    setCheckedItems((prevItems) => {
      const newState = { ...prevItems, [name]: !prevItems[name] };
      setSelectAll(Object.values(newState).every((val) => val));
      saveToLocalStorage(newState);
      return newState;
    });
  };

  useEffect(() => {
    const existing = JSON.parse(
      localStorage.getItem(`${categoryTitleEnglish}`) || "{}"
    );
    let initialItemsState = {};

    categoryItems.forEach(
      (item) => (initialItemsState[item] = existing[item] || false)
    );
    setCheckedItems(initialItemsState);
    setSelectAll(Object.values(initialItemsState).every((val) => val));
  }, [categoryTitleEnglish, categoryItems]);

  useEffect(() => {
    if (resetAll) {
      const newItems = { ...checkedItems };
      Object.keys(newItems).forEach((key) => {
        newItems[key] = false;
      });

      setSelectAll(false);
      setResetAll(false);

      setCheckedItems(newItems);
      saveToLocalStorage(newItems);
    }
  }, [resetAll]);

  return (
    <>
      <p className={styles.categories__listTitle}>
        <label htmlFor={`SelectAll${categoryTitleEnglish}`}>
          {categoryTitle}
          <input
            type="checkbox"
            id={`SelectAll${categoryTitleEnglish}`}
            className={styles.categories__itemCheckHidden}
            onChange={selectAllHandler}
            checked={selectAll}
          />
          <span className={styles.categories__itemCheck}></span>
        </label>
      </p>
      <ul className={styles.categories__list}>
        {categoryItems.map((option, index) => (
          <li
            key={`${index}${categoryTitleEnglish}`}
            className={styles.categories__item}
          >
            <label htmlFor={`${index}${categoryTitleEnglish}`}>
              {option}
              <input
                type="checkbox"
                id={`${index}${categoryTitleEnglish}`}
                className={styles.categories__itemCheckHidden}
                checked={checkedItems[option] || false}
                onChange={() => selectItemHandler(option)}
              />
              <span className={styles.categories__itemCheck}></span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
