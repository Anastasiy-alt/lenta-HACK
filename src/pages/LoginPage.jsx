import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Modal } from "../components/Modal/Modal";
import { Form } from "../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <Modal active={isOpen}>
      <Login />
    </Modal>
  );
};
