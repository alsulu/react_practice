import React, { useEffect, useState } from "react";
import useError from "./hooks/useError";
const WordsContext = React.createContext();

function WordsContextProvider({ children }) {
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState();
    const [message, findError] = useError();

    useEffect(() => {
        setErrorMessage(message);
    }, [message])

    useEffect(() => {
        const getWords = () => {
            setIsLoading(true);
            fetch('/api/words')
                .then((response) => {
                    console.log(response);
                    if (response.ok)
                        return response.json();
                    else {
                        findError(response.status)
                        throw new Error('ошибка на веб-сервере');
                    }
                })
                .then((response) => {
                    setWords(response);
                    //setTimeout(() => setIsLoading(false), 5000);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setError(true);
                    //setTimeout(() => setIsLoading(false), 5000);
                    setIsLoading(false);
                })
        }
        getWords();
    }, [])

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
            .then((response) => {
                if (response.ok)
                    return response.json();
                else {
                    findError(response.status)
                    throw new Error('ошибка на веб-сервере');
                }
            })
            .then((response) => {
                console.log(response);
                setWords([...words, new_word]);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
                setIsLoading(false);
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
            .then((response) => {
                if (response.ok)
                    return response.json();
                else {
                    findError(response.status)
                    throw new Error('ошибка на веб-сервере');
                }
            })
            .then((response) => {
                console.log(response);
                const index = words.indexOf(id);
                words.splice(index, 1);
                setWords([...words]);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
                setIsLoading(false);
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
            .then((response) => {
                if (response.ok)
                    return response.json();
                else {
                    findError(response.status)
                    throw new Error('ошибка на веб-сервере');
                }
            })
            .then((response) => {
                console.log(response);
                //const index = words.indexOf(editing_word);
                //setWords([...words.slice(0, index), editing_word, ...words.slice(index+1)]);
                setWords(words.map(word => word.id === id ? editing_word : word))
            })
            .catch((error) => {
                console.log(error);
                setError(true);
                setIsLoading(false);
            })
    }

    return (
        <WordsContext.Provider value={{ words, isLoading, addNewWord, deleteWord, editWord, error, errorMessage }}>
        {children}
        </WordsContext.Provider>

    );
}

export { WordsContextProvider, WordsContext };
