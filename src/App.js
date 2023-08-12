import './App.css';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

import NavBar from './Components/NavBar';
import { getUser } from './Services/user';


function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');


  useEffect(() => {
    const getUserData = async () => {
      const user = await getUser();
      setUser(user);

    }
    getUserData();
  }, [token]);

  return (
    <div className="App">
      <NavBar user={user} />
      <Outlet context={{ user }} />

    </div>
  );
}

export default App;
