import React, { useState } from "react";
import Button from "../Button/Button";
import "./FormInput.css";
import Card from "../Card/Card";
import Popup from "../Card/Popup";

const FormInput = (props) => {
  const [trigger, setTrigger] = useState(false);

  const [username, setUser] = useState("");
  const [age, setAge] = useState("");
  const uniqueId = Math.random();

  const nameChangeHandler = (event) => {
    setUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //if trigger = true it'll show the popup as per the condition.
    if (username === "" || age === "") {
      setTrigger(true);
    
    }
    else if(age < 0){
      setTrigger(true)
    }
    else {
     
      const newUser = {
        key: uniqueId,
        name: username,
        age: age,
      };

      props.newUserObj(newUser);

      setUser("");
      setAge("");
    }
  };

  //this function is called in popup.js when we click on okay button
  const triggerSetHandler = (bool) => {
    if (bool === true) {
      setTrigger(false);
    } else {
      setTrigger(true);
    }
  };

  return (
    <>
      <Card className="form">
        <form action="#" onSubmit={formSubmitHandler}>
          <label htmlFor="name">Username:</label>
          <br />
          <input
            type="text"
            name="name"
            className="input"
            value={username}
            onChange={nameChangeHandler}
          />
          <br />
          <br />

          <label htmlFor="age">Age:</label>
          <br />
          <input
            type="number"
            name="age"
            className="input"
            value={age}
            onChange={ageChangeHandler}
          />
          <br />
          <Button type="submit" className="button">
            Add User
          </Button>
        </form>
      </Card>
      
      {/* if the age is negative (age < 0 ?) it'll show popup1.  : else it'll
      show popup2 */}
      {/* we've passed trigger as a prop to popup.js initially it is false */}
      {/* triggerSetter will be called when okay button is clicked on popup.js */}
      
      {age < 0 ? (<Popup triggerSetter={triggerSetHandler} trigger={trigger}>
        <h2>Invalid Input</h2>
        <p>Age must be positive.</p>

      </Popup>) :
     (<Popup triggerSetter={triggerSetHandler} trigger={trigger}>
        <h2>Invalid Input</h2>
        <p>You must fill the form.</p>
      </Popup>)}
    </>
  );
};

export default FormInput;