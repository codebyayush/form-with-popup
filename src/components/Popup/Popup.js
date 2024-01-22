import React from 'react'
import ReactDom from 'react-dom';
import './Popup.css'

export default function Popup(props) {
  return (props.trigger) ?
  
    ReactDom.createPortal(
      <div className="popup">
          <div class="card" style={{ width: "20rem" }}>
            {props.children}
            <button className='btn btn-outline-primary m-3' onClick={() => props.onOkayClickHandler(true)}>Okay</button>
          </div>
      </div>
    , document.getElementById('popup-portal'))
    : ""
}