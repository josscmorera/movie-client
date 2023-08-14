import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user , setUser}) => {


    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <nav>
                <br/>
                    <Link to="/">List Movies</Link>
                <br/>
                   {user && <Link to="/favorites">My Favorites</Link>}
                <br/>
                    {!user ? <Link to="/login">Login</Link> : <a onClick={handleLogout} >Logout</a>}
                   
        </nav>

    );
};

export default NavBar;
