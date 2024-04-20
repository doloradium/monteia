import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <ul className={styles.footerBlock}>
            <li className={styles.footerItem}>
              <a className={styles.logo} href={`/`}>
                MONTEIA
              </a>
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
              <a href="#" className={styles.footerLink}>
                Настройки
              </a>
            </li>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerLink}>
                Профиль
              </a>
            </li>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerLink}>
                Дневник
              </a>
            </li>
          </ul>
          <ul className={styles.footerBlock}>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerLink}>
                Главная
              </a>
            </li>
            <li className={styles.footerItem}>
              <a href={`/predictions`} className={styles.footerLink}>
                Список гаданий
              </a>
            </li>
          </ul>
          <ul className={styles.footerBlock}>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerLink}>
                Пользовательское соглашение
              </a>
            </li>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerLink}>
                Политика конфиденциальности
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
