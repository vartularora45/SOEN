import React, { createContext, useContext, useState } from "react";
// import cookies from 'js-cookie'
import Cookies from 'js-cookie';
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const initialUserState = Cookies.get('jwt') || localStorage.getItem('userInfo');
  
  console.log(initialUserState);
  const [user, setUser] = React.useState(initialUserState ? JSON.parse(initialUserState) : null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>)
}

export const useAuth = () =>useContext(AuthContext);