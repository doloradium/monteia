import React from "react";

import { Icon } from "../Icon/Icon";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cardImage from "../../assets/cardImage.svg";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.upperBlock}>
        <img className={styles.cardImage} src={cardImage} alt="" />
        <p className={styles.tag}>нумерология</p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.cardHeading}>Server Error</h3>
        <p className={styles.cardParagraph}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing
        </p>
      </div>
      <div className={styles.controlsBlock}>
        <Button
          buttonWidth={"fill"}
          content={"перейти"}
          icon={"arrowSmall"}
          iconWidth={"wide"}
        />
        <Button iconColor={"golden"} opacity={0} icon={"heart"} />
      </div>
    </div>
  );
};

export default Card;
