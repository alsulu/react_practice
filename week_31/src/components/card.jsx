import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styles from './assets/styles/cards.module.scss';

const Card = forwardRef(({ word, transcription, translation, wordsCount }, ref) => {
    const [shower, setShow] = useState(false);
    const handleClick = () => {
        setShow(!shower);
    }
    const focusBtn = useRef();
    useEffect(() => focusBtn.current.focus(), []);

    useImperativeHandle(ref, () => ({
        handleClick() {
            setShow(!shower);
        }
    }))

    return (
        <div className={styles.card}>
            {(word
                ? <div>
                    <p className={styles.word}>{word}</p>
                    <p className={styles.transcription}>{transcription}</p>
                    {shower
                        ? <React.Fragment>
                            <p className={styles.translation}>{translation}</p>
                            <button className={styles.buttonCancel} onClick={handleClick}>(скрыть перевод)</button>
                        </React.Fragment>
                        : <button className={styles.buttonShow} ref={focusBtn} onClick={wordsCount}>Проверить</button>
                    }
                </div>
                : <React.Fragment>
                    <p className={styles.loading}>Пожалуйста, подождите..</p>
                    <ClimbingBoxLoader size={10} speedMultiplier={0.5} />
                </React.Fragment>
            )}
        </div>
    );
})

export default Card;
