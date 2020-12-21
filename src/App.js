import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./context/auth-context";
import { ErrorContextProvider } from "./context/error-context";

import SignIn from "./components/SignIn/SignIn";
import CheckStatus from "./components/CheckStatus/CheckStatus";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const App = (props) => {
  return (
    <div>
      <AuthContextProvider>
        <ErrorContextProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/check-status" exact>
                <CheckStatus />
              </Route>
              <Route path="/profile" exact>
                <ProfilePage />
              </Route>
              <Route path="/" exact>
                <SignIn />
              </Route>
            </Switch>
          </BrowserRouter>
        </ErrorContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
