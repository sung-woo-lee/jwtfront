import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "./components/SignIn/SignIn";
import CheckStatus from "./components/CheckStatus/CheckStatus";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/check-status" exact>
            <CheckStatus />
          </Route>
          <Route path="/" exact>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
