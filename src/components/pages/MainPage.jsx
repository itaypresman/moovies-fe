import React from 'react';
import MovieStore from '../../stores/MovieStore.js';


function MainPage() {
    return (
        <div>
            <h1>Hello world</h1>
            <p>{MovieStore.searchText}</p>
        </div>
    );
}


export default MainPage;
