import './App.css';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

import NavBar from './Components/NavBar';
import { getUser } from './Services/user';
import { getMovies } from './Services/movie';


function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([])

  const getUserData = async () => {
    const user = await getUser();
    setUser(user);
  }

  const callMovies = async () => {
    const movies = await getMovies()
    setMovies(movies)
  }
  
  useEffect(() => {
    getUserData();
    callMovies()
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Outlet context={{ user, getUserData, setUser, movies, callMovies }} />

    </div>
  );
}

export default App;
