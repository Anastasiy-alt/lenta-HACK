import React, { forwardRef } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import { SerchString } from "../SerchString/SerchString";

export const Header = forwardRef((props, ref) => {
  const { inHeader } = props;
  return (
    <>
      <div className={styles.header} ref={ref}>
        <div
          className={inHeader ? styles.container_inHeader : styles.container}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active_btn : styles.btn
            }
          >
            Прогноз
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? styles.active_btn : styles.btn
            }
          >
            Статистика
          </NavLink>
        </div>
        {inHeader ? (
          <div className={styles.children_container}>
            <SerchString inHeader={inHeader} />{" "}
          </div>
        ) : (
          ""
        )}
        <div className={styles.icon_container}>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? styles.icon_btn_favorites_focus
                : styles.icon_btn_favorites
            }
          ></NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.icon_btn_profile_focus : styles.icon_btn_profile
            }
          ></NavLink>
        </div>
      </div>
    </>
  );
});
