import React from 'react';
import styles from './assets/styles/words.module.scss';
import classnames from 'classnames';

let Words = (props) => {
    return (
        <tr>
            {props.edit
                ? <React.Fragment>
                    <td className={styles.edit}><input type="text" value={props.word} /></td>
                    <td className={styles.edit}><input type="text" value={props.transcription} /></td>
                    <td className={styles.edit}><input type="text" value={props.translation} /></td>
                    <td className={classnames(styles.buttons, styles.edit)}>
                        <button className={styles.btnSave}>Сохранить</button>
                        <button className={styles.btnCancel}>Отменить</button>
                    </td>
                </React.Fragment>
                : <React.Fragment>
                    <td>{props.word}</td>
                    <td>{props.transcription}</td>
                    <td>{props.translation}</td>
                    <td className={styles.buttons}>
                        <button className={styles.btnEdit}><img src="https://cdn-icons-png.flaticon.com/512/51/51639.png" alt="редактировать" /></button>
                        <button className={styles.btnDelete}><img src="http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png" alt="удалить" /></button>
                    </td>
                </React.Fragment>
            }
        </tr >
    )
}

export default Words;
