function Login({ username, password }) {
  return (
    <div className="login-wrapper">
      <h1>Landing Page - Login</h1>
      <form>
        {/* <label>
            <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
        <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div> */}
      </form>
    </div>
  );
  //Example: command to use to re-route on button click
  //window.location.replace("/Login");
}

export default Login;
