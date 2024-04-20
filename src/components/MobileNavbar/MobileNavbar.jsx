import React from "react";

import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <div className={styles.navbarContainer}>
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"home"}
          opacity={0}
          iconStatus={location.pathname == "/main" ? 1 : 0}
          iconScalable={1}
          onClick={() => {
            navigate("/main");
          }}
        />
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"book"}
          opacity={0}
          iconStatus={location.pathname == "/diary" ? 1 : 0}
          iconScalable={1}
          onClick={() => {
            navigate("/diary");
          }}
        />
        <Button
          iconColor={"golden"}
          className={styles.profileIcon}
          icon={"magic"}
          opacity={0}
          iconStatus={location.pathname == "/predictions" ? 1 : 0}
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
          iconStatus={location.pathname == "/profile" ? 1 : 0}
          iconScalable={1}
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
    </nav>
  );
};

export default MobileNavbar;
