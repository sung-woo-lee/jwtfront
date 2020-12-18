import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { useHistory } from "react-router-dom";

const CheckStatus = (props) => {
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setUser(null);
      localStorage.removeItem("jwt");
      history.push("/");
    }, 3 * 1000);
  });
  return (
    <div>
      <h1>You are {user}, good job!</h1>
      <h2>Signing you out now.</h2>
    </div>
  );
};

export default CheckStatus;
