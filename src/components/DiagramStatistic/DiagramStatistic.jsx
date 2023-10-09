import React, { useEffect, useState } from "react";
import styles from "./diagramStatistic.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { LineChart } from "../LineChart/LineChart";
import { nanoid } from "nanoid";
import { getStatisticData } from "../../redux/slices/cardSlice";
import { modalClose } from "../../redux/slices/modalSlice";

export const DiagramStatistic = () => {
  const { currentCardName, statisticData } = useSelector((store) => store.card);
  const { selectedStore } = useSelector((store) => store.shop);
  const dispatch = useDispatch();

  const [cardStatistic, setCardStatistic] = useState({});
  const [dateFormat, setDateFormat] = useState("day");
  const [dateRange, setDateRange] = useState(1000);

  useEffect(() => {
    if (statisticData) {
      // Создайте массив наборов данных, по одному для каждого магазина
      let datasets = statisticData.map((obj) => {
        let arr = obj.fact;

        let startDate = new Date();
        startDate.setDate(startDate.getDate() - dateRange);
        arr = arr.filter((factObj) => new Date(factObj.date) >= startDate);

        // Отсортируйте arr по дате в порядке убывания
        arr.sort((a, b) => new Date(b.date) - new Date(a.date));

        return {
          label: obj.store,
          data: arr.map((factObj) => ({
            x: new Date(factObj.date).toLocaleDateString(
              "ru-RU",
              dateFormat === "day"
                ? { day: "numeric", month: "numeric", year: "numeric" }
                : { month: "long", year: "numeric" }
            ),
            y: factObj.sales_units,
          })),
        };
      });

      setCardStatistic({
        datasets: datasets,
      });
    }
  }, [statisticData, dateRange]);

  let currentStoreArr = selectedStore
    ? selectedStore.map((obj) => obj.store)
    : "";

  useEffect(() => {
    dispatch(getStatisticData({ currentCardName, currentStoreArr }));
  }, []);

  const closePopup = () => {
    dispatch(modalClose());
  };

  const setDate = (year, format) => {
    setDateRange(year);
    setDateFormat(format);
  };

  return (
    <>
      <div className={styles.diagramStatistic}>
        <button className={styles.closeBtn} onClick={closePopup}></button>
        <p className={styles.title}>{currentCardName}</p>
        <div className={styles.diagram_container}>
          {/* <LineChart chartData={cardStatistic} /> */}
          {cardStatistic.datasets ? (
            <LineChart chartData={cardStatistic} />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className={styles.btn_container}>
          <div className={styles.sales_container}>
            <button className={styles.btn}>Прогноз</button>
            <button className={styles.btn}>Продажи</button>
          </div>
          <div className={styles.date_container}>
            <button onClick={() => setDate(365, "day")} className={styles.btn}>
              12 мес
            </button>
            <button onClick={() => setDate(47, "week")} className={styles.btn}>
              7 нед
            </button>
            <button onClick={() => setDate(14, "day")} className={styles.btn}>
              14 дн
            </button>
          </div>
        </div>
        <p></p>
        {/* <ul>
          {currentStoreArr &&
            currentStoreArr.map((val) => <li key={nanoid(6)}>{val}</li>)}
        </ul> */}
      </div>
    </>
  );
};
