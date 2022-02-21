import React, { useEffect, useRef, memo } from 'react';
import styles from './assets/styles/cards.module.scss';
import classnames from 'classnames';


const Card = memo(({ word, transcription, translation, wordsCount, wordCancel, id, isLearned }) => {
    const focusBtn = useRef()
    useEffect(() => focusBtn.current && focusBtn.current.focus(), []);

    return (
        <div className={classnames(styles.card, isLearned && styles.learnedCard)}>
            <div>
                <p className={styles.word}>{word}</p>
                <p className={styles.transcription}>{transcription}</p>
                {isLearned
                    ? <React.Fragment>
                        <p className={styles.translation}>{translation}</p>
                        <button className={styles.buttonCancel} data-id={id} onClick={wordCancel}>(отметить как невыученное)</button>
                    </React.Fragment>
                    : <button className={styles.buttonShow} ref={focusBtn} data-id={id} onClick={wordsCount}>Проверить</button>
                }
            </div>
        </div>
    );
})

export default Card;
