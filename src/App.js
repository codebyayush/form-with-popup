import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/Form/FormInput";
import FormData from "./components/formData/FormData";

//rfce to create a new component.


const App = () => {
  const [userObj, setuserObj] = useState([]);

  const newUserHandler = (newuserObj) => {
    setuserObj((prevUser) => [...prevUser, { ...newuserObj }]);
    console.log(userObj);
  };

  return (
    <>
      <FormInput newUserObj={newUserHandler} />
      <br />
      <FormData newUser={userObj} />
    </>
  );
};

export default App;