import React, { useState } from "react";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import PredictionList from "../../components/PredictionList/PredictionList";
import Search from "../../components/Search/Search.jsx";

import cardArray from "../../data/cardArray.jsx";
import tags from "../../data/tags.jsx";

import styles from "./styles.module.css";

const Profile = () => {
  const [cardList, setCardList] = useState(cardArray);
  const [tagList, setTagList] = useState(tags);
  const [toggle, setToggle] = useState("favorite");
  console.log(toggle);

  return (
    <>
      <ProfileInfo tags={tagList} />
      <Search withToggle toggle={toggle} handleChange={setToggle} />
      <PredictionList cards={cardList} />
    </>
  );
};

export default Profile;
