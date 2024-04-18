import React from "react";
import Card from "../Card/Card";
import cardArray from "../../data/cardArray.jsx";

import styles from "./styles.module.css";

const PredictionList = () => {
  return (
    <div className={styles.cardContainer}>
      {cardArray.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          type={item.type}
          image={item.image}
          isLiked={item.isLiked}
        />
      ))}
    </div>
  );
};

export default PredictionList;
