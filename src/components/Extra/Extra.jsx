import React from "react";

import styles from "./styles.module.css";
import Block from "../Block/Block";

import extraArray from "../../data/extraArray";

const Extra = () => {
  return (
    <>
      <h2>Дополнительно</h2>
      <div className={styles.extraWrapper}>
        {extraArray.map((item) => (
          <Block
            key={item.id}
            heading={item.heading}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default Extra;
