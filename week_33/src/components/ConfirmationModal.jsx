import React, { memo, useContext } from "react";
import styles from "./assets/styles/confirmation.module.scss";
import { WordsContext } from "../WordsContext";

const ConfirmationModal = memo(({id, cancel}) => {
    const { deleteWord } = useContext(WordsContext);

    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Подтвердить удаление</h2>
                    <p>Вы уверены, что хотите удалить выбранное слово?</p>
                    <div>
                        <button className={styles.delete_btn} onClick={() => deleteWord(id)}>Удалить</button>
                        <button className={styles.cancel_btn} onClick={cancel}>Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ConfirmationModal;