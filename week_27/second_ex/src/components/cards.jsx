import React from 'react';
import styles from './assets/styles/cards.module.scss';

function Card(props) {
    return (
        <div className={styles.card}>
            <p className={styles.word}>{props.word}</p>
            <p>{props.transcription}</p>
            <p>{props.translation}</p>
        </div>
    );
}

export default Card;
