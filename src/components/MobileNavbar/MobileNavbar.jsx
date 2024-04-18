import React from "react";

import Button from "../Button/Button";
import styles from "./styles.module.css";

const MobileNavbar = () => {
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
