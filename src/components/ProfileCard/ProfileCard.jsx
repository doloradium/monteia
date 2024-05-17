import React from "react";

import styles from "./styles.module.css";

const ProfileCard = ({ text, image, withImage }) => {
  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardText}>{text}</p>
      {withImage ? (
        <img className={styles.cardImage} src={image} alt="Image" />
      ) : (
        <p className={styles.cardImage}>{image}</p>
      )}
    </div>
  );
};

export default ProfileCard;
