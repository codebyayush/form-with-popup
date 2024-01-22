import React, { useContext, useState } from "react";
import "./App.css";
import Forminput from "./components/FormInput/Forminput";
import Navbar from "./components/Navbar/Navbar";
import AuthContext from "./components/AuthContext/auth-context";
import Welcome from "./components/Welcomepage/Welcome";

const App = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <Navbar />
      {!ctx.isLoggedIn && <Forminput />}
      {ctx.isLoggedIn && <Welcome logoutHandler={ctx.onLogout} />}
    </>
  );
};

export default App;
