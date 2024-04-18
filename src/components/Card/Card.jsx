import React from "react";
import { useState } from "react";

import Button from "../Button/Button";

import cardArray from "../../data/cardArray";

import styles from "./styles.module.css";

const Card = ({ id, name, description, type, image, isLiked }) => {
  const [like, setLike] = useState(isLiked);

  const toggleLiked = () => {
    if (like == 0) {
      cardArray[id].isLiked = 1;
      setLike(1);
    } else {
      cardArray[id].isLiked = 0;
      setLike(0);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.upperBlock}>
        <img src={image} className={styles.cardImage} alt="" />
        <p className={styles.tag}>{type}</p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.cardHeading}>{name}</h3>
        <p className={styles.cardParagraph}>{description}</p>
      </div>
      <div className={styles.controlsBlock}>
        <Button
          buttonWidth={"fill"}
          content={"перейти"}
          icon={"arrowSmall"}
          iconWidth={"wide"}
        />
        <Button
          iconStatus={like}
          iconColor={"golden"}
          opacity={0}
          icon={"heart"}
          onClick={toggleLiked}
        />
      </div>
    </div>
  );
};

export default Card;
