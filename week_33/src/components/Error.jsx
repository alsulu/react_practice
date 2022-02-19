import React, { Fragment, memo } from "react";
import styles from "./assets/styles/error.module.scss";
import imgError from "./assets/images/NotFound.jpg";
import useReverse from '../hooks/useReverse';

const Error = memo(({ title }) => {
  const [shower, reverseShower] = useReverse(false);

  return (
    <div className={styles.error_cont}>
      {title
        ? <h2 className={styles.error_title}>{title}</h2>
        : <Fragment>
          <h2 className={styles.error_title}>404 Error. Sorry, the page you're looking for doesn't exist :(</h2>
          {shower 
            ? <p className={styles.russianError}>Ошибка 404. Извините, страница, которую вы ищите, не существует :(</p>
            : <button className={styles.buttonTranslate} onClick={reverseShower}>Попробуйте перевести сообщение об ошибке и нажмите, чтобы проверить
              себя</button>
          }
        </Fragment>
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
