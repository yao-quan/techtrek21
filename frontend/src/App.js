import './App.css';
import Navbar from './components/navbar/Navbar'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  
  const [users, setUsers] = useState({})

  useEffect(() => {
    const axiosUsers = async () => {
      const res = await axios.get('/home')
      setUsers(res.data)
    }
    axiosUsers()
  }, [])

  

  return (
    <div className="App">
      <Navbar users = {users}/>
    </div>
  );
}

export default App;
