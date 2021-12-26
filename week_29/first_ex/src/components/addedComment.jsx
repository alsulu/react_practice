import React from 'react';
import styles from './styles/comment.module.scss';

function Comment({ text, onClick, isNew }) {
    return (
        <div className={isNew && styles.new}>
            <p className={styles.name}>Аноним</p>
            <p className={styles.text}>{text}</p>
            <button className={styles.deleteBtn} onClick={onClick}>&#10006; удалить</button>
        </div>
    );
}

export default Comment;
