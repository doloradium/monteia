import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <ul className={styles.footerBlock}>
            <li className={styles.footerItem}>
              <Link className={styles.logo} to={`/`}>
                MONTEIA
              </Link>
            </li>
            <li className={styles.footerItem}>
              <p className={styles.footerParagraph}>“Верь в своё будущее”</p>
            </li>
            <li className={styles.footerItem}>
              <p className={styles.footerParagraph}>© Monteia, 2024</p>
            </li>
          </ul>
        </div>
        <div className={styles.footerContainer}>
          <ul className={styles.footerBlock}>
            <li className={styles.footerItem}>
              <Link to={`/`} className={styles.footerLink}>
                Настройки
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link to={`/`} className={styles.footerLink}>
                Профиль
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link to={`/`} className={styles.footerLink}>
                Дневник
              </Link>
            </li>
          </ul>
          <ul className={styles.footerBlock}>
            <li className={styles.footerItem}>
              <Link to={`/`} className={styles.footerLink}>
                Главная
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link to={`/predictions`} className={styles.footerLink}>
                Список гаданий
              </Link>
            </li>
          </ul>
          <ul className={styles.footerBlock}>
            <li className={styles.footerItem}>
              <Link to="#" className={styles.footerLink}>
                Пользовательское соглашение
              </Link>
            </li>
            <li className={styles.footerItem}>
              <Link to="#" className={styles.footerLink}>
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
