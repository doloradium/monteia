import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import PredictionList from "../../components/PredictionList/PredictionList";

import { useState } from "react";

import styles from "./styles.module.css";
import Button from "../../components/Button/Button";

const Predictions = () => {
  const [keywords, setKeywords] = useState("");

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Header />
        <h2 className={styles.predictionsHeading}>Список гаданий</h2>
        {console.log(keywords)}
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
      </div>
      <Footer />
      <MobileNavbar />
    </div>
  );
};

export default Predictions;
