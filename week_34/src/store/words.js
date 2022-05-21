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
        this.isError = false;
        this.isLoaded = false;
        
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

    loadData = () => {
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
            })
            .catch((error) => {
                console.log(error);
                this.isError = true;
            })
    }

    addWord = (values) => {
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
            })
            .catch((error) => {
                console.log(error);
                this.isError = true;
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
                    for (let i=0; i<this.words.length; i++)
                        if (this.words[i].id === id)
                            this.words[i] = word;
                }
                else {
                    this.errorStatus = response.status;
                    throw new Error('ошибка на веб-сервере');
                }
            })
            /*.then((data) => {
                console.log(data);
                for (let el of this.words) 
                    if (el.id == id) {
                        console.log(el);
                        console.log(this.words);
                        console.log(this.words[i].id);
                        el = data;
                        console.log(el);
                    }
            })*/
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
                    for (let i=0; i<this.words.length; i++)
                        if (this.words[i].id === id)
                            this.words.splice(i, 1);
                }
                else {
                    this.errorStatus = response.status;
                    throw new Error('ошибка на веб-сервере');
                }
            })
            /*.then(() => {
                const index = this.words.indexOf(id);
                console.log(index)
                this.words.splice(index, 1);
            })*/
            .catch((error) => {
                console.log(error);
                this.isError = true;
            })
    }

}