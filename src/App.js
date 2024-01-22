import React, { useState } from "react";
import "./App.css";
import Forminput from "./components/FormInput/Forminput";
import Navbar from "./components/Navbar/Navbar";
import AuthContext from "./components/AuthContext/auth-context";
import Welcome from "./components/Welcomepage/Welcome";


const App = () => {
  const [isLoggedin, setisLoggedin] = useState(false);

  const logoutHandler = () => {
        setisLoggedin(false)
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedin, onLogout: logoutHandler}}>
      <Navbar logoutHandler={logoutHandler}/>
      {!isLoggedin && <Forminput isLoggedin={(bool) => setisLoggedin(bool)}/>}
      {isLoggedin && <Welcome logoutHandler={() => logoutHandler}/>}
    </AuthContext.Provider>
  );
}; 

export default App;