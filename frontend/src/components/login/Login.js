import React, { useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mainLogo from'./newLogo.png';
import secondaryLogo from'./newLogo2.png';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
          window.location.replace("/dashboard");
        } else {
          console.log("Invalid username and password combination");
          setErrorMessage("Invalid username and password combination")
        }
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage("Connection Error")
      });
  }
  return (
    <div className="login-wrapper" style={{
      backgroundImage: `url(${mainLogo})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"100% 100%"}}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh',minWidth:"80%" }}
      >
      <Grid item xs={2}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            Budget Tracking App
          </Typography>

          <form onSubmit = {handleSubmit}>
              <label>
                <TextField
                  label={'margin="dense"'}
                  required
                  id="outlined-required"
                  label="Username"
                  defaultValue=""
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <p></p>
              </label>
              <label>
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  onChange={(e) => setPassword(e.target.value)}
                />   
              </label>

                <Button variant="text" href="#contained-buttons" type="submit" onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>

              { errorMessage && <h5 className="error" style={{ color:"red"}}> {errorMessage} </h5> }
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
