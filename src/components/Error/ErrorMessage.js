import React, { useContext } from "react";

import { ErrorContext } from "../../context/error-context";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "none",
  },
  modal: {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "gray",
    opacity: 0.6,
  },
  errorMessageBox: {
    zIndex: 5,
    width: 500,
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  errorMessage: {
    textAlign: "center",
    zIndex: 10,
    color: "black",
  },
});

const ErrorMessage = (props) => {
  const { setIsError } = useContext(ErrorContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.modal} onClick={() => setIsError(false)} />
      <div className={classes.errorMessageBox}>
        <h2 className={classes.errorMessage}>{props.message}</h2>
      </div>
    </div>
  );
};
export default ErrorMessage;
