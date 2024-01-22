import React, { useContext } from 'react'
import Button from '../Button/Button'
import AuthContext from '../AuthContext/auth-context'

const Welcome = (props) => {

  return ( 
    <div className="card mx-auto w-25 m-3">
        <h2 className='m-3'>Welcome to the login page</h2>
        <Button classname="btn btn-outline-secondary m-3" type="submit" onClickHandler={props.logoutHandler()} >Logout</Button>
    </div>
  )
}
export default Welcome;