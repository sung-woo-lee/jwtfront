import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: 800,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& input": {
      boxSizing: "border-box",
      margin: "1rem 0",
      padding: ".5rem",
      width: "400px",
      height: "3rem",
      fontSize: "1.5rem",
    },
  },
});

const SignIn = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getRequest = () => {
    fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:4125/api/login`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const signIn = (event) => {
    event.preventDefault();

    const formData = {
      username,
      password,
    };

    console.log(formData);

    fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:4125/api/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log("something went wrong " + err));
  };
  return (
    <div className={classes.root}>
      <h1>Sign in below!</h1>
      <form className={classes.form} onSubmit={(event) => signIn(event)}>
        <input
          name="text"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input name="submit" id="submit" type="submit" />
      </form>
      <button onClick={() => getRequest()}> Press for get request</button>
      <h3>Host port is: {process.env.REACT_APP_BACKEND_HOST}</h3>
    </div>
  );
};

export default SignIn;
