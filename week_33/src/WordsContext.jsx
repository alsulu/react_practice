import React, { useEffect, useState } from "react";
//import useError from "./hooks/useError";
const WordsContext = React.createContext();

function WordsContextProvider({ children }) {
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        const getWords = () => {
            setIsLoading(true);
            fetch('/api/words')
                .then((response) => {
                    console.log(response);
                    if (response.ok)
                        return response.json();
                    else if (response.status < 400 && response.status >= 300)
                        throw new Error('Ошибка перенаправления.')
                    else if (response.status >= 500)
                        throw new Error('Ошибка на сервере. Не беспокойтесь, это не ваша вина.')
                    else switch (response.status) {
                        case 400: throw new Error('Ошибка 400: Bad Request. \nЗапрос ошибочен. Проверьте формат запроса и состав параметров.');
                        case 403: throw new Error('Ошибка 403: Forbidden \nНет прав для обработки запроса.');
                        case 404: throw new Error('Ошибка 404: Not Found \nНе найден указанный метод.');
                        case 413: throw new Error('Ошибка 413: Request Entity Too Large \nСлишком большой запрос, уменьшите его размер до 10MB.');
                        case 429: throw new Error('Ошибка 429: Too many requests \nСлишком много запросов, уменьшите их частоту.');
                        default: throw new Error('Ошибка');
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
                else if (response.status < 400 && response.status >= 300)
                    throw new Error('Ошибка перенаправления.')
                else if (response.status >= 500)
                    throw new Error('Ошибка на сервере. Не беспокойтесь, это не ваша вина.')
                else switch (response.status) {
                    case 400: throw new Error('Ошибка 400: Bad Request. \nЗапрос ошибочен. Проверьте формат запроса и состав параметров.');
                    case 403: throw new Error('Ошибка 403: Forbidden \nНет прав для обработки запроса.');
                    case 404: throw new Error('Ошибка 404: Not Found \nНе найден указанный метод.');
                    case 413: throw new Error('Ошибка 413: Request Entity Too Large \nСлишком большой запрос, уменьшите его размер до 10MB.');
                    case 429: throw new Error('Ошибка 429: Too many requests \nСлишком много запросов, уменьшите их частоту.');
                    default: throw new Error('Ошибка');
                }
            })
            .then((response) => {
                console.log(response);
                setWords([...words, new_word]);
            })
            .catch((error) => {
                setErrorMessage(error.message);
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
                else if (response.status < 400 && response.status >= 300)
                    throw new Error('Ошибка перенаправления.')
                else if (response.status >= 500)
                    throw new Error('Ошибка на сервере. Не беспокойтесь, это не ваша вина.')
                else switch (response.status) {
                    case 400: throw new Error('Ошибка 400: Bad Request. \nЗапрос ошибочен. Проверьте формат запроса и состав параметров.');
                    case 403: throw new Error('Ошибка 403: Forbidden \nНет прав для обработки запроса.');
                    case 404: throw new Error('Ошибка 404: Not Found \nНе найден указанный метод.');
                    case 413: throw new Error('Ошибка 413: Request Entity Too Large \nСлишком большой запрос, уменьшите его размер до 10MB.');
                    case 429: throw new Error('Ошибка 429: Too many requests \nСлишком много запросов, уменьшите их частоту.');
                    default: throw new Error('Ошибка');
                }
            })
            .then((response) => {
                console.log(response);
                const index = words.indexOf(id);
                words.splice(index, 1);
                setWords([...words]);
            })
            .catch((error) => {
                setErrorMessage(error.message);
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
                else if (response.status < 400 && response.status >= 300)
                    throw new Error('Ошибка перенаправления.')
                else if (response.status >= 500)
                    throw new Error('Ошибка на сервере. Не беспокойтесь, это не ваша вина.')
                else switch (response.status) {
                    case 400: throw new Error('Ошибка 400: Bad Request. \nЗапрос ошибочен. Проверьте формат запроса и состав параметров.');
                    case 403: throw new Error('Ошибка 403: Forbidden \nНет прав для обработки запроса.');
                    case 404: throw new Error('Ошибка 404: Not Found \nНе найден указанный метод.');
                    case 413: throw new Error('Ошибка 413: Request Entity Too Large \nСлишком большой запрос, уменьшите его размер до 10MB.');
                    case 429: throw new Error('Ошибка 429: Too many requests \nСлишком много запросов, уменьшите их частоту.');
                    default: throw new Error('Ошибка');
                }
            })
            .then((response) => {
                console.log(response);
                //const index = words.indexOf(editing_word);
                //setWords([...words.slice(0, index), editing_word, ...words.slice(index+1)]);
                setWords(words.map(word => word.id === id ? editing_word : word))
            })
            .catch((error) => {
                setErrorMessage(error.message);
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
