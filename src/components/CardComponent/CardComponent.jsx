import React, { useState, useEffect } from "react";
import styles from "./CardComponent.module.scss";

const options = ['12 мес', '7 нед', '14 дн']

export const CardComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('12 мес');
    const dropdownValues = {
        '12 мес': ['7 нед', '14 дн'],
        '7 нед': ['12 мес', '14 дн'],
        '14 дн': ['12 мес', '7 нед'],
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectValue = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    const remainingValues = dropdownValues[selectedValue];


    return (
        <article className={styles.card}>
            <h3 className={styles.card__title}>Крылышки куриные гриль по-мексикански, весовые, Россия</h3>
            <div className={styles.card__wape}>
                <p className={`${styles.card__subtitle} ${styles.card__subtitle_type_wape}`}>Среднее Значение Wape за</p>
                <div className={styles.dropdown} onClick={toggleDropdown}>
                    <div className={styles.dropdown__selected}>
                        {selectedValue}
                        <button className={styles.dropdown__button}></button>
                    </div>
                    {isOpen && (
                        <ul className={`${styles.dropdown__list} ${isOpen && styles.dropdown__list_open}`}>
                        {/* <ul className={styles.dropdown__list}> */}
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
        </article>
    )
}