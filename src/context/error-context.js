import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorContextProvider = (props) => {
  const [isError, setIsError] = useState(false);

  const [errorMessage, setErrorMessage] = useState(
    "An Error Occured. Please try again. If error persists please contact _____."
  );

  const values = {
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
  };
  return (
    <ErrorContext.Provider value={values}>
      {props.children}
    </ErrorContext.Provider>
  );
};
