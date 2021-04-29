import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Log.css'
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  return (
    !isAuthenticated && (
    <button class="login"onClick={() => loginWithRedirect()}>
      Sign Up / LogIn

    </button>
  ))
}

export default LoginButton
