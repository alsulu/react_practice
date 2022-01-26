import React from 'react';
import styles from './styles/commentForm.module.scss';

function CommentForm({ onClick, value, onChange }) {
    return (
        <div className={styles.addComment}>
            <h3>Добавьте анонимный комментарий</h3>
            <textarea id="text" placeholder="Начните писать..." cols="50" rows="4" value={value} onChange={onChange}></textarea><br />
            <input type="button" value="Добавить" className={styles.button} onClick={onClick} />
        </div>
    );
}

export default CommentForm;
