import { useContext } from "react";
import React from "react";
import AuthContext from "../AuthContext/auth-context";

const Navbar = (props) => {

  //removed AuthContext.consumer instead of it, we'll make use of useContext.
  //it's more elegant
  const ctx = useContext(AuthContext)

  return (
          <nav
            className={`navbar navbar-expand-lg ${
              ctx.isLoggedIn ? "navbar-dark bg-success" : "navbar-dark bg-dark"
            }`} style={{transition: '0.7s'}}
          >
              <a href="#" className="navbar-brand text-decoration-underline m-2">
                <h2>Login Page</h2>
              </a> 

              {/* ms-auto to give margin from start in bootstrap5 */}
              <ul className="navbar-nav ms-auto">
                {ctx.isLoggedIn && (
                  <li className="nav-item m-2">
                    <a href="#" style={{color: 'whitesmoke'}}>Users</a>
                  </li>
                )}
                {ctx.isLoggedIn && (
                  <li className="nav-item m-2">
                    <a href="#" style={{color: 'whitesmoke'}}>Admin</a>
                  </li>
                )}
                {ctx.isLoggedIn && (
                  <li className="nav-item m-2">
                    <button
                      className="btn btn-secondary"
                      onClick={ctx.onLogout}
                      style={{transition: '0.7s'}}
                    >
                      Logout
                    </button> 
                  </li>
                )}
              </ul>
          </nav>
        );
}
  
export default Navbar;
