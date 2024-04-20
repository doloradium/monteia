import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles.headerContainer}>
        <Link className={styles.logo} to={`/`}>
          MONTEIA
        </Link>
        <ul className={styles.navbar}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} to={`/main`}>
              главная
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} to={`/diary`}>
              дневник
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} to={`/predictions`}>
              гадания
            </Link>
          </li>
        </ul>
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"profile"}
          opacity={0}
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
    </header>
  );
};

export default Header;
