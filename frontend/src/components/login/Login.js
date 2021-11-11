import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Login({ username, password }) {
  return (
    <div className="login-wrapper">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <form>
              <label>
                  <p>Username</p>
                      <input type="text" onChange={e => username = (e.target.value)}/>
                  </label>
              <label>
                  <p>Password</p>
                  <input type="password" onChange={e => password = (e.target.value)}/>
              </label>
              <div>
                  <button type="submit">Submit</button>
              </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
  //Example: command to use to re-route on button click
  //window.location.replace("/Login");
}

export default Login;
