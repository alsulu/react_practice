import React, { useState } from 'react';
import{ observer, inject } from "mobx-react";

import styles from './assets/styles/rows.module.scss';
import classnames from 'classnames';
import useReverse from '../hooks/useReverse';
import useValid from '../hooks/useValid';
import ConfirmationModal from "./ConfirmationModal";

const Row = ({ wordsStore, word, transcription, translation, id }) => {
    const [deleting, reverseDeleting] = useReverse(false);

    const [edit, reverseEdit] = useReverse(false);
    const [valid, inputValidation] = useValid();
    const [isTranscriptionChanging, setIsTranscriptionChanging] = useState(false);
    const [values, setChangeValues] = useState({ word: `${word}`, transcription: `${transcription}`, translation: `${translation}` });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setChangeValues({
            ...values, 
            [name]: value.toLowerCase() 
        })
        inputValidation(name, value);
        name === "transcription" && setIsTranscriptionChanging(true)
    }

    const handleEdit = () => {
        wordsStore.editWord(id, values);
        reverseEdit();
    }

    const handleCancel = () => {
        setChangeValues({ word: `${word}`, transcription: `${transcription}`, translation: `${translation}` });
        reverseEdit();
    }

    return (
        <React.Fragment>
            <tr>
                {edit
                    ? <React.Fragment>
                        <td className={styles.edit}>
                            <input type="text" name="word" className={valid.word ? undefined : styles.invalid} value={values.word} onChange={handleChange} />
                            {valid.word || <span className={styles.error}>Поле заполнено верно. Убедитесь, что вводите символы латиницы.</span>}
                        </td>
                        <td className={styles.edit}>
                            <input type="text" name="transcription" className={valid.transcription ? undefined : styles.invalid} value={values.transcription} onChange={handleChange} />
                            {isTranscriptionChanging && (
                                valid.transcription
                                    ? <span className={styles.need_correct}>Для эффективного обучения убедитесь, что заполнили поле верно.</span> 
                                    : <span className={styles.error}>Поле не может быть пустым или содержать цифры.</span>)}
                        </td>
                        <td className={styles.edit}>
                            <input type="text" name="translation" className={valid.translation ? undefined : styles.invalid} value={values.translation} onChange={handleChange} />
                            {valid.translation || <span className={styles.error}>Поле заполнено неверно. Убедитесь, что вводите символы кириллицы.</span>}
                        </td>
                        <td className={classnames(styles.buttons, styles.edit)}>
                            <button className={styles.btnSave} disabled={(valid.word && valid.transcription && valid.translation) ? false : "disabled"} 
                                onClick={handleEdit}>Save</button>
                            <button className={styles.btnCancel} onClick={handleCancel}>Cancel</button>
                        </td>
                    </React.Fragment>
                    : <React.Fragment>
                        <td id="wordValue">{word}</td>
                        <td>{transcription}</td>
                        <td>{translation}</td>
                        <td className={styles.buttons}>
                            <button className={styles.btnEdit} onClick={reverseEdit}><img src="https://cdn-icons-png.flaticon.com/512/51/51639.png" alt="редактировать" /></button>
                            <button className={styles.btnDelete} onClick={reverseDeleting}><img src="http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png" alt="удалить" /></button>
                        </td>
                    </React.Fragment>
                }
            </tr>
            {deleting && <ConfirmationModal id={id} cancel={reverseDeleting} />}
        </React.Fragment>
    )
}

export default inject(["wordsStore"])(observer(Row));
