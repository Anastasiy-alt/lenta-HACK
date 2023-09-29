import style from "./App.module.scss";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ForgotPage } from "../../pages/ForgotPage";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot" element={<ForgotPage />} />
      </Routes>

      <Modal active={!isOpen}></Modal>
    </>
  );
};
