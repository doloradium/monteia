import React, { useState } from "react";

import Button from "../Button/Button";

import styles from "./styles.module.css";

const Search = () => {
  const [keywords, setKeywords] = useState("");

  return (
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
  );
};

export default Search;
