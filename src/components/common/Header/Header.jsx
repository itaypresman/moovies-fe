import React from 'react';
import './Header.css';
import SearchBox from '../SearchBox/SearchBox.jsx';


function Header() {
    return (
        <header>
            <div id='logo'>OIMDB</div>
            <SearchBox/>
        </header>
    );
}

export default Header;
