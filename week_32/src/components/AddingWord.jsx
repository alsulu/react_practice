import React, { memo, useState } from "react";
import useValid from '../hooks/useValid';
import useEditLocalStorage from '../hooks/useEditLocalStorage';
import styles from "./assets/styles/adding_word.module.scss";

const AddingWord = memo(({close}) => {
    const [valid, inputValidation] = useValid();
    
    const [values, setChange] = useState({ word: '', transcription: '', translation: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setChange({
            ...values, 
            [name]: value 
        })
        inputValidation(name, value);
    }

    const [addWord] = useEditLocalStorage("words", values.word);
    const [addTranscription] = useEditLocalStorage("transcriptions", values.transcription);
    const [addTranslation] = useEditLocalStorage("translations", values.translation);

    const handleAdd = () => {
        addWord();
        addTranscription();
        addTranslation();
        close();
    }

    

    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Новое слово</h2>
                    <p>Слово на английском</p>
                    <div>
                        <input type="text" name="word" className={valid.word ? undefined : styles.invalid} onChange={handleChange}/>
                        {valid.word || <span className={styles.error}>Поле заполнено неверно.</span>}
                    </div>
                    <p>Транскрипция</p>
                    <div>
                        <input type="text" name="transcription" className={valid.transcription ? undefined : styles.invalid} onChange={handleChange}/>
                        {valid.transcription || <span className={styles.error}>Поле заполнено неверно.</span>}
                    </div>
                    <p>Перевод</p>
                    <div>
                        <input type="text" name="translation" className={valid.translation ? undefined : styles.invalid} onChange={handleChange}/>
                        {valid.translation || <span className={styles.error}>Поле заполнено неверно.</span>}
                    </div>
                    <button onClick={handleAdd}>Добавить</button>
                </div>
            </div>
        </div>
    )
})

export default AddingWord;