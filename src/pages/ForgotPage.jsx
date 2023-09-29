import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal/Modal";
import { Forgot } from "../components/Forgot/Forgot";

export const ForgotPage = () => {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <Modal active={isOpen}>
      <Forgot />
    </Modal>
  );
};
