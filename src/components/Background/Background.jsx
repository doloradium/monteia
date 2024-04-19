import React from "react";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";

import styles from "./styles.module.css";

const Background = () => {
  return (
    <div className={styles.backgroundContainer}>
      <img src={cloud1} alt="Cloud" className={styles.backgroundImage} />
      <img src={cloud2} alt="Cloud" className={styles.backgroundImage} />
    </div>
  );
};

export default Background;
