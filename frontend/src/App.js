import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import Expense from "./components/expense/Expense"
import Login from "./components/login/Login" 
import Dashboard from "./components/dashboard/Dashboard" 

function App() {
  const [users, setUsers] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setState({
      "id": 2,
      "user_id": 1,
      "name": "SWT",
      "budget": 80000,
      "description": "Smart Watch Tracker"
    },)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/dashboard/expenses" element={<Expense project = {state} />}></Route>
    </Routes>
  );
}

export default App;
