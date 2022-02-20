import { useState } from "react";

const useError = () => {
    const [message, setMessage] = useState('изначальное значение');
    const findError = (status) => {
        if (status < 400 && status >= 300)
            setMessage('Ошибка перенаправления.')
        else if (status >= 500)
            setMessage('Ошибка на сервере. Не беспокойтесь, это не ваша вина.')
        else switch (status) {
            case 400: setMessage('Ошибка 400: Bad Request. \nЗапрос ошибочен. Проверьте формат запроса и состав параметров.'); break;
            case 403: setMessage('Ошибка 403: Forbidden \nНет прав для обработки запроса.'); break;
            case 404: setMessage('Ошибка 404: Not Found \nНе найден указанный метод.'); break;
            case 413: setMessage('Ошибка 413: Request Entity Too Large \nСлишком большой запрос, уменьшите его размер до 10MB.'); break;
            case 429: setMessage('Ошибка 429: Too many requests \nСлишком много запросов, уменьшите их частоту.'); break;
            default: setMessage('Ошибка');
        }
    }
    return [message, findError];
}

export default useError;

/*const useError = () => {
    //const [message, setMessage] = useState('');
    //const error = new Error;
    let test = 'h';
    const findError = (status) => {
        if (status < 400 && status >= 300)
            test = 'Ошибка перенаправления.'
        else if (status >= 500)
            test = 'Ошибка на сервере. Не беспокойтесь, это не ваша вина.'
        else switch (status) {
            case 400: test = 'Ошибка 400: Bad Request. \nЗапрос ошибочен. Проверьте формат запроса и состав параметров.'; break;
            case 403: test = 'Ошибка 403: Forbidden \nНет прав для обработки запроса.'; break;
            case 404: test = 'Ошибка 404: Not Found \nНе найден указанный метод.'; break;
            case 413: test = 'Ошибка 413: Request Entity Too Large \nСлишком большой запрос, уменьшите его размер до 10MB.'; break;
            case 429: test = 'Ошибка 429: Too many requests \nСлишком много запросов, уменьшите их частоту.'; break;
            default: test = 'Ошибка';
        }
    }
    return [test, findError];
}

export default useError;*/