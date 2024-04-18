import React from "react";

import { Icon } from "../Icon/Icon";
import styles from "./styles.module.css";

const Review = ({ name, date, text, stars }) => {
  const starsArray = [];

  for (let i = 0; i < 5; i++) {
    stars <= i ? starsArray.push(0) : starsArray.push(1);
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.upperBlock}>
        {starsArray.map((item, key) => (
          <Icon key={key} color={"golden"} type={"star"} status={item} />
        ))}
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.cardHeading}>{name}</h3>
        <p className={styles.cardParagraph}>{date}</p>
      </div>
      <p className={styles.cardParagraph}>{text}</p>
    </div>
  );
};

export default Review;
