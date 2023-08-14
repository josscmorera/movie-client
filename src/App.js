import './App.css';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

import NavBar from './Components/NavBar';
import { getUser } from './Services/user';
import { getMovies } from './Services/movie';
import LoaderPage from './Components/LoaderPage';


function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([])

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
  
  useEffect(() => {
    getUserData();
    callMovies()
  }, []);

  return (
    <div className="App">
      
      {
        ldUser || ldMovies ? <LoaderPage /> : <>
        <NavBar user={user} setUser={setUser} />
        <Outlet context={{ user, getUserData, setUser, movies, callMovies }} />
        </>
      }
      

    </div>
  );
}

export default App;
