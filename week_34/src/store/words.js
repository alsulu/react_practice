import { makeAutoObservable } from 'mobx';

export default class WordsStore {
    words = [];
    isLoading = false;
    isLoaded = false;
    isError = false;
    errorStatus = 200;

    constructor() {
        makeAutoObservable(this);
    }

    getWords = () => {
        this.isLoading = true;
        this.isLoaded = false;
        this.isError = false;
        
        fetch('/api/words')
            .then((response) => {
                console.log(response);
                if (response.ok)
                    return response.json();
                else {
                    this.errorStatus = response.status;
                    throw new Error('ошибка на веб-сервере');
                }
            })
            .then((data) => {
                this.words = data;
                //setTimeout(() => this.isLoading=false, 5000);
                this.isLoading = false;
                this.isLoaded = true;
            })
            .catch((error) => {
                console.log(error);
                this.isError = true;
                //setTimeout(() => this.isLoading=false, 5000);
                this.isLoading = false;
                this.isLoaded = true;
            })
    };

    addWord = (values) => {
        this.isLoading = true;
        this.isLoaded = false;
        this.isError = false;

        const word = {
            english: values.word,
            transcription: values.transcription,
            russian: values.translation,
        }

        fetch('/api/words/add', {
            method: 'POST',
            body: JSON.stringify(word),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok)
                    return response.json();
                else {
                    this.errorStatus = response.status;
                    throw new Error('ошибка на веб-сервере');
                }
            })
            .then((word) => {
                //console.log(word);
                this.words.push(word);
                this.isLoading = false;
                this.isLoaded = true;
            })
            .catch((error) => {
                console.log(error);
                this.isError = true;
                this.isLoading = false;
                this.isLoaded = true;
            })
    }

    editWord = (id, values) => {
        this.isError = false;

        const word = {
            english: values.word,
            id: id,
            russian: values.translation,
            tags: "",
            tags_JSON: "",
            transcription: values.transcription,
        }

        fetch('/api/words/' + id + '/update', {
            method: 'POST',
            body: JSON.stringify(word),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    this.errorStatus = response.status;
                    throw new Error('ошибка на веб-сервере');
                }
            })
            .then((word) => {
                const index = this.words.findIndex(item => item.id === id);
                this.words[index] = word;
            })
            .catch((error) => {
                console.log(error);
                this.isError = true;
            })
    }

    deleteWord = (id) => {
        this.isError = false;

        const word = {
            id: id,
        }

        fetch('/api/words/' + id + '/delete', {
            method: 'POST',
            body: JSON.stringify(word),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    this.errorStatus = response.status;
                    throw new Error('ошибка на веб-сервере');
                }
            })
            .then(() => {
                const index = this.words.findIndex(item => item.id === id);
                this.words.splice(index, 1);
            })
            .catch((error) => {
                console.log(error);
                this.isError = true;
            })
    }
}