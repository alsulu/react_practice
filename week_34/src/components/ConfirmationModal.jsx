import React from "react";
import{ observer, inject } from "mobx-react";

import styles from "./assets/styles/confirmation.module.scss";

const ConfirmationModal = ({wordsStore, id, cancel}) => {

    const handleDelete = () => {
        wordsStore.deleteWord(id);
    }
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Подтвердить удаление</h2>
                    <p>Вы уверены, что хотите удалить выбранное слово?</p>
                    <div>
                        <button className={styles.delete_btn} onClick={handleDelete}>Удалить</button>
                        <button className={styles.cancel_btn} onClick={cancel}>Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default inject(["wordsStore"])(observer(ConfirmationModal));