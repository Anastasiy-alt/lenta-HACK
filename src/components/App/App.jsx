import style from "./App.module.scss";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ForgotPage } from "../../pages/ForgotPage/ForgotPage";
import { ShopSelectionPage } from "../../pages/ShopSelectionPage";
import { FavoritesPage } from "../../pages/FavoritesPage";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { StatisticsPage } from "../../pages/StatisticsPage/StatisticsPage";
import { useDispatch, useSelector } from "react-redux";
import { FilterProductCategories } from "../FilterProductCategories/FilterProductCategories";
import { FAQ } from "../FAQ/FAQ";

export const App = () => {
  // const dispatch = useDispatch();
  // const { isOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot" element={<ForgotPage />} />
        <Route path="shop" element={<ShopSelectionPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="statistics" element={<StatisticsPage />} />
      </Routes>
      {/* <Modal active={!isOpen}></Modal> */}
    </>
  );
};
