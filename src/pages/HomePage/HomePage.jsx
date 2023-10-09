import { SerchString } from "../../components/SerchString/SerchString";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useRef } from "react";
import styles from "./HomePage.module.scss";
import { FilterBlock } from "../../components/FiltersBolock/FiltersBlock";
import { SelectedStoreCard } from "../../components/SelectedStoreCard/SelectedStoreCard";
import { FilterProductCategories } from "../../components/FilterProductCategories/FilterProductCategories";
import { Modal } from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../../redux/slices/modalSlice";
import { getCategories } from "../../redux/slices/categoriesSlice";
import { CardList } from "../../components/CardList/CardList";
import { products } from "../../utils/mockData";

export const HomePage = () => {

  const [searchText, setSearchText] = useState('');
  const searchHandler = (text) => {
    setSearchText(text.toLowerCase());
  };
  const filteredProducts = searchText
  ? products.filter(product =>
      product.sku.toLowerCase().includes(searchText)
    )
  : products;

  const dispatch = useDispatch();

  const isOpen = useSelector((store) => store.modal.isOpen);

  const [inHeader, setInHeader] = useState(false);

  const headerRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(getCategories());

    const header = headerRef.current;
    const search = searchRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInHeader(false);
        } else {
          setInHeader(true);
        }
      },
      { threshold: 0.5 }
    );

    if (header && search) {
      observer.observe(search);
    }

    return () => {
      if (header && search) {
        observer.unobserve(search);
      }
    };
  }, []);

  const openModal = () => {
    dispatch(modalOpen());
  };

  return (
    <>
      <div>
        <Header inHeader={inHeader} ref={headerRef} />
        <div className={styles.container}>
          <h1 className={styles.main_title}>Прогноз спроса по выбранным ТК</h1>
          <div className={styles.category_container}>
            <SerchString ref={searchRef} onSearch={searchHandler} />
            <button className={styles.category_btn} onClick={openModal}>
              Выбрать разделы
            </button>
          </div>
          <FilterBlock className={styles.filter_block}></FilterBlock>
        </div>
        <div className={styles.selected_store}>
          <SelectedStoreCard></SelectedStoreCard>
        </div>
        <CardList products={filteredProducts} />
      </div>
      {isOpen ? (
        <Modal active={isOpen}>
          <FilterProductCategories />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
