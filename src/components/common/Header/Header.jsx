import React from "react";
import "./Header.css";


function Header() {
    return (
        <header>
            <div id="logo">OIMDB</div>
            <div id="search-container">
                <input type="text" id="search-input" placeholder="Search"/>
                <div id="search-results"></div>
            </div>
        </header>
    );
}

export default Header;
