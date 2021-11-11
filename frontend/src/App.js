import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Login, Dashboard, Expenses } from "./components";

function App() {
  const [users, setUsers] = useState({});

  // useEffect(() => {
  //   const axiosUsers = async () => {
  //     const res = await axios.get('/home')
  //     setUsers(res.data)
  //   }
  //   axiosUsers()
  // }, [])

  return (
    // <div className="App">
    //   <Navbar users = {users}/>
    // </div>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/dashboard/expenses" element={<Expenses />}></Route>
    </Routes>
  );
}

export default App;
