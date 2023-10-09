import React from "react";
import styles from "./cardList.module.scss";
import { products } from "../../utils/mockData";
import { CardComponentStat } from "../CardComponentStat/CardComponentStat";
import { useSelector } from "react-redux";
import { CardComponentProg } from "../CardComponentProg/CardComponentProg";
import { useLocation } from "react-router-dom";

export const CardList = () => {
  const { cardList } = useSelector((store) => store.card);
  const location = useLocation();

  const groupedProducts =
    cardList &&
    cardList.reduce((acc, product) => {
      // Создайте ключ для группы
      const groupKey = product.group;

      // Если группа еще не существует, создайте её
      if (!acc[groupKey]) {
        acc[groupKey] = {
          group: product.group,
          categories: {},
        };
      }

      // Создайте ключ для категории внутри группы
      const categoryKey = product.category;

      // Если категория еще не существует внутри группы, создайте её
      if (!acc[groupKey].categories[categoryKey]) {
        acc[groupKey].categories[categoryKey] = {
          category: product.category,
          products: [],
        };
      }

      const productExists = acc[groupKey].categories[categoryKey].products.some(
        (existingProduct) => existingProduct.name === product.name
      );

      if (!productExists) {
        acc[groupKey].categories[categoryKey].products.push(product);
      }

      return acc;
    }, {});

  const groupedProductsArray = Object.values(groupedProducts).map((group) => ({
    ...group,
    categories: Object.values(group.categories),
  }));

  console.log(groupedProductsArray);
  return (
    <>
      <div className={styles.cardList}>
        {groupedProductsArray &&
          groupedProductsArray.map((group, i) => (
            <ul className={styles.group} key={i}>
              <h2 className={styles.group_title}>{group.group}</h2>

              {group.categories &&
                group.categories.map((category, j) => (
                  <li className={styles.category} key={j}>
                    <h3 className={styles.category_title}>
                      {category.category}
                    </h3>
                    <ul className={styles.category_card_сontainer}>
                      {category.products.map((product, k) =>
                        location.pathname === "/" ? (
                          <li key={k}>
                            <CardComponentProg title={product.sku} />
                          </li>
                        ) : (
                          <li key={k}>
                            <CardComponentStat title={product.sku} />
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ))}
            </ul>
          ))}
      </div>
    </>
  );
};
