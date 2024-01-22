import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false, 
    onLogout: () => {}  //to get the suggestion we're using it here
})

export default AuthContext;