//import useReverse from '../hooks/useReverse';
import { useState } from 'react';

const useValid = () => {
    const [valid, changeValid] = useState({ word: true, transcription: true, translation: true });
    const inputValidation = (name, value) => {
        const wordTest = /^[a-zA-Z\s]+$/;
        const transcriptionTest = /[0-9\d]/;
        const translationTest = /^[А-Яа-яЁё\s]+$/;
        if (value) {
            name === "word" && changeValid({...valid, [name]: wordTest.test(value)});
            name === "transcription" && changeValid({...valid, [name]: !transcriptionTest.test(value)});
            name === "translation" && changeValid({...valid, [name]: translationTest.test(value)})
        }
        else
            changeValid({...valid, [name]: false});
    }
    return [valid, inputValidation, changeValid]
}

export default useValid;