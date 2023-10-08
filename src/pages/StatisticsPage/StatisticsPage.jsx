import { Header } from "../../components/Header/Header";
import { CardList } from "../../components/CardList/CardList";
import styles from "./StatisticsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { SelectedStoreCard } from "../../components/SelectedStoreCard/SelectedStoreCard";
import { FilterBlock } from "../../components/FiltersBolock/FiltersBlock";
import { SerchString } from "../../components/SerchString/SerchString";
import { FilterProductCategories } from "../../components/FilterProductCategories/FilterProductCategories";
import { getCategories } from "../../redux/slices/categoriesSlice";
import { modalOpen } from "../../redux/slices/modalSlice";
import { FAQ } from "../../components/FAQ/FAQ";

export const StatisticsPage = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.modal.isOpen);
  const [isOpenFAQ, setIsOpenFAQ] = useState(false)
  const toggleOpenFAQ = () => {
    setIsOpenFAQ(!isOpenFAQ);
};



  const [inHeader, setInHeader] = useState(false);

  const headerRef = useRef(null);
  const searchRef = useRef(null);
  // useEffect(() => {
  //   dispatch(getCategories());

  //   const header = headerRef.current;
  //   const search = searchRef.current;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setInHeader(false);
  //       } else {
  //         setInHeader(true);
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (header && search) {
  //     observer.observe(search);
  //   }

  //   return () => {
  //     if (header && search) {
  //       observer.unobserve(search);
  //     }
  //   };
  // }, []);
  // useHeaderIntersection({ headerRef, searchRef });

  const openModal = () => {
    dispatch(modalOpen());
  };

  return (
    <div>
      <div className={styles.page_container}>
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
        <CardList className={`${isOpenFAQ && `${styles.page__scroll}`}`} />
        <div className={styles.page__FAQblock}>
          <div className={styles.page__FAQhover}>Техническая поддержка</div>
          <button className={styles.page__FAQbutton} onClick={toggleOpenFAQ}></button>
        </div>
      </div>
      <div className={`${isOpenFAQ && `${styles.page__back}`}`}></div>
      {isOpenFAQ && (
        <FAQ
        close={toggleOpenFAQ} />
      )

      }
      {isOpen ? (
        <Modal active={isOpen}>
          <FilterProductCategories />
        </Modal>
      ) : (
        ""
      )}

    </div>
  );
};
{
  /* <CardList /> */
}
