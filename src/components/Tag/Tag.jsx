import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

const Tag = ({ name, isChosen }) => {
  return (
    <p
      className={clsx(
        styles.tagWrapper,
        isChosen == 1 ? styles.tagActive : null
      )}
    >
      {name}
    </p>
  );
};

export default Tag;
