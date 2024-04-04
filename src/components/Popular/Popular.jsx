import React from "react";
import Card from "../Card/Card";

import styles from "./styles.module.css";

const Popular = () => {
  return (
    <>
      <h2>Популярные гадания</h2>
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Popular;
