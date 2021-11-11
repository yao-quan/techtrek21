import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import mainLogo from "./newLogo.png";
import Grid from "@material-ui/core/Grid";

function Login({ setUsername, setPassword }) {
  return (
    <div className="login-wrapper" style={{ color: "red" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <img
                src={mainLogo}
                className="photo"
                alt="fireSpot"
                style={{
                  height: "90px",
                  width: "90px",
                }}
              />

              <form>
                <label>
                  <Typography variant="h7" component="div">
                    Username
                  </Typography>
                  <input
                    type="text"
                    onChange={(e) => (setUsername = e.target.value)}
                  />
                </label>
                <label>
                  <Typography variant="h7" component="div">
                    Password
                  </Typography>
                  <input
                    type="password"
                    onChange={(e) => (setPassword = e.target.value)}
                  />
                </label>
                <div>
                  <Button size="small">Submit</Button>
                </div>
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
