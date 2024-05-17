import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import styles from "./styles.module.css";

const Search = ({ withToggle = false, toggle, handleChange }) => {
  const [keywords, setKeywords] = useState("");
  const [toggleState, setToggleState] = useState(toggle);

  return (
    <div className={styles.searchContainer}>
      {withToggle == true ? (
        <div className={styles.toggleContainer}>
          <Button
            content={"купленные гадания"}
            buttonState={toggleState == "bought"}
            onClick={() => {
              handleChange("bought");
              setToggleState("bought");
            }}
          />
          <Button
            content={"любимые гадания"}
            buttonState={toggleState == "favorite"}
            onClick={() => {
              handleChange("favorite");
              setToggleState("favorite");
            }}
          />
        </div>
      ) : null}
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className={styles.input}
            placeholder="Введите название гадания"
          />
          <Button icon={"search"} type={"submit"} opacity={0} size={"wide"} />
        </form>
      </div>
    </div>
  );
};

export default Search;
