import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { AuthContext } from "../../context/auth-context";
import { ErrorContext } from "../../context/error-context";
import ErrorMessage from "../Error/ErrorMessage";

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
  const history = useHistory();
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const { isError, setIsError, errorMessage, setErrorMessage } = useContext(
    ErrorContext
  );

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
    localStorage.removeItem("jwt");
    const formData = {
      username,
      password,
    };
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
      .then((json) => {
        if (!json.ok) {
          console.log(json);
          throw Error(json.message);
        }
        setUser(json.data.username);
        localStorage.setItem("jwt", json.data.token);
        history.push("/check-status");
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage("Something went wrong " + err);
      });
  };
  return (
    <div className={classes.root}>
      {isError ? <ErrorMessage message={errorMessage} /> : null}

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
