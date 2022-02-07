import React, { useState } from "react";
import Title from "./title";
import styles from "./assets/styles/error.module.scss";
import imgError from "./assets/images/NotFound.jpg";

const Error = () => {
  const [shower, setShow] = useState(false);
  const handleClick = () => {
    setShow(!shower);
  };
  return (
    <div className={styles.error_cont}>
      <Title title="404 Error. Sorry, the page you're looking for doesn't exist :(" />
      {shower 
        ? <p className={styles.russianError}>Ошибка 404. Извините, страница, которую вы ищите, не существует :(</p>
        : <button className={styles.buttonTranslate} onClick={handleClick}>Попробуйте перевести сообщение об ошибке и нажмите, чтобы проверить
          себя</button>
      }
      <div className={styles.image}>
        <img src={imgError} alt="error image" className={styles.error} />
        <a href="https://ru.freepik.com/vectors/box" className={styles.credit}>
          Box вектор создан(а) stories - ru.freepik.com
        </a>
      </div>
    </div>
  );
};

export default Error;
