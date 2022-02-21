import useReverse from '../hooks/useReverse';

const useValid = () => {
    const [valid, reverseValid] = useReverse({word: true, transcription: true, translation: true});
    const inputValidation = (name, value) => {
        const wordTest = /^[a-zA-Z\s]+$/;
        const transcriptionTest = /[0-9\d]/;
        const translationTest = /^[А-Яа-яЁё\s]+$/;
        if (value) {
            name === "word" && reverseValid(name, wordTest.test(value));
            name === "transcription" && reverseValid(name, !transcriptionTest.test(value));
            name === "translation" && reverseValid(name, translationTest.test(value))
        }
        else
            reverseValid(name, false)
    }
    return [valid, inputValidation]
}

export default useValid;