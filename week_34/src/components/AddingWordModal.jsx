import React, { useState } from "react";
import{ observer, inject } from "mobx-react";

import useValid from '../hooks/useValid';
import styles from "./assets/styles/adding_word.module.scss";

const AddingWordModal = ({ wordsStore, close} ) => {

    const [valid, inputValidation] = useValid();
    const [isTranscriptionChanging, setIsTranscriptionChanging] = useState(false);
    const [values, setChangeValues] = useState({ word: '', transcription: '', translation: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setChangeValues({
            ...values, 
            [name]: value.toLowerCase() 
        })
        inputValidation(name, value);
        name === "transcription" && setIsTranscriptionChanging(true)
    }

    const addWord = () => {
        wordsStore.addWord(values);
        close();
    }

    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Новое слово</h2>
                    <p>Слово на английском</p>
                    <div className={styles.input_container}>
                        <input type="text" name="word" className={valid.word ? undefined : styles.invalid} value={values.word} onChange={handleChange}/>
                        {valid.word || <span className={styles.error}>Поле заполнено неверно. Убедитесь, что вводите символы латиницы.</span>}
                    </div>
                    <p>Транскрипция</p>
                    <div className={styles.input_container}>
                        <input type="text" name="transcription" className={valid.transcription ? undefined : styles.invalid} value={values.transcription} onChange={handleChange}/>
                        {isTranscriptionChanging && (
                            valid.transcription 
                                ? <span className={styles.need_correct}>Для эффективного обучения убедитесь, что заполнили поле верно.</span> 
                                : <span className={styles.error}>Поле не может быть пустым или содержать цифры.</span>)}
                    </div>
                    <p>Перевод</p>
                    <div className={styles.input_container}>
                        <input type="text" name="translation" className={valid.translation ? undefined : styles.invalid} value={values.translation} onChange={handleChange}/>
                        {valid.translation || <span className={styles.error}>Поле заполнено неверно. Убедитесь, что вводите символы кириллицы.</span>}
                    </div>
                    <div>
                        <button className={styles.add_btn} onClick={addWord}>Добавить</button>
                        <button className={styles.close_btn} onClick={close}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default inject(["wordsStore"])(observer(AddingWordModal));