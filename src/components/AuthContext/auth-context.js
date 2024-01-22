import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, //to get the suggestion we're using it here
  onLogin: (email, password) => {}
});

//managing login and logout from here, instead of App component.
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setisLoggedin] = useState(false);

  const loginHandler = () => {
    setisLoggedin(true);
  };

  const logoutHandler = () => {
    setisLoggedin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;