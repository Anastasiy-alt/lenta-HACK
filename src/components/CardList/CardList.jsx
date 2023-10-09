import React from "react";
import styles from "./cardList.module.scss";
import { products } from "../../utils/mockData";
import { CardComponentStat } from "../CardComponentStat/CardComponentStat";

export const CardList = ({products}) => {
  const filteredGroupedProducts = products.reduce((acc, product) => {
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

    // Добавьте продукт в соответствующую группу и категорию
    acc[groupKey].categories[categoryKey].products.push(product);

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
              <h2 className={styles.group_title}>{`group ${group.group}`}</h2>

              {group.categories &&
                group.categories.map((category, j) => (
                  <li className={styles.category} key={j}>
                    <h3
                      className={styles.category_title}
                    >{`category ${category.category}`}</h3>
                    <ul className={styles.category_card_сontainer}>
                      {category.products.map((product, k) => (
                        <li key={k}>
                          <CardComponentStat title={product.sku} />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          ))}
      </div>
    </>
  );
};
