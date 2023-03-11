import { action, observable, makeObservable } from 'mobx';
import axios from 'axios';


class MovieStore {
    searchText = '';
    results = [];
    currentFilm = {};
    error = null;

    constructor() {
        makeObservable(this, {
            searchText: observable,
            results: observable,
            currentFilm: observable,
            error: observable,

            setSearchText: action,
            setCurrentFilm: action,
            makeSearch: action,
        });
    };

    setSearchText = searchText => {
        this.searchText = searchText;
    };

    getSearchText = () => {
        return this.searchText;
    };

    setCurrentFilm = currentFilm => {
        this.currentFilm = currentFilm;
    };

    makeSearch = () => {
        if (!this.searchText) {
            return;
        }

        const data = {
            title: this.searchText,
        };

        const url = process.env.PLATFORM_URL;
        axios.post(url, data).then(response => {
            if ((response.status === 200) && !('error' in response.data)) {
                this.results = response.data;
                this.error = null;
            } else if ((response.status === 200) && ('error' in response.data)) {
                this.error = response.data.error;
                this.results = [];
            } else {
                this.error = 'api_error';
                this.results = [];
            }
        });
    };
}


export default new MovieStore();
