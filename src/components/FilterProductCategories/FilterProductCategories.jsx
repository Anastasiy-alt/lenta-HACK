import React, { useState } from "react";
import styles from "./FilterProductCategories.module.scss";
import { ProductCategories } from "../ProductCategories/ProductCategories";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../../redux/slices/modalSlice.js";

const cookingLenta = [
  "Гриль",
  "Порционные блюда",
  "Соусы",
  "Гарниры",
  "Горячие блюда",
  "Корейские салаты",
  "Соленья",
  "Порционные салаты",
  "Мучные продукты, десерты",
  "Салаты и закуски",
];

const bakery = [
  "Пончики, кексы, шоколад",
  "Пироги",
  "Мелкоштучные изделия",
  "Национальные изделия",
];

const bread = [
  "Багеты и булочки",
  "Ржаной, ржано-пшеничный, пшеничный",
  "Бездрожжевой хлеб",
  "Хлеб с добавками",
  "Национальные хлеба",
];

const drinks = ["Холодные напитки"];

const fastFood = ["Сэндвичи, бутерброды, роллы в лаваше", "Фритюр"];

export const FilterProductCategories = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  //для тест кнопки закрытия
  const closePopup = () => {
    dispatch(modalOpen());
  };

  const [resetAll, setResetAll] = useState(false);

  const resetAllCategories = () => {
    setResetAll(!resetAll);
  };

  return (
    <section
      className={`${styles.categories} ${isOpen && styles.categories_open}`}
    >
      <header className={styles.categories__header}>
        <h1 className={styles.categories__title}>Выбери разделы СП</h1>
        <button
          className={styles.categories__reset}
          onClick={resetAllCategories}
        >
          Сбросить выбор
        </button>
        <button
          className={styles.categories__close}
          onClick={closePopup}
        ></button>
      </header>

      <article className={styles.categories__listBlock}>
        <div>
          <ProductCategories
            categoryTitle='Кулинария "Лента"'
            categoryTitleEnglish="CookingLenta"
            categoryItems={cookingLenta}
            resetAll={resetAll}
            setResetAll={setResetAll}
          />
        </div>

        <div>
          <ProductCategories
            categoryTitle="Выпечка"
            categoryTitleEnglish="Bakery"
            categoryItems={bakery}
            resetAll={resetAll}
            setResetAll={setResetAll}
          />
          <ProductCategories
            categoryTitle="Хлеб"
            categoryTitleEnglish="Bread"
            categoryItems={bread}
            resetAll={resetAll}
            setResetAll={setResetAll}
          />
        </div>

        <div>
          <ProductCategories
            categoryTitle="Напитки"
            categoryTitleEnglish="Drinks"
            categoryItems={drinks}
            resetAll={resetAll}
            setResetAll={setResetAll}
          />

          <ProductCategories
            categoryTitle="Продукция быстрого питания"
            categoryTitleEnglish="FastFood"
            categoryItems={fastFood}
            resetAll={resetAll}
            setResetAll={setResetAll}
          />
          <button className={styles.categories__button}>
            Показать результат
          </button>
        </div>
      </article>
    </section>
  );
};
