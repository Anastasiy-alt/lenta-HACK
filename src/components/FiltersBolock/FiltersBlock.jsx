import React, { useState } from "react";
import styles from "./FilterBlock.module.scss";
import { Filter } from "../Filter/Filter";

const options1 = ["Единицы измерения", "Рубли"];
const defaultTitle1 = 'Единицы измерения'
const title1 = 'Формат данных'
const options2 = ["Общее (шт, кг, г)", "Штуки", "Килограммы", "Граммы"];
const defaultTitle2 = 'Общее (шт, кг, г)'
const title2 = 'Тип данных'
const options3 = ["Карточки", "Таблицы"];
const defaultTitle3 = 'Карточки'
const title3 = 'Вид'

export const FilterBlock = () => {
    const status = false



    return (
        <article className={styles.filters}>
            <Filter
            options={options1}
            defaultTitle={defaultTitle1}
            title={title1}
            size= '258px' />
            <Filter
            options={options2}
            defaultTitle={defaultTitle2}
            title={title2}
            size='224px' />
            <Filter
            options={options3}
            defaultTitle={defaultTitle3}
            title={title3}
            size='163px' />

            <button className={styles.filters__button} disabled={status}>Применить фильтр</button>
        </article>
    )
}