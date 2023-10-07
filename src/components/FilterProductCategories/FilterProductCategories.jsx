import React, { useState } from "react";
import styles from "./FilterProductCategories.module.scss";
import { ProductCategories } from "../ProductCategories/ProductCategories";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen, modalClose } from "../../redux/slices/modalSlice.js";
import { nanoid } from "nanoid";

export const FilterProductCategories = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const { group } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  //для тест кнопки закрытия
  const closePopup = () => {
    dispatch(modalClose());
  };

  const [resetAll, setResetAll] = useState(false);

  const resetAllCategories = () => {
    setResetAll(!resetAll);
  };

  return (
    <section
      className={`${styles.categories} ${isOpen && styles.categories_open}`}
    >
      <div className={styles.categories__header}>
        <h1 className={styles.categories__title}>Выбери разделы СП</h1>

        <button
          className={styles.categories__close}
          onClick={closePopup}
        ></button>
      </div>

      <article className={styles.categories__listBlock}>
        {Object.entries(group).map(([groupTitle, categories]) => (
          <div className={styles.categories__item} key={nanoid(6)}>
            <ProductCategories
              categoryTitle={groupTitle}
              id={Object.keys(group).indexOf(groupTitle)} ///
              categoryItems={categories}
              resetAll={resetAll}
              setResetAll={setResetAll}
            />
          </div>
        ))}
        <div className={styles.btn_container}>
          <button
            className={styles.categories__reset}
            onClick={resetAllCategories}
          >
            Сбросить выбор
          </button>
          <button className={styles.categories__button}>
            Показать результат
          </button>
        </div>
      </article>
    </section>
  );
};
