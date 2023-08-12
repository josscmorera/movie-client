import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
    return (
        <nav>
                <br/>
                    <Link to="/">List Movies</Link>
                <br/>
                   {user && <Link to="/blog-form">My Favorites</Link>}
                <br/>
                    {!user ? <Link to="/login">Login</Link> : <Link to="/logout">Logout</Link>}
                   
        </nav>

    );
};

export default NavBar;
