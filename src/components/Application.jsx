import React from 'react';
import { observer } from 'mobx-react';
import MainPage from './pages/MainPage.jsx';
import Header from './common/Header/Header.jsx';
import './application.css';
import { Route, Routes  } from 'react-router';


function Application() {
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path={'/'} exact={true} component={MainPage}/>
                <Route path={'/film'} component={MainPage}/>
            </Routes>
        </React.Fragment>
    );
}


export default observer(Application);
