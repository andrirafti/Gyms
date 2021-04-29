import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Login/Profile'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./Nav.css"
import LoginButton from './Login/LoginButton'
import LogOut from './/Login/LogOut'
import './Login/Log.css'


import {useAuth0} from "@auth0/auth0-react"


const Nav = () => {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="nav">
      <Profile />
      <div>
      <h2 id="appName">New York City Gyms</h2>
      </div>
      <Link className="login"to='/gyms'>All Gyms</Link>
        <Link className="login" to='/'>Home </Link>
        <LoginButton/>
        <LogOut />
        
        
    </div>
 
  )
}

export default Nav
