import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { useHistory, Redirect } from "react-router-dom";

const CheckStatus = (props) => {
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  const jwt = localStorage.getItem("jwt");

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("jwt");
    history.push("/");
  };

  if (!user || !jwt) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>You are {user}, welcome to your profile</h1>
      <h3>You should get some content written here.</h3>
      <h3>CONTENT BLOCK 1!</h3>
      <h3>CONTENT BLOCK 22222</h3>
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
};

export default CheckStatus;
