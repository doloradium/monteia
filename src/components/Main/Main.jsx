import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Icon } from "../Icon/Icon";
import Button from "../Button/Button";

import heroImage from "../../assets/heroImage.png";

import styles from "./styles.module.css";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.onscroll = function () {
      const scroll = document.getElementById("scroll");
      const scrollHeight = window.scrollY;
      const windowHeight = window.innerHeight;
      scroll.style.opacity = 1 - (scrollHeight / windowHeight) * 4;
    };
  });

  return (
    <>
      <div className={styles.mainBackground}>
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
                onClick={() => {
                  navigate("/predictions");
                }}
              />
            </div>
            <img className={styles.image} src={heroImage} alt="Aroma Stick" />
          </div>
          <div className={styles.heroScroll} id="scroll">
            <Icon scalable={1} type={"mouse"} status={0} width={"regular"} />
            <p className={styles.scrollParagraph}>листайте ниже</p>
          </div>
        </div>
        <div className={styles.heroGradient}></div>
      </div>
      <div className={styles.mainGradient}></div>
    </>
  );
};

export default Main;
