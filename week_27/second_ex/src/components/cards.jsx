import styles from './assets/styles/cards.module.scss';

let Card = (props) => {
    return (
        <div className={styles.card}>
            <div>
                <p className={styles.word}>{props.word}</p>
                <p>{props.transcription}</p>
                <p>{props.translation}</p>
            </div>
        </div>
    );
}

export default Card;
