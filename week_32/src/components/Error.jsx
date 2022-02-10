import React, { memo } from "react";
import Title from "./Title";
import styles from "./assets/styles/error.module.scss";
import imgError from "./assets/images/NotFound.jpg";
import useReverse from '../hooks/useReverse';

const Error = memo(() => {
  const [shower, reverseShower] = useReverse();

  return (
    <div className={styles.error_cont}>
      <Title title="404 Error. Sorry, the page you're looking for doesn't exist :(" />
      {shower 
        ? <p className={styles.russianError}>Ошибка 404. Извините, страница, которую вы ищите, не существует :(</p>
        : <button className={styles.buttonTranslate} onClick={reverseShower}>Попробуйте перевести сообщение об ошибке и нажмите, чтобы проверить
          себя</button>
      }
      <div className={styles.image}>
        <img src={imgError} alt="error" className={styles.error} />
        <a href="https://ru.freepik.com/vectors/box" className={styles.credit}>
          Box вектор создан(а) stories - ru.freepik.com
        </a>
      </div>
    </div>
  );
})

export default Error;
