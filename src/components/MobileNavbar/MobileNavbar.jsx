import React from "react";

import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const MobileNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className={styles.navbarContainer}>
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"home"}
          opacity={0}
          iconStatus={1}
          iconScalable={1}
        />
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"book"}
          opacity={0}
          iconStatus={0}
          iconScalable={1}
        />
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"magic"}
          opacity={0}
          iconStatus={0}
          iconScalable={1}
          onClick={() => {
            navigate("/predictions");
          }}
        />
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"profile"}
          opacity={0}
          iconStatus={0}
          iconScalable={1}
        />
      </div>
    </nav>
  );
};

export default MobileNavbar;
