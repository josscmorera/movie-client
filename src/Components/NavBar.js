import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user , setUser, onFetch}) => {

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    const isAdmin = user && user.isAdmin;

    return (
        <nav className='nav-bar' >
            <Link to={!isAdmin ? "/" : "/admin" }>List Movies</Link>
            {user && !user.isAdmin && <>
                <Link to="/favorites">My Favorites</Link>
            </>
            }
            {
                isAdmin && 
                <button onClick={onFetch} >
                    fetch new movies
                </button>

            }
            {!user ? <>
                <Link to={!isAdmin ? "/login" : "/admin/login" }>Login</Link>   
            </> : <a onClick={handleLogout} >Logout</a>
            }     
        </nav>

    );
};

export default NavBar;
