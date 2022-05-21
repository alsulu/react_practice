import React, { Fragment, memo, useEffect } from "react";
import{ observer, inject } from "mobx-react";

import styles from "./assets/styles/error.module.scss";
import imgError from "./assets/images/NotFound.jpg";
import useReverse from '../hooks/useReverse';
import useError from '../hooks/useError';

const Error = ({ wordsStore }) => {
  const [shower, reverseShower] = useReverse(false);
  const [message, findError] = useError();

  useEffect(() => findError(wordsStore.errorStatus), [wordsStore.errorStatus])

  return (
    <div className={styles.error_cont}>
      {wordsStore.errorStatus === 200
        ? <Fragment>
        <h2 className={styles.error_title}>404 Error. Sorry, the page you're looking for doesn't exist :(</h2>
        {shower 
          ? <p className={styles.russianError}>Ошибка 404. Извините, страница, которую вы ищите, не существует :(</p>
          : <button className={styles.buttonTranslate} onClick={reverseShower}>Попробуйте перевести сообщение об ошибке и нажмите, чтобы проверить
            себя</button>
        }
      </Fragment>
        : <h2 className={styles.error_title}>{message}</h2>
      }
      <div className={styles.image}>
        <img src={imgError} alt="error" className={styles.error} />
        <a href="https://ru.freepik.com/vectors/box" className={styles.credit}>
          Box вектор создан(а) stories - ru.freepik.com
        </a>
      </div>
    </div>
  );
}

export default inject(["wordsStore"])(observer(Error));
