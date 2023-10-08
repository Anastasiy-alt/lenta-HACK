import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import phone from "../../image/phone.svg"
import chevron from "../../image/FAQchevron-down.svg"
import UserSlice from "../../redux/slices/userSlice";


export const FAQ = ({close}) => {

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const toggleOpen1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleOpen2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleOpen3 = () => {
        setIsOpen3(!isOpen3);
    };

    return (
        <>
            <section className={styles.faq}>
                <div className={styles.faq__top}>
                    <button className={styles.faq__close} onClick={close}></button>
                    <p className={styles.faq__number}>
                        <img src={phone} alt="Иконка телефонной трубки." className={styles.faq__phone} />
                        8 800 000 00 00</p>
                </div>

                <h1 className={styles.faq__title}>FAQ</h1>
                <h3 className={styles.faq__subtitle}>Часто задаваемые вопросы</h3>

                <ul className={styles.faq__list}>
                    <li className={styles.faq__item}>
                        <label className={styles.faq__titleBlock} htmlFor={`open1`}>
                            <h3 className={styles.faq__itemTitle}>Как выбрать ТК (торговый комплекс)</h3>
                            <input
                                type="checkbox"
                                id={`open1`}
                                className={styles.faq__itemCheckHidden}
                                onChange={toggleOpen1}
                                checked={isOpen1}
                            />
                            <span className={styles.faq__itemChevron}></span>
                        </label>
                        {isOpen1 &&
                            (
                                <ul className={styles.faq__textBlock}>
                                    <li className={styles.faq__text}>При открытии сервиса появляется окно с возможностью выбора ТК</li>
                                    <li className={styles.faq__text}>Есть поиск города/области</li>
                                    <li className={styles.faq__text}>Ниже есть строка поиска с отображением результатов ниже</li>
                                    <li className={styles.faq__text}>Для выбора ТК необходимо поставить галочку рядом с нужным ТК</li>
                                    <li className={styles.faq__text}>Для выбора всех ТК выбирайте одноимённую строку (поставить галочку)</li>
                                </ul>
                            )
                        }
                    </li>
                    <li className={styles.faq__item}>
                        <label className={styles.faq__titleBlock} htmlFor={`open2`}>
                            <h3 className={styles.faq__itemTitle}>Как пользоваться поиском</h3>
                            <input
                                type="checkbox"
                                id={`open2`}
                                className={styles.faq__itemCheckHidden}
                                onChange={toggleOpen2}
                                checked={isOpen2}
                            />
                            <span className={styles.faq__itemChevron}></span>
                        </label>
                        {isOpen2 &&
                            (
                                <ul className={styles.faq__textBlock}>
                                    <li className={styles.faq__text}>При открытии сервиса под заголовком страницы есть строка поиска </li>
                                    <li className={styles.faq__text}>Начните вводить наименование товара и выберете в выпадающем списке нужный</li>
                                    <li className={styles.faq__text}>Либо введите наименование товара полностью и нажмите кнопку найти</li>
                                </ul>
                            )
                        }
                    </li>
                    <li className={styles.faq__item}>
                        <label className={styles.faq__titleBlock} htmlFor={`open3`}>
                            <h3 className={styles.faq__itemTitle}>Как пользоваться фильтром</h3>
                            <input
                                type="checkbox"
                                id={`open3`}
                                className={styles.faq__itemCheckHidden}
                                onChange={toggleOpen3}
                                checked={isOpen3}
                            />
                            <span className={styles.faq__itemChevron}></span>
                        </label>
                        {isOpen3 &&
                            (
                                <ul className={styles.faq__textBlock}>
                                    <li className={styles.faq__text}>При открытии сервиса под заголовком страницы, справа от поиска — кнопка Выбрать разделы</li>
                                    <li className={styles.faq__text}>При нажатии на кнопку появляется модальное окно с категориями товаров</li>
                                    <li className={styles.faq__text}>Начните отмечать галочками разделы СП или подкатегории</li>
                                    <li className={styles.faq__text}>При завершении выбора — нажмите кнопку Показать результат</li>
                                </ul>
                            )
                        }
                    </li>
                </ul>
            </section>
        </>
    )
}