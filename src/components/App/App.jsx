import style from "./App.module.scss";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";

export const App = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>

      <Modal active={modalActive} setActive={setModalActive}>
        <p>lorem</p>
      </Modal>
    </>
  );
};
