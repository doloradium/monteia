import PredictionList from "../../components/PredictionList/PredictionList";

import { useState } from "react";

import styles from "./styles.module.css";
import Button from "../../components/Button/Button";

const Predictions = () => {
  const [keywords, setKeywords] = useState("");

  return (
    <>
      <h2 className={styles.predictionsHeading}>Список гаданий</h2>
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
      <PredictionList />
    </>
  );
};

export default Predictions;
