import React from "react";

import styles from "./styles.module.css";
import Block from "../Block/Block";

import scorpio from "../../assets/scorpio.png";
import quotes from "../../assets/quotes.png";

const Extra = () => {
  return (
    <>
      <h2>Дополнительно</h2>
      <div className={styles.extraWrapper}>
        <Block image={scorpio} />
        <Block image={scorpio} />
        <Block image={quotes} />
      </div>
    </>
  );
};

export default Extra;
