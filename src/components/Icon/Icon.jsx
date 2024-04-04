import React from "react";
import clsx from "clsx";
import { iconsDefs } from "../../assets/icons/index";
import styles from "./styles.module.css";

export const Icon = ({ type, status, width }) => {
  const icon = iconsDefs[type];
  if (!icon) {
    return null;
  }

  return (
    <svg
      className={clsx(
        status === 0 ? styles.iconInactive : styles.iconActive,
        width === "wide" ? styles.iconWide : styles.iconRegular
      )}
      viewBox={icon.viewBox}
    >
      {icon.body}
    </svg>
  );
};
