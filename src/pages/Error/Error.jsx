import { useRouteError, useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

import styles from "./styles.module.css";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>Ошибка!</h1>
      <p className={styles.errorSubheading}>Что-то пошло не так</p>
      <p className={styles.errorParagraph}>
        {error.statusText || error.message}
      </p>
      <Button
        onClick={() => {
          navigate("/");
        }}
        content={"на главную"}
        icon={"arrowSmall"}
        iconWidth={"wide"}
      />
    </div>
  );
};

export default Error;
