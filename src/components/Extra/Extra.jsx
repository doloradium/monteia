import React from "react";

import styles from "./styles.module.css";
import Block from "../Block/Block";

import scorpio from "../../assets/scorpio.svg";
import digit from "../../assets/digit.svg";
import quotes from "../../assets/quotes.svg";

const Extra = () => {
  return (
    <>
      <h2>Дополнительно</h2>
      <div className={styles.extraWrapper}>
        <Block image={scorpio} />
        <Block image={digit} />
        <Block image={quotes} />
      </div>
    </>
  );
};

export default Extra;
