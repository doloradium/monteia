import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Link className={styles.logo} to={`/`}>
          MONTEIA
        </Link>
        <ul className={styles.navbar}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} to={`/`}>
              главная
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} to={`/`}>
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
        />
      </div>
    </header>
  );
};

export default Header;
