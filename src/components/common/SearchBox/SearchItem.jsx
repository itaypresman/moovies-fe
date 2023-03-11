import React from 'react';
import './SearchBox.css';
import MovieStore from '@stores/MovieStore.js';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';


function SearchItem({title, id}) {
    const navigate = useNavigate()

    const onFilmClick = () => {
        MovieStore.setSearchText('');
        MovieStore.setCurrentFilmId(id);
        navigate(id);
    }

    return (
        <div onClick={onFilmClick}>
            {title}
        </div>
    );
}

export default observer(SearchItem);
