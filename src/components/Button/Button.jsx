import React from "react";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import { useState } from "react";

import styles from "./styles.module.css";

const Button = ({ content, icon, size, opacity, iconWidth }) => {
  const [status, setStatus] = useState(1);

  const handleClick = () => {
    if (opacity == 0) {
      status == 0 ? setStatus(1) : setStatus(0);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={clsx(
          size === "big" ? styles.buttonBig : null,
          opacity === 0 ? styles.buttonTransparent : null
        )}
      >
        {content}
        <Icon width={iconWidth} type={icon} status={status} />
      </button>
    </>
  );
};

export default Button;
