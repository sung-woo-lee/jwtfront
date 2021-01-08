import React, { useEffect, useContext, useState } from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/auth-context";
import { ErrorContext } from "./context/error-context";

import SignIn from "./components/SignIn/SignIn";
import CheckStatus from "./components/CheckStatus/CheckStatus";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const App = (props) => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const { isError, setIsError, errorMessage, setErrorMessage } = useContext(
    ErrorContext
  );

  useEffect(() => {
    console.log("useEffect from App is running");
    const checkAuthStatus = async (token) => {
      const response = await fetch(
        `http://${process.env.REACT_APP_BACKEND_HOST}:4125/api/checkAuth`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );
      const data = await response.json();
      if (data.user) {
        console.log("Found a prexisting login:" + data.user);
        setUser(data.user);
      }
    };

    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      checkAuthStatus(jwt);
    }

    setIsLoading(false);
  }, [setUser, setIsLoading]);

  return (
    <div>
      <BrowserRouter>
        {user ? (
          <>
            <Route path="/check-status" exact>
              <CheckStatus />
            </Route>
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
          </>
        ) : null}
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
