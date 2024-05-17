import React from "react";

import PredictionList from "../../components/PredictionList/PredictionList";
import Search from "../../components/Search/Search";

import cardArray from "../../data/cardArray.jsx";

import styles from "./styles.module.css";

const Predictions = () => {
  return (
    <>
      <h2 className={styles.predictionsHeading}>Список гаданий</h2>
      <Search />
      <PredictionList cards={cardArray} />
    </>
  );
};

export default Predictions;
