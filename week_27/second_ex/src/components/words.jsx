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
                        <button className={styles.btnEdit} disabled>+</button>
                        <button className={styles.btnDelete}>-</button>
                    </td>
                </React.Fragment>
                : <React.Fragment>
                    <td>{props.word}</td>
                    <td>{props.transcription}</td>
                    <td>{props.translation}</td>
                    <td className={styles.buttons}>
                        <button className={styles.btnEdit}>+</button>
                        <button className={styles.btnDelete}>-</button>
                    </td>
                </React.Fragment>
            }
        </tr >
    )
}

export default Words;
