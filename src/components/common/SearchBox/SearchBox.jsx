import React from 'react';
import './SearchBox.css';
import MovieStore from '@stores/MovieStore.js';
import { observer } from 'mobx-react';
import SearchItem from '@components/common/SearchBox/SearchItem.jsx';


function SearchBox() {
    const onTextChange = e => {
        MovieStore.setSearchText(e.target.value);
    };

    const SearchResults = MovieStore.results.map(item => <SearchItem title={ item.Title } id={ item.imdbID }
                                                                     key={ item.imdbID }/>);
    return (
        <div id={ 'search-container' }>
            <input onKeyPress={ onTextChange } type={ 'text' } id={ 'search-input' } placeholder={ 'Search' }/>
            <div id={ 'search-results' }>
                { MovieStore.results.length ? SearchResults : null }
            </div>
        </div>
    );
}

export default observer(SearchBox);
