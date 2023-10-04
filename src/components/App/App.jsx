import style from "./App.module.scss";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ForgotPage } from "../../pages/ForgotPage";
import { ShopSelectionPage } from "../../pages/ShopSelectionPage";
import { useDispatch, useSelector } from "react-redux";
import { FilterProductCategories } from "../FilterProductCategories/FilterProductCategories";


export const App = () => {
  // const dispatch = useDispatch();
  // const { isOpen } = useSelector((store) => store.modal);

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot" element={<ForgotPage />} />
        <Route path="shop" element={<ShopSelectionPage />} />
      </Routes> */}

      {/* <Modal active={!isOpen}></Modal> */}
    </>
  );
};
