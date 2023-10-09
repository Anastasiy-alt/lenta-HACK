import React from "react";
import styles from "./cardList.module.scss";
import { products } from "../../utils/mockData";
import { CardComponentStat } from "../CardComponentStat/CardComponentStat";
import { useSelector } from "react-redux";
import { CardComponentProg } from "../CardComponentProg/CardComponentProg";
import { useLocation } from "react-router-dom";

export const CardList = ({products}) => {
   const { cardList } = useSelector((store) => store.card);
  const location = useLocation();
  
  const filteredGroupedProducts = products.reduce((acc, product) => {
    // Создайте ключ для группы
    const groupKey = product.group;


  const groupedProducts =
    cardList &&
    cardList.reduce((acc, product) => {
      
      const groupKey = product.group;

      if (!acc[groupKey]) {
        acc[groupKey] = {
          group: product.group,
          categories: {},
        };
      }

      const categoryKey = product.category;

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

  const filteredGroupedProductsArray = Object.values(filteredGroupedProducts).map((group) => ({
    ...group,
    categories: Object.values(group.categories),
  }));

  return (
    <>
      <div className={styles.cardList}>
        {filteredGroupedProductsArray &&
          filteredGroupedProductsArray.map((group, i) => (
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
