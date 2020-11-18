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

function App() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    console.log(formData);
  };
  return (
    <div className={classes.root}>
      <h1>Sign in below!</h1>
      <form className={classes.form} onSubmit={(event) => signIn(event)}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
}

export default App;
