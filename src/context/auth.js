import { setDefaultResultOrder } from "dns";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  useEffect(() => {
    if (localStorage.getItem("userLogged")) {
      let person = localStorage.getItem("userLogged");
      person = JSON.parse(person);
      setDefaultResultOrder(person);
    }
  }, []);

  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthProvider);
