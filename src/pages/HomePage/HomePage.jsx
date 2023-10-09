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
import {
  modalOpen,
  modalType,
  modalToggle,
} from "../../redux/slices/modalSlice";
import { getCategories } from "../../redux/slices/categoriesSlice";
import { CardList } from "../../components/CardList/CardList";
import { DiagramStatistic } from "../../components/DiagramStatistic/DiagramStatistic";
import { FAQ } from "../../components/FAQ/FAQ";

export const HomePage = () => {
  const dispatch = useDispatch();

  const { isOpen, type } = useSelector((store) => store.modal);
  const [isOpenFAQ, setIsOpenFAQ] = useState(false);
  const toggleOpenFAQ = () => {
    setIsOpenFAQ(!isOpenFAQ);
  };

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
    dispatch(modalType("category"));
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
        <CardList />
        <div className={styles.page__FAQblock}>
          <div className={styles.page__FAQhover}>Техническая поддержка</div>
          <button
            className={styles.page__FAQbutton}
            onClick={toggleOpenFAQ}
          ></button>
        </div>
      </div>
      {isOpen &&
        (type === "category" ? (
          <Modal active={isOpen} setActive={() => dispatch(modalToggle())}>
            <FilterProductCategories />
          </Modal>
        ) : type === "diagram" ? (
          <Modal active={isOpen} setActive={() => dispatch(modalToggle())}>
            <DiagramStatistic />
          </Modal>
        ) : null)}
      <div
        className={`${isOpenFAQ && `${styles.page__back}`}`}
        onClick={toggleOpenFAQ}
      ></div>
      {isOpenFAQ && <FAQ close={toggleOpenFAQ} />}
    </>
  );
};
