import React, { useState } from "react";
import useError from "./hooks/useError";
import useReverse from "./hooks/useReverse";
const WordsContext = React.createContext();

function WordsContextProvider({ children }) {
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useReverse(null);
    const [errorMessage, setErrorMessage] = useState();
    const [message, setMessage] = useError();

    const getWords = () => {
        setIsLoading(true);
        fetch('/api/word')
            .then((response) => {
                console.log(response);
                if (response.ok)
                    return response.json();
                else {
                    setMessage(response.status);
                    throw new Error(message);
                }
            })
            .then((response) => {
                setWords(response);
                //setTimeout(() => setIsLoading(false), 5000);
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setError(true);
                //setTimeout(() => setIsLoading(false), 5000);
                setIsLoading(false);
            })
    }

    const addNewWord = (english, transcription, russian) => {
        const new_word = {
            english: english,
            transcription: transcription,
            russian: russian,
        }

        fetch('/api/words/add', {
            method: 'POST',
            body: JSON.stringify(new_word),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                getWords()
            })
    }

    const deleteWord = (id) => {
        const deleting_word = {
            id: id
        }

        fetch('/api/words/' + id + '/delete', {
            method: 'POST',
            body: JSON.stringify(deleting_word),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                getWords()
            })
    }

    const editWord = (id, english, transcription, russian) => {
        const editing_word = {
            id: id,
            english: english,
            transcription: transcription,
            russian: russian,
            tags: "",
            tags_JSON: ""
        }

        fetch('/api/words/' + id + '/update', {
            method: 'POST',
            body: JSON.stringify(editing_word),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                getWords()
            })
    }

    return (
        <WordsContext.Provider value={{ words, isLoading, getWords, addNewWord, deleteWord, editWord, error, errorMessage }}>
        {children}
        </WordsContext.Provider>

    );
}

export { WordsContextProvider, WordsContext };