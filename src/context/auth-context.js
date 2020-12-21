import React, { useEffect, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      setUser("user1");
    }
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
