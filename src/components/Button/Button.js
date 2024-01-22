import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <>
      <button
        className={props.classname}
        type={props.type}
        onClick={props.onClickHandler}
        disabled={props.disabled}
        style={{transition: '0.7s'}}
      >
        {props.children}
      </button>
    </>
  );
}
