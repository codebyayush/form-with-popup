import React, { useContext, useReducer, useState } from "react";
import Button from "../Button/Button";
import AuthContext from "../AuthContext/auth-context";

//reducers
const emailReducer = (state, action) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(action.type === "INPUT_USER"){
          return {value: action.value, isValid: emailRegex.test(action.value)}
      }
      else{
        return {value: '', isValid: false}
      }
}

const ageReducer = (state, action) => {
      if(action.type === "INPUT_USER"){
          return {value: action.value, isValid: action.value >= 18}
      }
      else{
        return {value: '', isValid: false}
      }
}

const passwordReducer = (state, action) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(action.type === "INPUT_USER"){
    return {value: action.value, isValid: action.value.length > 5}
    // passwordRegex.test(action.value)
}
  else{
    return {value: '', isValid: false}}
}

export default function Forminput(props) {
  const [trigger, setTrigger] = useState(false);
  const ctx = useContext(AuthContext)
  
  const [validateForm, setValidForm] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false})
  const [ageState, dispatchAge] = useReducer(ageReducer, {value: '', isValid: false})
  const [passwordState, dispatchPass] = useReducer(passwordReducer, {value: '', isValid: false})

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      emailState.value === "" ||
      passwordState.value === "" ||
      ageState.value === ""
    ) {
      setTrigger(true);
    } else if (ageState.value < 18) {
      setTrigger(true);
    } else {
      dispatchEmail({value: ""})
      dispatchAge({value: ""})
      dispatchPass({value: ""})
    }
  };

  const emailChangeHandler = (event) => {
      dispatchEmail({type: "INPUT_USER", value: event.target.value})

      setValidForm(
        ageState.isValid && emailState.isValid && passwordState.isValid
  )
  };

  const passChangeHandler = (event) => {
    dispatchPass({type: "INPUT_USER", value: event.target.value})

    setValidForm(
      ageState.isValid && emailState.isValid && passwordState.isValid
)
  };

  const ageChangeHandler = (event) => {
    dispatchAge({type: "INPUT_USER", value: event.target.value})

    setValidForm(
      ageState.isValid && emailState.isValid && passwordState.isValid
)
  };

  const triggerHandler = (bool) => {
    if (bool === true) {
      setTrigger(false);
    } else {
      setTrigger(true);
    }
  };

  return (
    <> 
      <>
      <div className="card mx-auto w-50 m-3">
      <form action="#" onSubmit={submitHandler}>
        <div className="m-3">
          <label htmlFor="name" className="form-label">
            Email:
          </label>
          <br />
          <input
            type="text"
            id="email"
            className="form-control"
            value={emailState.value}
            onChange={emailChangeHandler}
            placeholder="email"
          />
        </div>
        <div className="m-3 ">
          <label htmlFor="age" className="form-label ">
            Age:
          </label>
          <br />
          <input
            type="number"
            id="age"
            className="form-control"
            value={ageState.value}
            onChange={ageChangeHandler}
            placeholder="age"
          />
        </div>

        <div className="m-3 ">
          <label htmlFor="pass" className="form-label ">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="pass"
            className="form-control"
            value={passwordState.value}
            onChange={passChangeHandler}
            placeholder="password"
          />
        </div>
        <Button type="submit" classname="button m-3" disabled={!validateForm} onClickHandler={ctx.onLogin}>
          Login
        </Button> 
      </form>
    </div>
    {/* {ageState.value !== "" && ageState.value < 18 ? (
      <Popup trigger={trigger} onOkayClickHandler={triggerHandler}>
        <div class="card-body">
          <h5 class="card-title">Invalid Input</h5>
          <p class="card-text">You must be 18 or above</p>
        </div>
      </Popup>
    ) : (
      <Popup trigger={trigger} onOkayClickHandler={triggerHandler}>
        <div class="card-body">
          <h5 class="card-title">Invalid Input</h5>
          <p class="card-text">You must fill the form.</p>
        </div>
      </Popup>
    )} */}
    </>
    </>
  );
}