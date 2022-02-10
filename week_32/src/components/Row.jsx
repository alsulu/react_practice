import React, { useState, memo } from 'react';
import styles from './assets/styles/rows.module.scss';
import classnames from 'classnames';
import useReverse from '../hooks/useReverse';

const Row = memo((props) => {
    const [edit, reverseEdit] = useReverse();
    
    const [values, setChange] = useState({ word: "", transcription: "", translation: "" });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setChange({ [name]: value })
    }

    return (
        <tr>
            {edit
                ? <React.Fragment>
                    <td className={styles.edit}><input type="text" name="word" value={values.word || props.word} onChange={handleChange} /></td>
                    <td className={styles.edit}><input type="text" name="transcription" value={values.transcription || props.transcription} onChange={handleChange} /></td>
                    <td className={styles.edit}><input type="text" name="translation" value={values.translation || props.translation} onChange={handleChange} /></td>
                    <td className={classnames(styles.buttons, styles.edit)}>
                        <button className={styles.btnSave}>Сохранить</button>
                        <button className={styles.btnCancel} onClick={reverseEdit}>Отменить</button>
                    </td>
                </React.Fragment>
                : <React.Fragment>
                    <td id="wordValue">{props.word}</td>
                    <td>{props.transcription}</td>
                    <td>{props.translation}</td>
                    <td className={styles.buttons}>
                        <button className={styles.btnEdit} onClick={reverseEdit}><img src="https://cdn-icons-png.flaticon.com/512/51/51639.png" alt="редактировать" /></button>
                        <button className={styles.btnDelete}><img src="http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png" alt="удалить" /></button>
                    </td>
                </React.Fragment>
            }
        </tr >
    )
})

export default Row;
