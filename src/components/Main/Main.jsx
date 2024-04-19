import React from "react";
import styles from "./styles.module.css";
import { Icon } from "../Icon/Icon";
import Button from "../Button/Button";
import heroImage from "../../assets/heroImage.png";

const Main = () => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroHeading}>Верь в своё будущее</h1>
            <p className={styles.heroParagraph}>
              Monteia - это сервис для гаданий, нумерологии и гороскопов
            </p>
            <Button
              content={"список гаданий"}
              icon={"arrow"}
              size={"big"}
              iconWidth={"wide"}
            />
          </div>
          <img className={styles.image} src={heroImage} alt="Aroma Stick" />
        </div>
        <div className={styles.heroScroll}>
          <Icon scalable={1} type={"mouse"} status={0} width={"regular"} />
          <p className={styles.scrollParagraph}>листайте ниже</p>
        </div>
      </div>
    </>
  );
};

export default Main;