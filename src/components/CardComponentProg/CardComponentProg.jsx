import React, { useState } from "react";
import styles from "./CardComponentProg.module.scss";
import polygonImgGreen from "../../image/PolygonGreenBig.svg"
import polygonImgRed from "../../image/PolygonRedBig.svg"
import { addDays, format } from 'date-fns';

const sum = 20;
const max = 15;
const min = 36;
const title = 'Крылышки куриные гриль по-мексикански, весовые, Россия';

export const CardComponentProg = () => {

    // костыли
    const [green, setGreen] = useState(true)
    const [save, setSave] = useState(false)
    const toggleSave = () => {
        setSave(!save);
    };
    const [isRub, setIsRub] = useState(true)
    //

    let currentDate = new Date();
    let dateTom = addDays(currentDate, 2);
    let dateTomTom = addDays(currentDate, 3);
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.']
    const getDayOfWeek = (date) => daysOfWeek[date.getDay()]
    const getMonthRus = (date) => months[date.getMonth()]

    return (
        <article className={styles.card}>
            <div className={styles.card__header}>
                <h3 className={styles.card__title}>{title}</h3>
                <button className={`${styles.card__save} ${save && styles.card__saveSelect}`} onClick={toggleSave}></button>
            </div>
            <p className={styles.card__subtitle}>Прогноз на завтра: </p>

            <span className={`${styles.card__prog} ${green ? styles.card__prog_type_green : styles.card__prog_type_red} `}>
                <img src={polygonImgGreen} alt="" />
                {sum}
                {isRub ? ' ₽' : ' шт'}
            </span>
            <div className={styles.card__footer}>
                <div className={styles.card__maxmin}>
                    <div>
                        <p className={styles.card__maxminName}>Послезавтра, {dateTom.getDay()} {getMonthRus(dateTom)} </p>
                        <span className={`${styles.card__maxminRes} ${styles.card__prog_type_red}`}>
                            <img src={polygonImgRed} alt="" className={styles.card__img_type_small} />
                            {max}
                            {isRub ? ' ₽' : ' шт'}
                        </span>
                    </div>
                    <div>
                        <p className={styles.card__maxminName}>{getDayOfWeek(dateTomTom)}, {dateTomTom.getDay()} {getMonthRus(dateTomTom)}</p>
                        <span className={`${styles.card__maxminRes} ${styles.card__prog_type_green}`}>
                            <img src={polygonImgGreen} alt="" className={styles.card__img_type_small} />
                            {min}
                            {isRub ? ' ₽' : ' шт'}
                        </span>
                    </div>
                </div>
                <button className={styles.card_diagram}></button>
            </div>
        </article>
    )
}