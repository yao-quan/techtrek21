import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    console.log("handlesubmit");
    event.preventDefault();

    const loginInfo = {
      username: username,
      password: password,
    };

    console.log(loginInfo);

    axios
      .post("http://localhost:8001/login", loginInfo)
      .then(function (response) {
        if (response.status === 200) {
          console.log("login successful");

          //   window.location.replace("/dashboard");
        } else {
          console.log("Invalid username and password combination");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="login-wrapper">
      <h1>Landing Page - Login</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  //Example: command to use to re-route on button click
  //window.location.replace("/Login");
}

export default Login;
