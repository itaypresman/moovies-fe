import React, { useEffect } from 'react';
import MovieStore from '@stores/MovieStore.js';
import { observer } from 'mobx-react';
import './FilmInfo.css';


function FilmInfo() {
    useEffect(() => {
        MovieStore.getFilm();
    }, [MovieStore.currentFilmId]);

    if (!MovieStore.currentFilm) {
        return null;
    }

    return (
        <div className={ 'movie' }>
            <h1 className='movie-title'>{ MovieStore.currentFilm.Title }</h1>
            <div className='movie-details'>
                <img src={ MovieStore.currentFilm.Poster } alt='Постер фильма'/>
                <ul>
                    <li><strong>Year:</strong> { MovieStore.currentFilm.Year }</li>
                    <li><strong>Language:</strong> { MovieStore.currentFilm.Language }</li>
                    <li><strong>Country:</strong> { MovieStore.currentFilm.Country }</li>
                    <li><strong>Genre:</strong> {MovieStore.currentFilm.Genre}</li>
                    <li><strong>Actors:</strong> {MovieStore.currentFilm.Actors}</li>
                    <li><strong>Director:</strong> {MovieStore.currentFilm.Director}</li>
                    <li><strong>Writer:</strong> {MovieStore.currentFilm.Writer}</li>
                    <li><strong>Awards:</strong> {MovieStore.currentFilm.Awards}</li>
                    <li><strong>Plot:</strong> {MovieStore.currentFilm.Plot}</li>
                </ul>
            </div>
        </div>
    );
}


export default observer(FilmInfo);
