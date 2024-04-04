import React from "react";

import styles from "./styles.module.css";

const Block = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blockInfo}>
        <h3 className={styles.blockHeading}>Server Error</h3>
        <p className={styles.blockParagraph}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
      <img className={styles.blockImage} src={image} alt="Extra" />
    </div>
  );
};

export default Block;
