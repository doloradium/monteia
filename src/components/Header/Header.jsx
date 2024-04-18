import React from "react";

import Button from "../Button/Button";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <a className={styles.logo} href="#">
          MONTEIA
        </a>
        <ul className={styles.navbar}>
          <li className={styles.navbarItem}>
            <a className={styles.navbarLink} href="#">
              главная
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a className={styles.navbarLink} href="#">
              дневник
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a className={styles.navbarLink} href="#">
              гадания
            </a>
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
