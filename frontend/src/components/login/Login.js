import React, { useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mainLogo from'./newLogo.png';
import Grid from '@material-ui/core/Grid';

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
    <div className="login-wrapper" style={{color: "red"}}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
      <Grid item xs={3}>
      <Card sx={{ width: 'auto'} }>
        <CardContent>
            <img  src={mainLogo} className="photo" alt="fireSpot" 
            style={{
              height: "90px",
              width: "90px"}}/>
          
          <form onSubmit = {handleSubmit}>
              <label>
                <Typography variant="h7" component="div">
                  Username
                </Typography>
                <input type="text" onChange={(e) => setUserName(e.target.value)} />
              </label>

              <label>
                  <Typography variant="h7" component="div">
                    Password
                  </Typography>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />              
              </label>

              <label>
                <Button variant="text" href="#contained-buttons" type="submit" onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>
              </label>
          </form>
        </CardContent>
      </Card>
      </Grid>
      </Grid>
    </div>

  );
  //Example: command to use to re-route on button click
  //window.location.replace("/Login");
}

export default Login;
