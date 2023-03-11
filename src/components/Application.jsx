import React from 'react';
import MainPage from './pages/MainPage/MainPage.jsx';
import FilmInfo from './pages/FilmInfo/FilmInfo.jsx';
import Header from './common/Header/Header.jsx';
import './Application.css';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router';



function Application() {
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path={ '/' } exact={ true } element={ <MainPage/> }/>
                <Route path={ '/:filmId' } element={ <FilmInfo/> }/>
            </Routes>
        </React.Fragment>
    );
}


export default Application;
