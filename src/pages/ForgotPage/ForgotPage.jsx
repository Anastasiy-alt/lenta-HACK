import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { Forgot } from "../../components/Forgot/Forgot";
import styles from "./ForgotPage.module.scss";

export const ForgotPage = () => {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <div className={styles.bg}>
      <Modal active={!isOpen}>
        <Forgot />
      </Modal>
    </div>
  );
};
