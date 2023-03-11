import { action, observable, makeObservable } from 'mobx';
import axios from 'axios';
import Platform from '@lib/platform.js';


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

    setSearchText = async searchText => {
        this.searchText = searchText;

        if (this.searchText.length > 2) {
            await this.makeSearch(this.searchText);
        }

        if (!this.searchText) {
            this.results = [];
        }
    };

    getSearchText = () => {
        return this.searchText;
    };

    setCurrentFilm = currentFilm => {
        this.currentFilm = currentFilm;
    };

    makeSearch = async searchText => {
        const params = {
            title: searchText,
        };

        Platform.get('/search', { params }).then(response => {
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
