import React, { useState } from "react";
import Card from "../Card/Card";

import styles from "./styles.module.css";

const PredictionList = (cards) => {
  const [cardList, setCardList] = useState(cards);

  return (
    <div className={styles.cardContainer}>
      {Object.values(cardList)[0].map((item) => (
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
