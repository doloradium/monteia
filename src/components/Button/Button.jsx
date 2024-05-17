import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";

import styles from "./styles.module.css";

const Button = ({
  type,
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
  onClick,
  buttonState,
}) => {
  const [status, setStatus] = useState(iconStatus);

  useEffect(() => {
    setStatus(iconStatus);
  }, [iconStatus]);

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        id={id}
        className={clsx(
          className,
          size === "big" ? styles.buttonBig : null,
          opacity === 0 ? styles.buttonTransparent : null,
          buttonWidth === "fill" ? styles.buttonFill : null,
          buttonState === false ? styles.buttonInactive : null
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
