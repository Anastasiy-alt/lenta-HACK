import React, { useEffect } from "react";
import styles from "./selectedStoreCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { loadState } from "../../utils/saveState";
import { setSelectedStore } from "../../redux/slices/shopSlice";

export const SelectedStoreCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedStore(loadState("selectedStore")));
  }, []);

  const { selectedStore } = useSelector((store) => store.shop);
  return (
    <div className={styles.container}>
      <div className={styles.selectedStoreCard}>
        <h2 className={styles.title}>Торговые комплексы</h2>
        <div className={styles.selected}>
          <ul className={styles.selected_list}>
            {selectedStore.map((item) => (
              <li className={styles.selected_item} key={nanoid(6)}>
                {item.store}
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.change_button}>Изменить</button>
      </div>
      <button className={styles.upload_button}>Выгрузить в Excel</button>
    </div>
  );
};
