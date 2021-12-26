import React, { useState } from 'react';
import styles from './styles/commentForm.module.scss';

function CommentForm({ onClick }) {
    return (
        <div className={styles.addComment}>
            <h3>Добавьте анонимный комментарий</h3>
            <textarea id="text" placeholder="Начните писать..." cols="50" rows="4"></textarea><br />
            <input type="button" class="button" value="Добавить" onClick={onClick}></input>
        </div>
    );
}

export default CommentForm;
