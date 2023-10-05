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

export const HomePage = () => {
  const [inHeader, setInHeader] = useState(false);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  const headerRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
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
            <SerchString ref={searchRef} />
            <button className={styles.category_btn} onClick={openModal}>
              Выбрать разделы
            </button>
          </div>
          <FilterBlock className={styles.filter_block}></FilterBlock>
        </div>
        <div className={styles.selected_store}>
          <SelectedStoreCard></SelectedStoreCard>
        </div>
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
