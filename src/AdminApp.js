import './App.css';
import {  Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import NavBar from './Components/NavBar';
import LoaderPage from './Components/LoaderPage';
import { getUser } from './Services/user';
import { getMovies, updateLastMovies } from './Services/movie';


function AdminApp() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([])
  const navigate = useNavigate();


  const [ldUser, setLdUser] = useState(true);
  const [ldMovies, setLdMovies] = useState(true);

  const getUserData = async () => {
    const user = await getUser();
    setUser(user);
    setLdUser(false);
  }

  const callMovies = async () => {
    const movies = await getMovies()
    setMovies(movies)
    setLdMovies(false)
  }

  const handleFetch = async () => {
    setLdMovies(true);
    await updateLastMovies();
    callMovies();
}
  
  useEffect(() => {
    getUserData();
    callMovies()
  }, []);

  useEffect(() => {
    if (user) {
      if (!user.isAdmin) {
        navigate('/admin/login')
      }
    } else {
      if (!ldUser) {
        navigate('/admin/login')
      }
    }
  }, [user, ldUser])


  return (
    <div className="App">
      
      {
        ldUser || ldMovies ? <LoaderPage /> : <>
        <NavBar user={user} setUser={setUser} callMovies={callMovies} onFetch={handleFetch} />
        <Outlet context={{ user, getUserData, setUser, movies, callMovies, setMovies }} />
        
        </>
      }
    </div>
  );
}

export default AdminApp;
