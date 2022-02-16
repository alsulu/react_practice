import React, { useState, memo } from 'react';
import styles from './assets/styles/rows.module.scss';
import classnames from 'classnames';
import useReverse from '../hooks/useReverse';
import useValid from '../hooks/useValid';
import useEditLocalStorage from '../hooks/useEditLocalStorage';
//import { data } from "../data/data";

const Row = memo(({ word, transcription, translation, id }) => {
    const [edit, reverseEdit] = useReverse(false);
    const [valid, inputValidation] = useValid();
    
    const [values, setChange] = useState({ word: `${word}` || '', transcription: `${transcription}` || '', translation: `${translation}` || '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setChange({
            ...values, 
            [name]: value 
        })
        inputValidation(name, value);
    }
    
    const [savedValues, setSave] = useState({ word: '', transcription: '', translation: '' });
    
    const [editWords] = useEditLocalStorage("words", values.word);
    const [editTranscriptions] = useEditLocalStorage("transcriptions", values.transcription);
    const [editTranslations] = useEditLocalStorage("translations", values.translation);

    const handleSave = (e) => {
        setSave({
            ...savedValues,
            word: values.word,
            transcription: values.transcription,
            translation: values.translation  
        })
        /*let arr = localStorage.getItem("words").split(",");
        arr[e.target.dataset.id] = savedValues.word;
        localStorage.setItem("words", arr.join(","));*/
        
        editWords(e.target.dataset.id);
        editTranscriptions(e.target.dataset.id);
        editTranslations(e.target.dataset.id);
        reverseEdit()
    }

    /*const [inValid, reverseInvalid] = useReverse({word: true, transcription: true, translation: true});

    const inputValidation = (name, value) => {
        const wordTest = /^[a-zA-Z\s]+$/;
        const transcriptionTest = /[^0-9]/;
        const translationTest = /^[А-Яа-яЁё\s]+$/;
        value ||
            name === "word" ? reverseInvalid(name, wordTest.test(value))
            : name === "transcription" ? reverseInvalid(name, transcriptionTest.test(value))
            : reverseInvalid(name, translationTest.test(value))
    }

    /*const [dataWords, setDataWords] = useState(data);
    

    useImperativeHandle(ref, () => ({
        value() {
            const word = values.word;
            const transcription = values.transcription;
            const translation = values.translation;
            return word, transcription, translation;
        }
    }))*/

    /*const handleSave = (e) => {
        setDataWords({
        ...dataWords,
        id: {
            english: values.word,
            transcription: values.transcription,
            russian: values.translation
        }
        })
    }*/

    /*const handleSave = () => {

        localStorage.setItem('word', values.word);
        localStorage.setItem('transcription', values.transcription);
        localStorage.setItem('translation', values.translation);
        reverseEdit()
    }*/


    return (
        <tr>
            {edit
                ? <React.Fragment>
                    <td className={styles.edit}>
                        <input type="text" name="word" className={valid.word ? undefined : styles.invalid} value={values.word} onChange={handleChange} />
                        {valid.word || <span className={styles.error}>Поле заполнено неверно.</span>}
                    </td>
                    <td className={styles.edit}>
                        <input type="text" name="transcription" className={valid.transcription ? undefined : styles.invalid} value={values.transcription} onChange={handleChange} />
                        {valid.transcription || <span className={styles.error}>Поле заполнено неверно.</span>}
                    </td>
                    <td className={styles.edit}>
                        <input type="text" name="translation" className={valid.translation ? undefined : styles.invalid} value={values.translation} onChange={handleChange} />
                        {valid.translation || <span className={styles.error}>Поле заполнено неверно.</span>}
                    </td>
                    <td className={classnames(styles.buttons, styles.edit)}>
                        <button className={styles.btnSave} disabled={(valid.word && valid.transcription && valid.translation) ? false : "disabled"} data-id={id} onClick={handleSave}>Сохранить</button>
                        <button className={styles.btnCancel} onClick={reverseEdit}>Отменить</button>
                    </td>
                </React.Fragment>
                : <React.Fragment>
                    <td id="wordValue">{savedValues.word || word}</td>
                    <td>{savedValues.transcription || transcription}</td>
                    <td>{savedValues.translation || translation}</td>
                    <td className={styles.buttons}>
                        <button className={styles.btnEdit} onClick={reverseEdit}><img src="https://cdn-icons-png.flaticon.com/512/51/51639.png" alt="редактировать" /></button>
                        <button className={styles.btnDelete}><img src="http://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png" alt="удалить" /></button>
                    </td>
                </React.Fragment>
            }
        </tr>
    )
})

export default Row;
