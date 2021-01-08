import React from "react";
import ReactDOM from "react-dom";

import { debugContextDevtool } from "react-context-devtool";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { AuthContext, AuthContextProvider } from "./context/auth-context";
import { ErrorContextProvider } from "./context/error-context";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ErrorContextProvider>
        <App />
      </ErrorContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  container
);

debugContextDevtool(container);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
