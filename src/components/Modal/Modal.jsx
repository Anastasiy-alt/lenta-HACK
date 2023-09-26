import { useEffect } from "react";
import style from "./modal.module.scss";

export const Modal = ({ active, setActive, children }) => {
  useEffect(() => {
    const btnCloseModal = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };
    window.addEventListener("keydown", btnCloseModal);
    return () => window.removeEventListener("keydown", btnCloseModal);
  }, []);

  return (
    <div
      className={active ? style.modal : style.modal_hidden}
      onClick={() => setActive(false)}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
