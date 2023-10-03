import React, { useEffect, useState } from "react";
import styles from "./shopSelect.module.scss";
import img from "../../image/shopSelect/cross.svg";
import arrow from "../../image/shopSelect/region_select_arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getCity,
  setCurrentCity,
  setSelectedStore,
} from "../../redux/slices/shopSlice";
import { nanoid } from "nanoid";
import { CheckBox } from "../CheckBox/CheckBox";
import { useNavigate } from "react-router-dom";

export const ShopSelect = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([]);
  const dispatch = useDispatch();
  const { cityArr, currentCity, selectedStore } = useSelector(
    (store) => store.shop
  );

  console.log(selectedStore);

  useEffect(() => {
    setCheckboxStates(new Array(numb).fill(false));
  }, [currentCity]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    dispatch(getCity());
  };

  const selectCity = (val) => {
    setSelectAll(false);
    dispatch(setCurrentCity(val));
  };

  // возвращает уникальные список
  const uniqueCities = cityArr.filter((item, index, array) => {
    return array.findIndex((val) => val.city === item.city) === index;
  });
  // возвращает список магазинов в одном городе
  const shopFilter = (value) => {
    return cityArr.filter((item) => item.city === value);
  };
  // выбрать все чекбоксы
  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
    setCheckboxStates(new Array(numb).fill(event.target.checked));
    if (event.target.checked) {
      if (
        !selectedStore.some((item) => shopFilter(currentCity).includes(item))
      ) {
        // setSelectedItems([...selectedItems, ...shopFilter(currentCity)]);
        dispatch(
          setSelectedStore([...selectedStore, ...shopFilter(currentCity)])
        );
      }
    } else {
      dispatch(setSelectedStore([]));
    }
  };
  let numb = shopFilter(currentCity).length;

  // проверка состояния чекбоксов
  const handleCheckboxChange = (index, event) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = event.target.checked;
    setCheckboxStates(newCheckboxStates);

    let newSelectedItems = [...selectedStore];

    // Если флажок установлен и элемент еще не в selectedItems, добавьте его
    if (
      event.target.checked &&
      !newSelectedItems.includes(shopFilter(currentCity)[index])
    ) {
      newSelectedItems.push(shopFilter(currentCity)[index]);
    }

    // Если флажок снят и элемент находится в selectedItems, удалите его
    if (
      !event.target.checked &&
      newSelectedItems.includes(shopFilter(currentCity)[index])
    ) {
      newSelectedItems = newSelectedItems.filter(
        (item) => item !== shopFilter(currentCity)[index]
      );
    }

    // setSelectedItems(newSelectedItems);
    dispatch(setSelectedStore(newSelectedItems));
    // Проверяем, выбраны ли все чекбоксы
    const allChecked = newCheckboxStates.every((checked) => checked);
    setSelectAll(allChecked);
  };

  const handleRemoveItem = (itemToRemove) => {
    // Удалите элемент из списка выбранных элементов
    const newSelectedItems = selectedStore.filter(
      (item) => item !== itemToRemove
    );
    // setSelectedItems(newSelectedItems);
    dispatch(setSelectedStore(newSelectedItems));

    // Найдите индекс элемента в списке всех элементов
    const index = shopFilter(currentCity).indexOf(itemToRemove);

    // Снимите флажок с этого элемента
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = false;
    setCheckboxStates(newCheckboxStates);

    // Если все флажки не установлены, снимите флажок "Выбрать все"
    const allChecked = newCheckboxStates.every((checked) => checked);
    setSelectAll(allChecked);
  };

  return (
    <>
      <div className={styles.shopSelect}>
        <div className={styles.select_container}>
          <h1 className={styles.select_title}>Выбери ТК</h1>

          <h2 className={styles.dropdown} onClick={toggleDropdown}>
            {currentCity === "" ? "Выберите город" : currentCity}
            <img className={styles.dropdown__img} src={arrow} />
            <ul
              className={showDropdown ? styles.dropdown_content : styles.hidden}
              id="myDropdown"
            >
              <div className={styles.scroll_container}>
                {uniqueCities.map((val) => (
                  <li
                    className={styles.scroll_item}
                    key={nanoid(6)}
                    onClick={() => selectCity(val.city)}
                  >
                    {val.city}
                  </li>
                ))}
              </div>
            </ul>
          </h2>

          <input
            className={styles.input}
            type="text"
            placeholder="Поиск по адресу ТК"
          ></input>
          <div className={styles.checkbox_container}>
            <label htmlFor="selectAll">Выбрать все</label>
            <CheckBox
              id="selectAll"
              label="Выбрать все"
              // checked={selectAll}
              checked={shopFilter(currentCity).every((val) =>
                selectedStore.includes(val)
              )}
              onChange={handleSelectAllChange}
            />
          </div>

          <ul className={styles.shop_list}>
            <div className={styles.scroll_container}>
              {shopFilter(currentCity).map((val, index) => (
                <li key={nanoid(6)}>
                  <label className={styles.shop_item}>
                    {val.store}
                    <CheckBox
                      label={val.store}
                      checked={selectedStore.some(
                        (item) => item.store === val.store
                      )}
                      onChange={(event) => handleCheckboxChange(index, event)}
                    />
                  </label>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className={styles.selected}>
          <div className={styles.selected_container}>
            <p className={styles.selected_title}>Выбранные ТК</p>
            <div className={styles.selected_item}>
              {selectedStore.length ? (
                <ul className={styles.selected_box}>
                  {selectedStore.map((item) => (
                    <li key={nanoid(6)}>
                      <p>{item.store}</p>
                      <img src={img} onClick={() => handleRemoveItem(item)} />
                    </li>
                  ))}
                </ul>
              ) : (
                <h2 className={styles.selected_subtitle}>Ничего не выбрано</h2>
              )}
            </div>
            <button
              className={
                selectedStore.length
                  ? styles.selected_btn
                  : styles.selected_btn__disable
              }
              onClick={() => navigate("/")}
            >
              Начать работу
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
