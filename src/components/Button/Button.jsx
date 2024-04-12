import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";

import styles from "./styles.module.css";

const Button = ({
  iconColor,
  id,
  className,
  content,
  icon,
  size,
  opacity,
  iconWidth,
  iconStatus,
  buttonWidth,
  iconScalable,
}) => {
  const [status, setStatus] = useState(iconStatus);

  const handleClick = () => {
    if (opacity == 0 && iconStatus == null) {
      status == 0 ? setStatus(1) : setStatus(0);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        id={id}
        className={clsx(
          className,
          size === "big" ? styles.buttonBig : null,
          opacity === 0 ? styles.buttonTransparent : null,
          buttonWidth === "fill" ? styles.buttonFill : null
        )}
      >
        {content}
        <Icon
          scalable={iconScalable}
          color={iconColor}
          width={iconWidth}
          type={icon}
          status={status}
        />
      </button>
    </>
  );
};

export default Button;
