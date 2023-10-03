import React from "react";
import styles from "./selectedStoreCard.module.scss";

export const SelectedStoreCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectedStoreCard}>
        <h2 className={styles.title}>Торговые комплексы</h2>
        <div className={styles.selected}>
          <ul className={styles.selected_list}>
            <li className={styles.selected_item}>
              ул. 1-я Красноармейская, д. 15, лит. А
            </li>
          </ul>
        </div>
        <button className={styles.change_button}>Изменить</button>
      </div>
      <button className={styles.upload_button}>Выгрузить в Excel</button>
    </div>
  );
};
