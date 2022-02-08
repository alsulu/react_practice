import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styles from './assets/styles/cards.module.scss';
import classnames from 'classnames';

//const Card = forwardRef(({ word, transcription, translation, wordsCount, wordCancel, id, ok }, ref) => {
    /*const [shower, setShow] = useState(false);
    const handleClick = () => {
        setShow(!shower);
    }

    useImperativeHandle(ref, () => ({
        handleClick() {
            setShow(!shower);
        }
    }))*/

    const Card = ({ word, transcription, translation, wordsCount, wordCancel, id, ok }) => {

    const focusBtn = useRef();
    useEffect(() => focusBtn.current.focus(), []);

    return (
        <div className={classnames(styles.card, ok && styles.cardOk)}>
            {(word
                ? <div>
                    <p className={styles.word}>{word}</p>
                    <p className={styles.transcription}>{transcription}</p>
                    {ok
                        ? <React.Fragment>
                            <p className={styles.translation}>{translation}</p>
                            <button className={styles.buttonCancel} ref={focusBtn} data-id={id} onClick={(e) => wordCancel(e)}>(отметить как невыученное)</button>
                        </React.Fragment>
                        : <button className={styles.buttonShow} ref={focusBtn} data-id={id} onClick={(e) => wordsCount(e)}>Проверить</button>}
                </div>
                : <React.Fragment>
                    <p className={styles.loading}>Пожалуйста, подождите..</p>
                    <ClimbingBoxLoader size={10} speedMultiplier={0.5} />
                </React.Fragment>
            )}
        </div>
    );
}

export default Card;
