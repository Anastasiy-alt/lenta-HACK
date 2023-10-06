import { Header } from "../../components/Header/Header";
import { CardList } from "../../components/CardList/CardList";
import styles from "./StatisticsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { SelectedStoreCard } from "../../components/SelectedStoreCard/SelectedStoreCard";
import { FilterBlock } from "../../components/FiltersBolock/FiltersBlock";
import { SerchString } from "../../components/SerchString/SerchString";
import { FilterProductCategories } from "../../components/FilterProductCategories/FilterProductCategories";
import { useHeaderIntersection } from "../../utils/headerIntersection";
import { getCategories } from "../../redux/slices/categoriesSlice";
import { modalOpen } from "../../redux/slices/modalSlice";

export const StatisticsPage = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.modal.isOpen);
  const isIntersection = useSelector((store) => store.modal.isIntersection);

  const headerRef = useRef(null);
  const searchRef = useRef(null);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useHeaderIntersection({ headerRef, searchRef });

  const openModal = () => {
    dispatch(modalOpen());
  };

  return (
    <>
      <div className={styles.page_container}>
        <Header inHeader={isIntersection} ref={headerRef} />
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
{
  /* <CardList /> */
}
