import React from 'react'
import Button from '../Button/Button';
import './Popup.css';
import ReactDOM  from 'react-dom';



function Popup(props) {

//initially the value of trigger is false,
// if the trigger value is true only then we'll see popup
// otherwise we'll pass empty string, so that we'll see form.
  return (props.trigger) ? (

    // taking the elements inside the popup as children 
    // passed onclickfun as a prop to Button compo. 
    // when button is clicked it sets the trigger to false. because we've passed true.

    //we've created a portal which takes this popup beside the root div.
    //put all the DOM inside the ReactDOM.createPortal(DOM, getelementby id or class) 
    //now goto the index.html and create a div with same id.
    ReactDOM.createPortal(<div className='popup'>
        <div className="popup-inner">
            {props.children}
            <Button className="popup-button" onclickfun = {() => props.triggerSetter(true)}>Okay</Button>
        </div>
    </div> , document.getElementById('portal'))
  ) : ""
  }

export default Popup;