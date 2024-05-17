import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../ProfileCard/ProfileCard";
import Button from "../Button/Button";
import Tag from "../Tag/Tag.jsx";

import userPic from "../../assets/userPic.png";
import scorpio from "../../assets/scorpio.svg";

import styles from "./styles.module.css";

const ProfileInfo = (tags) => {
  const [tagList, setTagList] = useState(tags);

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.profileContainer}>
        <img
          src={userPic}
          className={styles.profileImage}
          alt="User pic"
          id="userPic"
        />
        <div className={styles.infoContainer}>
          <div className={styles.profileBlock}>
            <h3 className={styles.profileName}>Иван Иванов</h3>
            <p className={styles.profileDate}>19.02.2004</p>
            <Button
              onClick={() => {
                navigate("/settings");
              }}
              className={styles.profileSettings}
              icon={"settings"}
              opacity={0}
              iconColor={"golden"}
            />
          </div>
          <div className={styles.cardWrapper}>
            <ProfileCard text="рейтинг удачливости" image={"14"} />
            <ProfileCard text={"знак зодиака"} withImage image={scorpio} />
            <ProfileCard text="дней до счастья" image={"88"} />
          </div>
        </div>
        <div className={styles.tagContainer}>
          {Object.values(tagList)[0].map((item, key) =>
            item.isChosen == 1 ? (
              <Tag key={key} isChosen={!item.isChosen} name={item.name} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
