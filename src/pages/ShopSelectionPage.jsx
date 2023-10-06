import React, { useEffect } from "react";
import { Modal } from "../components/Modal/Modal";
import { useSelector } from "react-redux";
import { ShopSelect } from "../components/ShopSelect/ShopSelect";
import styles from "./LoginPage/LoginPage.module.scss";

export const ShopSelectionPage = () => {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <div className={styles.bg}>
      <Modal active={!isOpen}>
        <ShopSelect />
      </Modal>
    </div>
  );
};
