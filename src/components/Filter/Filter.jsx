import React, { useState } from "react";
import styles from "./Filter.module.scss";

export const Filter = ({ options, defaultTitle, title, size }) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div>
            <p className={styles.dropdown__title}>{title}</p>
            <div className={styles.dropdown} style={{ width: `${size}` }}>
                <div className={styles.dropdown__selected} onClick={toggleDropdown}>
                    {selectedOption || defaultTitle}
                    <button className={styles.dropdown__button}></button>
                </div>
                {isDropdownOpen && (
                    <ul className={styles.dropdown__options} style={{ width: `${size}` }}>
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionClick(option)} className={styles.dropdown__item}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
