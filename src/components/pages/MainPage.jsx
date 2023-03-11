import React from 'react';
import MovieStore from '@stores/MovieStore.js';
import { observer } from 'mobx-react';


function MainPage() {
    return (
        <div>
            <h1>Hello world</h1>
            <p>{MovieStore.searchText}</p>
        </div>
    );
}


export default observer(MainPage);
