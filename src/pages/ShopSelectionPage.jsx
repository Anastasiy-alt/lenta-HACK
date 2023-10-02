import React, { useEffect } from "react";
import { Modal } from "../components/Modal/Modal";
import { useSelector } from "react-redux";
import { ShopSelect } from "../components/ShopSelect/ShopSelect";

export const ShopSelectionPage = () => {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <Modal active={isOpen}>
      <ShopSelect />
    </Modal>
  );
};
