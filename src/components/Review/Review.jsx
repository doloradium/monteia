import React from "react";

import { Icon } from "../Icon/Icon";
import styles from "./styles.module.css";

const Review = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.upperBlock}>
        <Icon type={"star"} />
        <Icon type={"star"} />
        <Icon type={"star"} />
        <Icon type={"star"} />
        <Icon type={"star"} status={0} />
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.cardHeading}>Server Error</h3>
        <p className={styles.cardParagraph}>12.10.2025</p>
      </div>
      <p className={styles.cardParagraph}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  );
};

export default Review;
