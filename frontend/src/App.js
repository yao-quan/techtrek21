import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Expense from "./components/expense/Expense";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [users, setUsers] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <Route path="/" element={
        <Login
          setUserName = {setUsername}
          setPassword = {setPassword}
        />
      }></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/dashboard/expenses" element={<Expense />}></Route>
    </Routes>
  );
}

export default App;
