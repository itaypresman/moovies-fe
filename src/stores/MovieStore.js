import { action, observable, makeObservable } from 'mobx';
import Platform from '@lib/platform.js';


class MovieStore {
    searchText = '';
    results = [];
    currentFilm = null;
    currentFilmId = null;

    error = null;

    constructor() {
        makeObservable(this, {
            searchText: observable,
            results: observable,
            currentFilm: observable,
            error: observable,

            setSearchText: action,
            setResults: action,
            setCurrentFilmId: action,
            makeSearch: action,
            getFilm: action,
        });
    };

    setSearchText = searchText => {
        this.searchText = searchText;

        if (this.searchText.length > 2) {
            this.makeSearch(this.searchText);
        }

        if (!this.searchText) {
            this.results = [];
        }
    };

    setResults = results => {
        this.results = results;
    };

    makeSearch = searchText => {
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

    getFilm = filmId => {
        const params = {
            id: this.currentFilmId,
        };

        Platform.get('/filmInfo', { params }).then(response => {
            if ((response.status === 200) && !('error' in response.data)) {
                this.currentFilm = response.data;
                this.error = null;
            } else if ((response.status === 200) && ('error' in response.data)) {
                this.error = response.data.error;
                this.currentFilm = null;
                this.currentFilmId = null;
            } else {
                this.error = 'api_error';
                this.currentFilm = null;
                this.currentFilmId = null;
            }
        });
    };

    setCurrentFilmId = filmId => {
        this.currentFilmId = filmId;
    }
}


export default new MovieStore();
