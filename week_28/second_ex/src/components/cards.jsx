import React, { useState } from 'react';
import styles from './assets/styles/cards.module.scss';

const Card = (props) => {
    const [shower, setShow] = useState(false);
    const handleClick = () => {
        setShow(!shower)
    }
    return (
        <div className={styles.card}>
            <div>
                <p className={styles.word}>{props.word}</p>
                <p className={styles.transcription}>{props.transcription}</p>
                {shower
                    ? <React.Fragment>
                        <p className={styles.translation}>{props.translation}</p>
                        <button className={styles.buttonCancel} onClick={handleClick}>(скрыть перевод)</button>
                    </React.Fragment>
                    : <button className={styles.buttonShow} onClick={handleClick}>Проверить</button>
                }
            </div>
        </div>
    );
}

export default Card;
