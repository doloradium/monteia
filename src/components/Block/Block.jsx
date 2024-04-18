import React from "react";

import styles from "./styles.module.css";

const Block = ({ image, text, heading }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blockInfo}>
        <h3 className={styles.blockHeading}>{heading}</h3>
        <p className={styles.blockParagraph}>{text}</p>
      </div>
      <img className={styles.blockImage} src={image} alt="Extra" />
    </div>
  );
};

export default Block;
