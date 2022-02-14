//import { useState } from "react";

//const [savedValues, setSave] = useState({ word: `${word}` || '', transcription: `${transcription}` || '', translation: `${translation}` || '' });

const useEditLocalStorage = (key, value) => {
    //
    const edit = (index) => {
        let arr = localStorage.getItem(`${key}`).split(",");
        !index
        ? arr.push(value)
        : arr[index] = value
        //setSave({...savedValues, key: value});
        localStorage.setItem(`${key}`, arr.join(","));
    }
    return [edit];
}

export default useEditLocalStorage;