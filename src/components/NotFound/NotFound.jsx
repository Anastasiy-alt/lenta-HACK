import React from "react";
import styles from "./NotFound.module.scss";
import logo from "../../image/logoLenta.png"

export const NotFound = () => {

    return (
        <section className={styles.notfound}>
            <div className={styles.notfound__circle}></div>
            <img src={logo} alt="Логотип Лента." className={styles.notfound__logo} />
            <article className={styles.notfound__mainblock}>
                <h1 className={styles.notfound__title}>404</h1>
                <h2 className={styles.notfound__subtitle}>Увы, такой страницы не существует</h2>
                <p className={styles.notfound__text}>Вернитесь на главную страницу и попробуйте найти нужную информацию там</p>
                <a className={styles.notfound__button} href="" >Перейти на главную</a> 
                {/* перевод на страницу прогноза  */}
            </article>
        </section>
    )
}