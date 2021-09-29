import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/friends">Friends</Link>
            <Link className="link" to="/notfound">Not Found</Link>
            <Link className="link" to="/about">About Us</Link>

        </div>
    );
};

export default Header;