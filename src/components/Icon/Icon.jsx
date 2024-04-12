import React from "react";
import clsx from "clsx";
import { iconsDefs } from "../../assets/icons/index";
import styles from "./styles.module.css";
import { useRef } from "react";

export const Icon = ({ scalable, color, type, status, width }) => {
  const id = useRef(Math.floor(Math.random() * 10e4)).current;
  const icon = iconsDefs[type];
  if (!icon) {
    return null;
  }

  return (
    <svg
      className={clsx(
        scalable === 1 ? styles.scalable : null,
        status === 0 ? styles.iconInactive : styles.iconActive,
        width === "wide" ? styles.iconWide : styles.iconRegular
      )}
      viewBox={icon.viewBox}
      fill={color === "golden" ? `url(#goldenGradient${id})` : null}
      stroke={color === "golden" ? `url(#goldenGradient${id})` : null}
    >
      {icon.body}
      <defs>
        <linearGradient
          id={`goldenGradient${id}`}
          x1="0%"
          x2="100%"
          y1="0%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#FCF5A2" />
          <stop offset="100%" stopColor="#C9A751" />
        </linearGradient>
      </defs>
    </svg>
  );
};
