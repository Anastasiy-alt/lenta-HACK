import style from "./App.module.scss";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

const App = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <>
      <div className={style.App}></div>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>lorem</p>
      </Modal>
    </>
  );
};

export default App;
