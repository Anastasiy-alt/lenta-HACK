import React, { useState } from "react";
import styles from "./CardComponentStat.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen, modalType } from "../../redux/slices/modalSlice";
import { setCardName } from "../../redux/slices/cardSlice";

const wape = 13;
const max = 16;
const min = 10;
// const title = "Крылышки куриные гриль по-мексикански, весовые, Россия";

export const CardComponentStat = ({ title }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [selectedValue, setSelectedValue] = useState("12 мес");
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  const dropdownValues = {
    "12 мес": ["7 нед", "14 дн"],
    "7 нед": ["12 мес", "14 дн"],
    "14 дн": ["12 мес", "7 нед"],
  };

  const openDiagram = () => {
    dispatch(modalOpen());
    dispatch(modalType("diagram"));
    dispatch(setCardName(title));
  };

  const toggleDropdown = () => {
    setIsToggle(!isToggle);
  };

  const selectValue = (value) => {
    setSelectedValue(value);
    setIsToggle(false);
  };

  const remainingValues = dropdownValues[selectedValue];

  // костыли
  const [green, setGreen] = useState(true);
  const [save, setSave] = useState(false);
  const toggleSave = () => {
    setSave(!save);
  };
  //

  return (
    <article className={styles.card} onClick={openDiagram}>
      <div className={styles.card__header}>
        <h3 className={styles.card__title}>{title}</h3>
        <button
          className={`${styles.card__save} ${save && styles.card__saveSelect}`}
          onClick={toggleSave}
        ></button>
      </div>
      <div className={styles.card__wape}>
        <p className={styles.card__subtitle}>Среднее Значение Wape за</p>
        <div className={styles.dropdown} onClick={toggleDropdown}>
          <div className={styles.dropdown__selected}>
            {selectedValue}
            <button className={styles.dropdown__button}></button>
          </div>
          {isToggle && (
            <ul
              className={`${styles.dropdown__list} ${
                isToggle && styles.dropdown__list_open
              }`}
            >
              {remainingValues.map((value) => (
                <li
                  key={value}
                  className={styles.dropdown__item}
                  onClick={() => selectValue(value)}
                >
                  {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <span
        className={`${styles.card__stat} ${
          green ? styles.card__stat_type_green : styles.card__stat_type_red
        } `}
      >
        {wape}%
      </span>
      <div className={styles.card__footer}>
        <div className={styles.card__maxmin}>
          <div>
            <p className={styles.card__maxminName}>Максимальное</p>
            <span
              className={`${styles.card__maxminRes} ${styles.card__stat_type_red}`}
            >
              {max}%
            </span>
          </div>
          <div>
            <p className={styles.card__maxminName}>Минимальное</p>
            <span
              className={`${styles.card__maxminRes} ${styles.card__stat_type_green}`}
            >
              {min}%
            </span>
          </div>
        </div>
        <button className={styles.card_diagram}></button>
      </div>
    </article>
  );
};
